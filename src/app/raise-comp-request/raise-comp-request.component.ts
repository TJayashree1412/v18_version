import { Component, OnInit } from '@angular/core';
import { CompensationService } from '../service/compensation.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
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
  
  raiseCompForm = this.fb.group({
    // userName: ['', Validators.required],
    // password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private router: Router, public compService: CompensationService) { }

  ngOnInit(): void {
    
    this.createCompensation();
    
    // this.compService.createCompensation().subscribe(
    //   data =>{
    //     // this.createComp = data;
    //   },
    //   error => {
    //     this.statusCode = error.status;
    //     this.errorMessage = error.error;
    //     alert(this.errorMessage);
    //   } 
    // )
  }
  createCompensation(){
    
    this.compService.createCompensation().subscribe(
     data =>{
     this.createComp = null;
      },
      error => {
        this.statusCode = error.status;
        this.errorMessage = error.error;
        alert(this.errorMessage);
      } 
     )


  }
 


}
