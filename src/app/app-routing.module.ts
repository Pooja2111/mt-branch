import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
//import { AddUserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CompanydataComponent } from './companydata/companydata.component';
import {IpolistComponent} from './ipolist/ipolist.component';
import {IpoComponent} from './ipo/ipo.component';
import { SectorlistComponent } from './sectorlist/sectorlist.component';
import { SectorComponent } from './sector/sector.component';
import { StockexchangeComponent } from './stockexchange/stockexchange.component';
import { StockexchangelistComponent } from './stockexchangelist/stockexchangelist.component';
import { StockpricelistComponent } from './stockpricelist/stockpricelist.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { ComparecompanyComponent } from './comparecompany/comparecompany.component';
import { UseripolistComponent } from './useripolist/useripolist.component';
const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent}, 
  {path:"adminlanding",component:AdminlandingComponent},
  {path:"importdata",component:ImportdataComponent},
  { path: 'managecompanies',component: ManagecompaniesComponent},
  {path: 'userlist',component: UserlistComponent},
  {path:'companydata',component: CompanydataComponent},
  {path:'ipo',component: IpoComponent},
  {path:'ipolist',component: IpolistComponent},
  {path:'sectorlist',component: SectorlistComponent},
  {path:'sector',component: SectorComponent},
  {path:'stockexchange',component: StockexchangeComponent},
  {path:'stockexchangelist',component: StockexchangelistComponent},
  {path:'stockpricelist',component: StockpricelistComponent},
  {path:'stockpricelist',component: StockpriceComponent},
  {path:"userlanding",component: UserlandingComponent},
  {path:"comparecompany",component: ComparecompanyComponent},
  {path:"useripolist",component: UseripolistComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
