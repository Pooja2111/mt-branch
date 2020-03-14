import { Component, OnInit } from '@angular/core';
import { CompanydataService } from '../companydata.service';
import { Companydata } from '../companydata';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-managecompanies',
  templateUrl: './managecompanies.component.html',
  styleUrls: ['./managecompanies.component.css']
})
export class ManagecompaniesComponent implements OnInit {

  constructor(private companydataservice: CompanydataService,private router:Router) { }
  
  managecompanies: Observable<Companydata[]>;
  ngOnInit() {
    this.companydataservice.getAllCompanyData().subscribe(data => {
      this.managecompanies = data;
     })
  }
  deleteCompanydata(companydata:Companydata)
{
   this.companydataservice.deleteCompanydata(companydata.companyName).subscribe(data=>{
   this.companydataservice.getAllCompanyData().subscribe(data=>{this.managecompanies=data;});
  });
  }
  updateCompanyData(companydata : Companydata ) {
    window.localStorage.removeItem("edit-companyName");
    window.localStorage.setItem("edit-companyName", companydata.companyName.toString());
   
    this.router.navigate(['companydata']);
   
   
   
    }

    
}
     
