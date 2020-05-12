import { Component, OnInit } from '@angular/core';
import { CompensationService } from '../service/compensation.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateCompensation } from '../model/create-compensation';
import { CompensationDTO } from '../CompensationDTO';

@Component({
  selector: 'app-raise-comp-request',
  templateUrl: './raise-comp-request.component.html',
  styleUrls: ['./raise-comp-request.component.css']
})
export class RaiseCompRequestComponent implements OnInit {
  createComp: CompensationDTO;
  statusCode : number;
  errorMessage : string;
  usstaymorethan89days=['Yes','No'];
  
  EmpInfoForm = new FormGroup({
    EmployeeInfoData: new FormGroup({
      empserial:new FormControl(null,[Validators.required])
      
  }),
  PmpData: new FormGroup({
    pmpseatid:new FormControl(null,[Validators.required])
}),
  empvisatype: new FormControl(),
  comptypselect:new FormControl(),
  countryselect:new FormControl(),
  us89daysstay:new FormControl('Yes')
  
  });

  constructor(private fb: FormBuilder,private router: Router, public compService: CompensationService) {}
 
  ngOnInit(): void {
    
    this.createCompensation();
    }
 
  async createCompensation(){
    console.log('Satya')
    this.compService.createCompensation().subscribe(
     data =>{
         this.createComp = data.body;
       },
      error => {
        this.statusCode = error.status;
        this.errorMessage = error.error;
       } 
     )
   
  }
 
  onSubmit(){
    console.log('Form submitted successfully');
    console.log(this.EmpInfoForm);

  }

}
