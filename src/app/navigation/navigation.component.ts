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
    let json = JSON.parse(listofRoles);
    this.Roles = json.actionEventList;
  }
  
    
}
