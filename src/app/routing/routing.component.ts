import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isNavigated(): boolean{
    console.log("sessionStorage.getItem(isNavigate)" ,sessionStorage.getItem("isNavigate") )
    if (sessionStorage.getItem("isNavigate") === "true") {      
      return true;      
      } else{
        return false;
      }
  }

}
