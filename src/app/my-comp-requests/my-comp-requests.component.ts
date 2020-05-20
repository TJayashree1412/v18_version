import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompensationService } from '../service/compensation.service';
import { CreateCompensation } from '../model/create-compensation';
import { HCAMDBUser } from '../HCAMDBUser';
import { CompensationDetailsDTO } from '../CompensationDetailsDTO';
declare var IBMCore: any;
declare var jQuery: any;

@Component({
  selector: 'app-my-comp-requests',
  templateUrl: './my-comp-requests.component.html',
  styleUrls: ['./my-comp-requests.component.css']
})
export class MyCompRequestsComponent implements OnInit {

  pemUser: HCAMDBUser;
  comprecords: CompensationDetailsDTO[];
  compDraft: CompensationDetailsDTO[] = [];
  compInit: CompensationDetailsDTO[] = [];
  compInitAddnInfoAdded: CompensationDetailsDTO[] = [];
  compDiscuss: CompensationDetailsDTO[] = [];
  compDiscussReqInfoAdded: CompensationDetailsDTO[] = [];
  compMgrAccepted: CompensationDetailsDTO[] = [];
  compMgrAcceptanceOverriden: CompensationDetailsDTO[] = [];
  compAddnInfoReq: CompensationDetailsDTO[] = [];
  compForReview: CompensationDetailsDTO[] = [];
  compDiscussAddnInfoReq: CompensationDetailsDTO[] = [];
  compReqProcessed: CompensationDetailsDTO[] = [];
  compRejected: CompensationDetailsDTO[] = [];
  compArchived: CompensationDetailsDTO[] = [];
  otherCompRecords: CompensationDetailsDTO[] = [];
  constructor(private router: Router, public compensationService: CompensationService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: prefer-const
    this.pemUser = new HCAMDBUser();
    const listofRoles = sessionStorage.getItem('userdata');
    // tslint:disable-next-line: prefer-const
    let json = JSON.parse(listofRoles);
    console.log('json:' , json);
    this.pemUser.blueGroupName = json.blueGroupName;
    this.pemUser.cnumID = json.hostEmpSerial;
    this.pemUser.notesId = json.notesId;
    this.pemUser.intranetID = sessionStorage.getItem('loggeduser');
    console.log(this.pemUser.intranetID , '        ' , this.pemUser.notesId, '         ', this.pemUser.cnumID);
    // this.dummytestdata();
    this.compensationService.getCompensationList(this.pemUser).subscribe( (resp: any) => {
      console.log('response:', resp);
      this.comprecords = resp.body;
      jQuery('#compTableInProgress').dataTable().fnDestroy();
      jQuery('#compTableActive').dataTable().fnDestroy();
      jQuery('#compTableCompleted').dataTable().fnDestroy();
      jQuery('#compTableInActive').dataTable().fnDestroy();
      jQuery('#compTableOthers').dataTable().fnDestroy();
      console.log('comprecords: ', this.comprecords);
      this.sortCompRecords();
    }, (error: any) => {
      console.log(error, 'error');
    }, async () => {
     setTimeout(() => {
         jQuery('contactsTable_filter input').attr('placeholder', 'Type here');
     }, 100);
     await this.delay(1);
     IBMCore.common.widget.datatable.init('#compTableInProgress');
     IBMCore.common.widget.datatable.init('#compTableActive');
     IBMCore.common.widget.datatable.init('#compTableCompleted');
     IBMCore.common.widget.datatable.init('#compTableInActive');
     IBMCore.common.widget.datatable.init('#compTableOthers');
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  sortCompRecords() {   // sorts the comp records obtained into differents list as per comp status.
    for (const comprecord of this.comprecords) {
      if (comprecord.compType === 'Other') { // Other
        if (comprecord.compSt === 'C') {
          comprecord.compSt = 'Current';
        } else if (comprecord.compSt === 'F') {
          comprecord.compSt = 'Future';
        }
        this.otherCompRecords.push(comprecord);
      } else {
          if (comprecord.compStatus === 'PARAM018') {  // Draft
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compDraft.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM019') { // Initiated
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compInit.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM020') { // Initiated - Required Information added
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compInitAddnInfoAdded.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM023') { // Discuss
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compDiscuss.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM191') { // Discuss-Required Info added
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compDiscussReqInfoAdded.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM026') { // MGR Accepted
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            } else if (comprecord.compSt === 'H') {
              comprecord.compSt = 'History';
            }
            this.compMgrAccepted.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM300') { // Override Manager Acceptance
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compMgrAcceptanceOverriden.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM021') { // Initiated - Additional information required
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compAddnInfoReq.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM022') { // Offer for review
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compForReview.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM190') {  // Discuss-Additional Info Reqrd
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compDiscussAddnInfoReq.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM027') { // Request Processed
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compReqProcessed.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM024') { // Rejected
            if (comprecord.compSt === 'H') {
              comprecord.compSt = 'History';
            }
            this.compRejected.push(comprecord);
          } else if (comprecord.compStatus === 'PARAM025') { // Archive
            if (comprecord.compSt === 'H') {
              comprecord.compSt = 'History';
            }
            this.compArchived.push(comprecord);
          }
      }
    }
  }

  // dummytestdata() {
  //   this.comprecords =  [   ​
  //                    { ​
  //                     empSerial: '104510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI 1',
  //                    middleName: '',
  //                    lastName: 'one',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'H',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'Rejected',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'H',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'Rejected',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'H',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'Archive',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'Request Processed',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'F',
  //                    compId: 'Request Processed',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'PARAM025',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'Discuss-Additional Info Reqrd',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'F',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'Discuss-Additional Info Reqrd',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'Other',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'PARAM025',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'Offer for review',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'PARAM025',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'PARAM025',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'PARAM025',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'PARAM025',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'PARAM025',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'PARAM025',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   },
  //                   { ​
  //                     empSerial: '604510744',
  //                    hostCountrySerial: null,
  //                    firstName: 'KRISHNAN UNNI',
  //                    middleName: '',
  //                    lastName: 'PULLARA MUNDAKKAL',
  //                    emailID: 'krishnan.unni@in.ibm.com',
  //   ​​                 currentWorkLocation: 'DALLAS',
  //                    zip: '75201',
  //                    compType: 'New Employee',
  //                    ​​compSt: 'C',
  //                    compId: 'CP000869',
  //                    obId: 'OB000807',
  //   ​                 compStatus: 'PARAM025',
  //                    ​​createdDt: '2020-03-04 06:20:41.462356'
  //                   }
  //  ];

  //   this.sortCompRecords();
  // }

  createCompReq() {
    this.router.navigate(['/raiseCompRequest']);
  }

}
