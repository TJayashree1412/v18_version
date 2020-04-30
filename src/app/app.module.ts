import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { DataService } from './loginService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompensationHomeComponent } from './compensation-home/compensation-home.component';
import { MyCompRequestsComponent } from './my-comp-requests/my-comp-requests.component';
import { DrLeaveRequestComponent } from './dr-leave-request/dr-leave-request.component';
import { AllCompHistoryComponent } from './all-comp-history/all-comp-history.component';
import { AssignmentStatusComponent } from './assignment-status/assignment-status.component';
import { HelpComponent } from './help/help.component';
import { AllCompRequestComponent } from './all-comp-request/all-comp-request.component';
import { OnboardingListComponent } from './onboarding-list/onboarding-list.component';
import { HqOpsComponent } from './hq-ops/hq-ops.component';
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
import { FmlaViewComponent } from './fmla-view/fmla-view.component';
import { StaffingTeamComponent } from './staffing-team/staffing-team.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { ViewIBMIComponent } from './view-ibmi/view-ibmi.component' ;
import { EditIBMIComponent } from './view-ibmi/edit-ibmi/edit-ibmi.component';
import { AddIBMIComponent } from './view-ibmi/add-ibmi/add-ibmi.component';
import { ModalModule } from './modal';
import { ViewOnboardRecordComponent } from './view-onboard-record/view-onboard-record.component';
import { EditOnboardRecordComponent } from './edit-onboard-record/edit-onboard-record.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RoutingComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CompensationHomeComponent,
    MyCompRequestsComponent,
    DrLeaveRequestComponent,
    AllCompHistoryComponent,
    AssignmentStatusComponent,
    HelpComponent,
    AllCompRequestComponent,
    OnboardingListComponent,
    HqOpsComponent,
    PendingActionComponent,
    ApproveCompComponent,
    RedeploymentTrackerComponent,
    OnsiteHireCompComponent,
    ImmediateActionComponent,
    ManagerActionComponent,
    DataSheetsComponent,
    CompViewsComponent,
    SearchComponent,
    ElectronicSignatureComponent,
    EmployeeAssignmentResponseComponent,
    H1BExtensionLCAInputComponent,
    RedeploymentCompletionChecklistComponent,
    EndClientNameComponent,
    RaiseCompRequestComponent,
    ObApproverComponent,
    OnboardingViewsComponent,
    GeneralViewsComponent,
    OnboardReportsComponent,
    FmlaViewComponent,
    StaffingTeamComponent,
    PrivacyNoticeComponent,
    ViewIBMIComponent,
    EditIBMIComponent,
    AddIBMIComponent,
    ViewOnboardRecordComponent,
    EditOnboardRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [DataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
