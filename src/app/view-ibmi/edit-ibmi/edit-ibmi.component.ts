import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { AdministratorServiceService } from 'src/app/service/administrator-service.service';
import { ActivatedRoute } from '@angular/router';
import { ParameterBean } from 'src/app/parameter-bean';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IBMIContact } from 'src/app/IBMIContact';

@Component({
  selector: 'app-edit-ibmi',
  templateUrl: './edit-ibmi.component.html',
  styleUrls: ['./edit-ibmi.component.css']
})
export class EditIBMIComponent implements OnInit {
  public IBMIid: string;
  headers: string[];
  // contactDetails: IBMIContact;
  resourceId: string;
  resource: string;
  emailId: string;
  phone: string;
  faxNum: string;
  countryName: string;
  countryCode: ParameterBean;
  countryMap: ParameterBean[] = [];
  countryForm: FormGroup;
  form: FormGroup;
  ibmiContact: IBMIContact;
  statusCode: any;
  constructor(public administratorService: AdministratorServiceService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      countryMap: ['']
    });


  }

  ngOnInit(): void {
    this.IBMIid = this.route.snapshot.paramMap.get('id');
    console.log(this.IBMIid);
    this.administratorService.editIBMIContact(this.IBMIid).subscribe( (resp: any) => {
      console.log(resp.body);
      this.resourceId = resp.body.resourceId;
      this.resource = resp.body.resource;
      this.emailId = resp.body.emailId;
      this.phone = resp.body.phone;
      this.faxNum = resp.body.faxNum;
      this.countryName = resp.body.countryName;
    });
    this.administratorService.getCountryMap().subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      console.log(keys);
      this.headers =  keys.map(key => `${key}: ${resp.headers.get(key)}`);
      for (const data of resp.body) {
        this.countryMap.push(data);
      }
      console.log(this.countryMap);
      // this.form.controls.orders.patchValue(this.countryName);
      this.form.controls.countryMap.patchValue(this.countryName);
    });
    // this.countryForm = this.fb.group({
    //   countryControf(this.getOrders()).subscribe(orders => {
    // });
  }
  updateContact() {
    this.ibmiContact = new IBMIContact();
    console.log(this.resourceId,this.resource, this.emailId, this.phone, this.faxNum, this.countryCode);
    this.ibmiContact.resourceId = this.resourceId;
    this.ibmiContact.resource = this.resource;
    this.ibmiContact.emailId = this.emailId;
    this.ibmiContact.phone = this.phone;
    this.ibmiContact.faxNum = this.faxNum;
    this.ibmiContact.countryCode = this.countryCode.paramId;
    console.log("this.countrycode:  ",this.countryCode,"this.countryName: ",this.countryCode.paramName);
    this.administratorService.updateIBMIContact(this.ibmiContact).subscribe(resp =>{
      this.statusCode = resp.status;
      if (this.statusCode === true) {
        console.log('Success', this.statusCode);
      }
    });
  }

  deleteContact(IBMIid: any) {
    this.administratorService.deleteIBMIContact(IBMIid).subscribe(resp =>{
      this.statusCode = resp.status;
      if (this.statusCode === true) {
        console.log('Success', this.statusCode);
      }
    });

  }

}
