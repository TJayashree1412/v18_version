import { Component, OnInit } from '@angular/core';
import { DataService } from '../loginService';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  Roles: any;

  constructor() { }
  ngOnInit() {
    let listofRoles = sessionStorage.getItem("userdata");
    console.log("JSON.parse(listofRoles)",JSON.parse(listofRoles));
    let json = JSON.parse(listofRoles);
    console.log("this.Roles",json.actionEventList);
    this.Roles = json.actionEventList;
  }
  
    
}
