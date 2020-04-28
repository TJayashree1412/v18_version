import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  private errorMessage;
  userName: string;
  loginFailure=false;

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, public dataservice: DataService) { }

  ngOnInit() {
    sessionStorage.clear();
  }

  async onSubmit() {
    this.errorMessage='';
    let getdata = await this.dataservice.authenticate(this.loginForm.value.userName,this.loginForm.value.password);
    console.log("getdata:"+JSON.stringify(getdata));
    //if (getdata.isSuccess==="true")
    
     sessionStorage.setItem('loggeduser',this.loginForm.value.userName);
     sessionStorage.setItem('userdata',JSON.stringify(getdata));
     sessionStorage.setItem('isAuthenticated',"true");
    this.router.navigate(['/privacyNotice']);
  
    this.errorMessage='Incorrect IntranetID or Password';
    this.loginFailure=true;
     return;
  }

  SignOut(){
    sessionStorage.clear();
  }
}
