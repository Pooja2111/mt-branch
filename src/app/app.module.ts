import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
//import { AddUserComponent } from './adduser/adduser.component';
import {IpolistComponent} from './ipolist/ipolist.component'
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule}from './app-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {IpoComponent} from './ipo/ipo.component'
import { CompanydataComponent } from './companydata/companydata.component';
import { SectorComponent } from './sector/sector.component';
import { SectorlistComponent } from './sectorlist/sectorlist.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { StockexchangelistComponent } from './stockexchangelist/stockexchangelist.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { ComparecompanyComponent } from './comparecompany/comparecompany.component';
import { HighchartsService } from './comparecompany/highcharts-service.service';
import { UseripolistComponent } from './useripolist/useripolist.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    IpoComponent,
    IpolistComponent,
  
    AdminlandingComponent,
    ImportdataComponent,
    ManagecompaniesComponent,
    //AddUserComponent,
    UserlistComponent,
    CompanydataComponent,
    SectorComponent,
    SectorlistComponent,
    StockexchangeComponent,
    StockexchangelistComponent,
    StockpriceComponent,
    StockpricelistComponent,
    UserlandingComponent,
    ComparecompanyComponent,
    UseripolistComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule,  
   AppRoutingModule,
    RouterModule.forRoot([
      {
         path: 'login',
         component: LoginComponent
      },
      {
        path: 'companydata',
        component: CompanydataComponent
     },
     {
      path: 'comparecompany',
      component: ComparecompanyComponent
   },
      {
        path: 'signup',
        component: SignupComponent
     },
     {
      path: 'home',
      component: HomeComponent
   },
  
 {
  path: 'ipo',
  component: IpoComponent
},
 {
  path: 'importdata',
  component: ImportdataComponent
},
{
  path: 'adminlanding',
  component: AdminlandingComponent
},
{
  path: 'userlanding',
  component: UserlandingComponent
},
{
  path: 'useripolist',
  component: UseripolistComponent
},{
  path: 'managecompanies',
  component: ManagecompaniesComponent
}, {
  path: 'userlist',
  component: UserlistComponent
},
{
  path: 'ipolist',
  component: IpolistComponent
},
{
  path: 'sector',
  component: SectorComponent
},
{
  path: 'sectorlist',
  component:SectorlistComponent
},
{
  path: 'stockexchange',
  component:StockexchangeComponent
},
{
  path: 'stockexchangelist',
  component:StockexchangelistComponent
},
{
  path: 'stockpricelist',
  component:StockpricelistComponent
},
{
  path: 'stockprice',
  component:StockpriceComponent
}

   ])
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
