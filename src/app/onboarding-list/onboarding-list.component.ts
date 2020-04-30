import { Component, OnInit,ViewChild } from '@angular/core';
import { OnboardingService } from '../onboardingService';
import { Onboard } from '../Onboard';
import { ModalService } from '../modal';
declare var IBMCore: any;
declare var jQuery :any;
@Component({
  selector: 'app-onboarding-list',
  templateUrl: './onboarding-list.component.html',
  styleUrls: ['./onboarding-list.component.css']
})


export class OnboardingListComponent implements OnInit {
  onboardLists : Onboard[] = [];;
  pendingLandedList : Onboard[] = [];
  esignAwaitingList : Onboard[] = [];
  empId : String;
  obId: String;
 isSpinner = false;
  constructor (public onboardingService: OnboardingService,private modalService: ModalService ) {}

  ngOnInit() {
   
        this.getOnboardedList();
        this.getPendingLandedList();
        this.getEmpSignAwaitingList();
     
    }
    

     async getOnboardedList() {
       this.isSpinner = true;
       this.onboardingService.getOnboardedList()
       .subscribe((resp:any) => {
         this.onboardLists=resp.body;
         jQuery('#onboardingTable').dataTable().fnDestroy();
         } , (error: any) => {
           console.log(error, 'error');
         },async () => {
          setTimeout(() => {
              jQuery("onboardingTable_filter input").attr("placeholder", "Type here");
          }, 100);
          await this.delay(1);
         IBMCore.common.widget.datatable.init('#onboardingTable'); 
        });
        this.isSpinner = false;
      }
    
	     delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
      
  }


    async getPendingLandedList() {
      this.onboardingService.getPendingLandedList()
        .subscribe(resp => {
         this.pendingLandedList = resp.body
          jQuery('#pendingLandedTable').dataTable().fnDestroy();
         } , (error: any) => {
           console.log(error, 'error');
         },async () => {
          setTimeout(() => {
              jQuery("pendingLandedTable_filter input").attr("placeholder", "Type here");
          }, 100);
          await this.delay(1);
         IBMCore.common.widget.datatable.init('#pendingLandedTable'); 
        });
        
      }
    

      async getEmpSignAwaitingList() {
        this.onboardingService.getEmpSignAwaitingList()
        .subscribe((resp:any)=> {
          this.esignAwaitingList = resp.body
          jQuery('#esign').dataTable().fnDestroy();
         } , (error: any) => {
           console.log(error, 'error');
         },async () => {
          setTimeout(() => {
              jQuery("esign_filter input").attr("placeholder", "Search here");
          }, 100);
          await this.delay(1);
         IBMCore.common.widget.datatable.init('#esign'); 
        });
        
      }
     
  }
