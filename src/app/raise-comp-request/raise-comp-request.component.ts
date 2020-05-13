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
  empserial: string;
  pmpseatid:string;
  
  
  EmpInfoForm = new FormGroup({
  empserial:new FormControl(null,[Validators.required]),
  pmpseatid:new FormControl(null,[Validators.required]),
  empvisatype: new FormControl(),
  comptypselect:new FormControl(),
  countryselect:new FormControl(),
  us89daysstay:new FormControl('Yes')
  
  });
  

  constructor(private fb: FormBuilder,private router: Router, public compService: CompensationService) {}
 
  ngOnInit(): void {
    this.empserial = '';
    this.pmpseatid ='';
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
    
      this.createComp = new CompensationDTO();
      
      this.createComp.empserial = this.EmpInfoForm.value.empserial;
      this.createComp.pmpseatid = this.EmpInfoForm.value.pmpseatid;
      this.createComp.countryCode=this.EmpInfoForm.value.countryselect.key;
      this.createComp.compType=this.EmpInfoForm.value.comptypselect.key;
      this.createComp.visaTyp=this.EmpInfoForm.value.empvisatype.key;
   
      this.compService.getEmployeeDetails(this.createComp).subscribe(resp =>{
        this.statusCode = resp.status;
        console.log('Success', this.statusCode);
        
      });
    }
  getEmployeeDetails(){
    console.log('Benarji')
  }

}
