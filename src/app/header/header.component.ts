import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() username:string
  profilePic:any;

  constructor(private router:Router ) {}

  ngOnInit() {
   let user = sessionStorage.getItem("loggeduser");
    this.username = user;
    this.profilePic="https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/"+sessionStorage.getItem("loggeduser");
  }
  SignOut(){
    sessionStorage.clear();
    this.router.navigate(['/Login']);
  }

  isUserAuthenticated(): boolean{
    if (sessionStorage.getItem("isAuthenticated") === "true") {      
      return true;      
      } else{
        return false;
      }
  }

}
