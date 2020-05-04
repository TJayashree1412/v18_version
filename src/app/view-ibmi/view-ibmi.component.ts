import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IBMIContact } from 'src/app/IBMIContact';
import { AdministratorServiceService } from '../service/administrator-service.service';
import { Router } from '@angular/router';
declare var IBMCore: any;
declare var jQuery: any;

@Component({
  selector: 'app-view-ibmi',
  templateUrl: './view-ibmi.component.html',
  styleUrls: ['./view-ibmi.component.css']
})
export class ViewIBMIComponent implements OnInit {
  headers: string[];
  contactsList: IBMIContact[] = [];
  // public IBMIid: string;
  // @Output() send = new EventEmitter<string>();
  constructor(public administratorService: AdministratorServiceService, private router: Router) { }

  ngOnInit() {
    this.getContactsList();
  }
  async getContactsList() {
    this.administratorService.getIBMIContactsList().subscribe( resp => {
      console.log(resp);
      this.contactsList = resp.body;
      jQuery('#contactsTable').dataTable().fnDestroy();
      console.log(this.contactsList);
    }, (error: any) => {
      console.log(error, 'error');
    }, async () => {
     setTimeout(() => {
         jQuery('contactsTable_filter input').attr('placeholder', 'Type here');
     }, 100);
     await this.delay(1);
     IBMCore.common.widget.datatable.init('#contactsTable');
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  gotoContactDetails(url: string, id: string) {
    console.log([url, id]);
    // this.IBMIid = id;
    // this.send.emit(this.IBMIid);
    this.router.navigate([url, id]);
  }
  addContact(url: string) {
    console.log([url]);
    this.router.navigate([url]);
  }
}
