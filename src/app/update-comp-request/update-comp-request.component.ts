import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CompensationDTO } from '../CompensationDTO';

@Component({
  selector: 'app-update-comp-request',
  templateUrl: './update-comp-request.component.html',
  styleUrls: ['./update-comp-request.component.css']
})
export class UpdateCompRequestComponent implements OnInit {
  @Input() empData: CompensationDTO;
  isShown: boolean = false ; // hidden by default
  isShown1: boolean = false ;
  isShown2: boolean = false ;
  hLight_value : boolean = false;
  hLight_value1 : boolean = false;
  hLight_value2 : boolean = false;

  UpdateEmpForm = new FormGroup({
    // empserial:new FormControl(null,[Validators.required]),
    // empvisatype: new FormControl(),
    // us89daysstay:new FormControl('Yes')
    empserial:new FormControl(),
    emphomecountry:new FormControl(),
    
    });

  constructor() { }

  ngOnInit(): void {
    this.isShown = true;
    this.hLight_value = true;
    this.getEmployeeDetails();
  }

  getEmployeeDetails(){
    console.log('getEmployeeDetails(): '+JSON.stringify(this.empData))
  }

  toggleShow(index:any) {
    this. isShown= false ; // hidden by default
    this. isShown1= false ;
    this.isShown2= false ;
    this.hLight_value = false;
    this.hLight_value1 = false;
    this.hLight_value2= false;

  if(index==1){
  this.isShown = true;
  this.hLight_value = true;
  }
  else if(index==2){
    this.hLight_value1 = true;
  this.isShown1 = ! this.isShown1;
  }
  else if(index==3){
    this.hLight_value2 = true;
  this.isShown2 = ! this.isShown2;
  }
  }

  onSubmit(){
    console.log("Update comp onSubmit() Starts");
    console.log(JSON.stringify(this.UpdateEmpForm.value));
  }

}
