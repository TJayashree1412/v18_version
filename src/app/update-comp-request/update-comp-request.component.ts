import { Component, OnInit, Input } from '@angular/core';
import { CompensationDTO } from '../CompensationDTO';

@Component({
  selector: 'app-update-comp-request',
  templateUrl: './update-comp-request.component.html',
  styleUrls: ['./update-comp-request.component.css']
})
export class UpdateCompRequestComponent implements OnInit {
  @Input() empData: CompensationDTO;
  constructor() { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails(){
    console.log('getEmployeeDetails(): '+JSON.stringify(this.empData))
  }
}
