import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompensationService } from '../service/compensation.service';
import { CreateCompensation } from '../model/create-compensation';
import { HCAMDBUser } from '../HCAMDBUser';
import { CompensationDetailsDTO } from '../CompensationDetailsDTO';

@Component({
  selector: 'app-my-comp-requests',
  templateUrl: './my-comp-requests.component.html',
  styleUrls: ['./my-comp-requests.component.css']
})
export class MyCompRequestsComponent implements OnInit {

  pemUser: HCAMDBUser;
  comprecords: CompensationDetailsDTO[];
  constructor(private router: Router, public compensationService: CompensationService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: prefer-const
    this.pemUser = new HCAMDBUser();
    let listofRoles = sessionStorage.getItem('userdata');
    // tslint:disable-next-line: prefer-const
    let json = JSON.parse(listofRoles);
    console.log('json:' , json);
    this.pemUser.blueGroupName = json.blueGroupName;
    this.pemUser.cnumID = json.hostEmpSerial;
    this.pemUser.notesId = json.notesId;
    this.pemUser.intranetID = sessionStorage.getItem('loggeduser');
    console.log(this.pemUser.intranetID ,"        " , this.pemUser.notesId, "         ",this.pemUser.cnumID);
    this.compensationService.getCompensationList(this.pemUser).subscribe( (resp: any) => {
      console.log("response:",resp);
      this.comprecords = resp.body;
      console.log("comprecords: ",this.comprecords);
    });
  }

  createCompReq() {
    this.router.navigate(['/raiseCompRequest']);
  }
}
