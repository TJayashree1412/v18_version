import { Component, OnInit,ViewChild } from '@angular/core';
import { OnboardingService } from '../onboardingService';
import { Onboard } from '../Onboard';

declare var IBMCore: any;
declare var jQuery :any;
@Component({
  selector: 'app-onboarding-list',
  templateUrl: './onboarding-list.component.html',
  styleUrls: ['./onboarding-list.component.css']
})


export class OnboardingListComponent implements OnInit {
  headers :String[];
  onboardList :any []=[];
  pendingLandedList : Onboard[] = [];
  esignAwaitingList : Onboard[] = [];
  
  
  constructor (public onboardingService: OnboardingService ) {}

  ngOnInit() {
      this.getOnboardedList();
      // this.getPendingLandedList();
      // this.getEmpSignAwaitingList();
     
    }
    

    getOnboardedList() {
      this.onboardingService.getOnboardedList()
        .subscribe(resp => {
          console.log(resp);
          // for (const data of resp.body) {
          //   this.onboardList.push(data);
          // }
          this.onboardList = resp.body
          console.log(this.onboardList);
		 } , (error: any) => {
                    console.log(error, 'error');
                },
           async () => {
          setTimeout(() => {
       //       jQuery("onboardingTable_filter input").attr("placeholder", "Type here");
          }, 100);
		    await this.delay(1);
       //   IBMCore.common.widget.datatable.init('#onboardingTable');
        });
      }
    
	     delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }


    async getPendingLandedList() {
      this.onboardingService.getPendingLandedList()
        .subscribe(resp => {
          console.log(resp);
          const keys = resp.headers.keys();
          this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
          for (const data of resp.body) {
            this.pendingLandedList.push(data);
          }
          console.log(this.pendingLandedList);
        });
    }

    async getEmpSignAwaitingList() {
      this.onboardingService.getEmpSignAwaitingList()
      .subscribe(resp => {
        console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
        for (const data of resp.body) {
            this.esignAwaitingList.push(data);
          }
          console.log(this.esignAwaitingList);
        });
    }
     
  }
