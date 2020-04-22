import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompensationService } from '../service/compensation.service';
import { CreateCompensation } from '../model/create-compensation';

@Component({
  selector: 'app-my-comp-requests',
  templateUrl: './my-comp-requests.component.html',
  styleUrls: ['./my-comp-requests.component.css']
})
export class MyCompRequestsComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createCompReq(){
    this.router.navigate(['/raiseCompRequest']);
  }
}
