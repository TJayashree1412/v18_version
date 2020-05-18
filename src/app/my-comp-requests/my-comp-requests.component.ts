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
  compDraft: CompensationDetailsDTO[];
  compInit: CompensationDetailsDTO[];
  compInitAddnInfoAdded: CompensationDetailsDTO[];
  compDiscuss: CompensationDetailsDTO[];
  compDiscussReqInfoAdded: CompensationDetailsDTO[];
  compMgrAccepted: CompensationDetailsDTO[];
  compMgrAcceptanceOverriden: CompensationDetailsDTO[];
  compAddnInfoReq: CompensationDetailsDTO[];
  compForReview: CompensationDetailsDTO[];
  compDiscussAddnInfoReq: CompensationDetailsDTO[];
  compReqProcessed: CompensationDetailsDTO[];
  compRejected: CompensationDetailsDTO[];
  compArchived: CompensationDetailsDTO[];
  otherCompRecords: CompensationDetailsDTO[];
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
      jQuery('#compReqTable').dataTable().fnDestroy();
      console.log('comprecords: ', this.comprecords);
      this.sortCompRecords();
    }, (error: any) => {
      console.log(error, 'error');
    }, async () => {
     setTimeout(() => {
         jQuery('contactsTable_filter input').attr('placeholder', 'Type here');
     }, 100);
     await this.delay(1);
     IBMCore.common.widget.datatable.init('#compReqTable');
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  sortCompRecords() {   // sorts the comp records obtained into differents list as per comp status.
    for (const comprecord of this.comprecords) {
      if (comprecord.compType === 'Other') {
        if (comprecord.compSt === 'C') {
          comprecord.compSt = 'Current';
        } else if (comprecord.compSt === 'F') {
          comprecord.compSt = 'Future';
        }
        this.otherCompRecords.push(comprecord);
      } else {
          if (comprecord.compStatus === 'Draft') {
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compDraft.push(comprecord);
          } else if (comprecord.compStatus === 'Initiated') {
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compInit.push(comprecord);
          } else if (comprecord.compStatus === 'Initiated - Required Information added') {
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compInitAddnInfoAdded.push(comprecord);
          } else if (comprecord.compStatus === 'Discuss') {
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compDiscuss.push(comprecord);
          } else if (comprecord.compStatus === 'Discuss-Required Info added') {
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compDiscussReqInfoAdded.push(comprecord);
          } else if (comprecord.compStatus === 'MGR Accepted') {
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            } else if (comprecord.compSt === 'H') {
              comprecord.compSt = 'History';
            }
            this.compMgrAccepted.push(comprecord);
          } else if (comprecord.compStatus === 'Override Manager Acceptance') {
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compMgrAcceptanceOverriden.push(comprecord);
          } else if (comprecord.compStatus === 'Initiated - Additional information required') {
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compAddnInfoReq.push(comprecord);
          } else if (comprecord.compStatus === 'Offer for review') {
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compForReview.push(comprecord);
          } else if (comprecord.compStatus === 'Discuss-Additional Info Reqrd') {  // PARAM190
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compDiscussAddnInfoReq.push(comprecord);
          } else if (comprecord.compStatus === 'Request Processed') { // PARAM027
            if (comprecord.compSt === 'C') {
              comprecord.compSt = 'Current';
            } else if (comprecord.compSt === 'F') {
              comprecord.compSt = 'Future';
            }
            this.compReqProcessed.push(comprecord);
          } else if (comprecord.compStatus === 'Rejected') {
            if (comprecord.compSt === 'H') {
              comprecord.compSt = 'History';
            }
            this.compRejected.push(comprecord);
          } else if (comprecord.compStatus === 'Archive') {
            if (comprecord.compSt === 'H') {
              comprecord.compSt = 'History';
            }
            this.compArchived.push(comprecord);
          }
      }
    }
  }

  dummytestdata() {
    this.comprecords =  [   ​
                     { ​
                      empSerial: '104510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI 1',
                     middleName: '',
                     lastName: 'one',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    },
                    { ​
                      empSerial: '604510744',
                     hostCountrySerial: null,
                     firstName: 'KRISHNAN UNNI',
                     middleName: '',
                     lastName: 'PULLARA MUNDAKKAL',
                     emailID: 'krishnan.unni@in.ibm.com',
    ​​                 currentWorkLocation: 'DALLAS',
                     zip: '75201',
                     compType: 'New Employee',
                     ​​compSt: 'C',
                     compId: 'CP000869',
                     obId: 'OB000807',
    ​                 compStatus: 'PARAM025',
                     ​​createdDt: '2020-03-04 06:20:41.462356'
                    }
   ];

    this.sortCompRecords();
  }

  createCompReq() {
    this.router.navigate(['/raiseCompRequest']);
  }

}
