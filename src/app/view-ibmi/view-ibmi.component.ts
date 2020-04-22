import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IBMIContact } from 'src/app/IBMIContact';
import { AdministratorServiceService } from '../service/administrator-service.service';
import { Router } from '@angular/router';

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
      const keys = resp.headers.keys();
      console.log(keys);
      this.headers =  keys.map(key => `${key}: ${resp.headers.get(key)}`);
      for (const data of resp.body) {
        this.contactsList.push(data);
      }
      console.log(this.contactsList);
    });
  }
  gotoContactDetails(url: string, id: string) {
    console.log([url, id]);
    // this.IBMIid = id;
    // this.send.emit(this.IBMIid);
    this.router.navigate([url, id]);

    // .then( (e) => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    // });
  }
  addContact(url: string) {
    console.log([url]);
    this.router.navigate([url]);
  }
}
 