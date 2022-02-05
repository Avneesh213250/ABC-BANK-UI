import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BranchComponent } from './branch/branch.component';
import { SalesEntryComponent } from './sales-entry/sales-entry.component';
import { ReportComponent } from './report/report.component';
import { OfficerComponent } from './officer/officer.component';
import { ActivityComponent } from './activity/activity.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SharedService } from './shared/shared.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginSrevice } from './login/login.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SalesEntryService } from './sales-entry/sales-entry.service';
import { SalesEntryListComponent } from './sales-entry/sales-entry-list/sales-entry-list.component';
import { SalesEntrySearchComponent } from './sales-entry/sales-entry-search/sales-entry-search.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SalesEntryEditComponent } from './sales-entry/sales-entry-edit/sales-entry-edit.component';
import { ExcelService } from './shared/excel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const appRoute:Routes=[
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'createPassword', component:ResetPasswordComponent},
  {path: 'home', component:HomeComponent, children:[
    {path:'activity', component:ActivityComponent},
    {path:'salesEntry', component:SalesEntryComponent},
    {path:'salesList', component:SalesEntryListComponent},
    {path:'searchSales', component:SalesEntrySearchComponent},
    {path:'editsales', component:SalesEntryEditComponent},
    {path:'report', component:ReportComponent},
    {path:'branch', component:BranchComponent},
    {path:'officer', component:OfficerComponent},
    {path:'editUser', component:EditUserComponent},
    {path:'chamgePass', component:ChangePasswordComponent}
  ], canActivate:[AuthGuard]}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SideMenuComponent,
    BranchComponent,
    SalesEntryComponent,
    ReportComponent,
    OfficerComponent,
    ActivityComponent,
    LoginComponent,
    EditUserComponent,
    ResetPasswordComponent,
    SalesEntryListComponent,
    SalesEntrySearchComponent,
    ChangePasswordComponent,
    SalesEntryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoute,{useHash:true}), NgbModule
  ],
  providers: [SharedService, LoginSrevice, SalesEntryService, ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
