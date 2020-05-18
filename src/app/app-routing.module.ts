import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompensationHomeComponent } from './compensation-home/compensation-home.component' ;
import { MyCompRequestsComponent } from './my-comp-requests/my-comp-requests.component' ;
import { DrLeaveRequestComponent } from './dr-leave-request/dr-leave-request.component';
import { AllCompHistoryComponent } from './all-comp-history/all-comp-history.component';
import { AssignmentStatusComponent } from './assignment-status/assignment-status.component' ;
import { HelpComponent } from './help/help.component' ;
import { AllCompRequestComponent } from './all-comp-request/all-comp-request.component';
import { OnboardingListComponent } from './onboarding-list/onboarding-list.component' ;
import { HqOpsComponent } from './hq-ops/hq-ops.component' ;
import { PendingActionComponent } from './pending-action/pending-action.component';
import { ApproveCompComponent } from './approve-comp/approve-comp.component';
import { RedeploymentTrackerComponent } from './redeployment-tracker/redeployment-tracker.component';
import { OnsiteHireCompComponent } from './onsite-hire-comp/onsite-hire-comp.component';
import { ImmediateActionComponent } from './immediate-action/immediate-action.component';
import { ManagerActionComponent } from './manager-action/manager-action.component';
import { DataSheetsComponent } from './data-sheets/data-sheets.component';
import { CompViewsComponent } from './comp-views/comp-views.component';
import { SearchComponent } from './search/search.component';
import { ElectronicSignatureComponent } from './electronic-signature/electronic-signature.component';
import { EmployeeAssignmentResponseComponent } from './employee-assignment-response/employee-assignment-response.component';
import { H1BExtensionLCAInputComponent } from './h1-b-extension-lca-input/h1-b-extension-lca-input.component';
import { RedeploymentCompletionChecklistComponent } from './redeployment-completion-checklist/redeployment-completion-checklist.component';
import { EndClientNameComponent } from './end-client-name/end-client-name.component';
import { RaiseCompRequestComponent } from './raise-comp-request/raise-comp-request.component';
import { ObApproverComponent } from './ob-approver/ob-approver.component';
import { OnboardingViewsComponent } from './onboarding-views/onboarding-views.component';
import { GeneralViewsComponent } from './general-views/general-views.component';
import { OnboardReportsComponent } from './onboard-reports/onboard-reports.component';
import { FmlaViewComponent } from './fmla-view/fmla-view.component' ;
import { StaffingTeamComponent } from './staffing-team/staffing-team.component' ;
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import {ViewIBMIComponent} from './view-ibmi/view-ibmi.component';
import {EditIBMIComponent} from './view-ibmi/edit-ibmi/edit-ibmi.component';
import {AddIBMIComponent} from './view-ibmi/add-ibmi/add-ibmi.component';
import { ViewOnboardRecordComponent } from './view-onboard-record/view-onboard-record.component';
import { UpdateCompRequestComponent } from './update-comp-request/update-comp-request.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'privacyNotice',component: PrivacyNoticeComponent},
  { path: 'Home', component: HomeComponent,  },
  { path: 'compHome', component: CompensationHomeComponent  },
  { path: 'myCompRequest', component: MyCompRequestsComponent  },
  { path: 'allCompHistory', component: AllCompHistoryComponent  },
  { path: 'drLeaveRequest', component: DrLeaveRequestComponent  },
  { path: 'assignmentStatus', component: AssignmentStatusComponent },
  { path: 'hqOps', component: HqOpsComponent },
  { path: 'allCompRequest', component: AllCompRequestComponent },
  { path: 'onboardingList', component: OnboardingListComponent },
  { path: 'viewPendingAction', component: PendingActionComponent },
  { path: 'viewApprvpending', component: ApproveCompComponent },
  { path: 'viewLctTrnsfr', component: RedeploymentTrackerComponent },
  { path: 'viewOnsiteHire', component: OnsiteHireCompComponent },
  { path: 'viewProcessRecord', component: ImmediateActionComponent },
  { path: 'compteamMngrView', component: ManagerActionComponent },
  { path: 'viewAllDataSheets', component: DataSheetsComponent },
  { path: 'compensationViews', component: CompViewsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'electronicSignature', component: ElectronicSignatureComponent },
  { path: 'empAssignResp', component: EmployeeAssignmentResponseComponent },
  { path: 'ViewH1BLCAExtension', component: H1BExtensionLCAInputComponent },
  { path: 'relocCompChkListHome', component: RedeploymentCompletionChecklistComponent },
  { path: 'ViewEndClientDtl', component: EndClientNameComponent },
  { path: 'raiseCompRequest', component: RaiseCompRequestComponent },
  { path: 'obApprover', component: ObApproverComponent },
  { path: 'onboaringViews', component: OnboardingViewsComponent },
  { path: 'generalViews', component: GeneralViewsComponent },
  { path: 'onboardReports', component: OnboardReportsComponent },
  { path: 'fmlaView', component: FmlaViewComponent },
  { path: 'compensationListST', component: StaffingTeamComponent },
  { path: 'help', component: HelpComponent },
  { path: 'viewIBMI', component: ViewIBMIComponent},
  {path: 'editIBMI/:id', component: EditIBMIComponent},
  {path: 'addIBMI', component: AddIBMIComponent},
  {path: 'viewOnboardRecord', component: ViewOnboardRecordComponent},
  {path: 'editOnboardRecord', component: ViewOnboardRecordComponent},
  {path: 'updateCompRequest', component: UpdateCompRequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
