import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompensationService } from '../service/compensation.service';
import { CreateCompensation } from '../model/create-compensation';

@Component({
  selector: 'app-my-comp-requests',
  templateUrl: './my-comp-requests.component.html',
  styleUrls: ['./my-comp-requests.component.css']
})
export class MyCompRequestsComponent implements OnInit {

  UserBluegrp: any;
  empSerial: any;
  notesId: any;
  intranetId: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line: prefer-const
    let listofRoles = sessionStorage.getItem('userdata');
    // tslint:disable-next-line: prefer-const
    let json = JSON.parse(listofRoles);
    console.log('json:' , json);
    this.UserBluegrp = json.blueGroupName;
    this.empSerial = json.hostEmpSerial;
    this.notesId = json.notesId;
    this.intranetId = sessionStorage.getItem('loggeduser');
    console.log(this.intranetId ,"        " , this.notesId, "         ",this.empSerial);
    
  }

  createCompReq(){
    this.router.navigate(['/raiseCompRequest']);
  }
}
