import { Component, OnInit } from '@angular/core';
import { AdministratorServiceService } from 'src/app/service/administrator-service.service';
import { ParameterBean } from 'src/app/parameter-bean';
import { IBMIContact } from 'src/app/IBMIContact';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-ibmi',
  templateUrl: './add-ibmi.component.html',
  styleUrls: ['./add-ibmi.component.css']
})
export class AddIBMIComponent implements OnInit {
  statusCode: any;
  contact: FormGroup;
  headers: string[];
  countryMap: ParameterBean[] = [];
  ibmiContact: IBMIContact;
  resource: string;
  emailId: string;
  phone: string;
  faxNum: string;
  country: ParameterBean;
  constructor(public administratorService: AdministratorServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resource = '';
    this.emailId = '';
    this.phone = '';
    this.faxNum = '';
    this.country = new ParameterBean();
    this.administratorService.getCountryMap().subscribe(resp => {
        this.countryMap = resp.body;
  });
    console.log('country name :', this.country);
  //   this.contact = this.formBuilder.group({
  //   resource: ['', Validators.required],
  //   emailId: ['', Validators.required],
  //   phone: ['', Validators.required],
  //   faxNum: ['', Validators.required],
  //   countryCode: [{}, Validators.required]
  // });
  }
  addContact() {
    this.ibmiContact = new IBMIContact();
    console.log(this.resource, this.emailId, this.phone, this.faxNum, this.country, this.country.paramId);
    this.ibmiContact.resource = this.resource;
    this.ibmiContact.emailId = this.emailId;
    this.ibmiContact.phone = this.phone;
    this.ibmiContact.faxNum = this.faxNum;
    this.ibmiContact.country = this.country.paramId;
    console.log('value of country:', this.ibmiContact.country );
    // this.administratorService.addIBMIContact(this.ibmiContact).subscribe(resp => {
    //   this.statusCode = resp.status;
    //   if (this.statusCode === true) {
    //     console.log('Success', this.statusCode);
    //   }
    // });
   }
  //  selectChangeHandler(event: any) {
  //    console.log(event.target,"       ",event.target.value);
  //   this.countryCode = event.target.value;

  //  }
}
