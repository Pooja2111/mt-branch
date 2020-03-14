import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Companydata } from '../companydata';
import { CompanydataService } from '../companydata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companydata',
  templateUrl: './companydata.component.html',
  styleUrls: ['./companydata.component.css']
})
export class CompanydataComponent implements OnInit {

  constructor(private companydataservice:CompanydataService,private router:Router) { }
  companydata : Companydata=new Companydata();  
  submitted = false;  
  ngOnInit() {
    var companyName = window.localStorage.getItem("edit-companyName");
    if (companyName != null && companyName != "") {
     this.companydataservice.findOneInAll1(companyName)
      .subscribe(data => {
       this.companydata = data; this.companydatasaveform.setValue(this.companydata)
      });
    }
    this.submitted = false;
   }
  companydatasaveform=new FormGroup({  
    companyName:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
    turnOver:new FormControl('',[Validators.required]),  
    ceo:new FormControl('',[Validators.required,Validators.minLength(2)]),
    boardOfDirectors:new FormControl('',[Validators.required,Validators.minLength(10)]),
    listInStock:new FormControl(),
    sector:new FormControl(),
    briefWriteup:new FormControl(),
    stockCode:new FormControl()
    }); 
    saveCompanydata(saveCompanydata){  
      this.companydata=new Companydata();  
      this.companydata.companyName=this.CompanyName.value;  
      this.companydata.turnOver=this.TurnOver.value;  
      this.companydata.ceo=this.Ceo.value;  
      this.companydata.boardOfDirectors=this.BoardOfDirectors.value;  
      this.companydata.listInStock=this.ListInStock.value;
      this.companydata.sector=this.Sector.value;
      this.companydata.briefWriteup=this.BriefWriteup.value;
      this.companydata.stockCode=this.StockCode.value;
       this.submitted=true;
      this.save();  
    } 
    save() {  
      this.companydataservice.savecompanydata(this.companydata)  
        .subscribe(data => console.log(data), error => console.log(error));  
      this.companydata = new Companydata(); 
      window.localStorage.removeItem("edit-companyName");
      this.router.navigate(['home'])   
    }  
    get CompanyName(){  
      return this.companydatasaveform.get('companyName');  
    }  
    get TurnOver(){  
      return this.companydatasaveform.get('turnOver');  
    }  
    get Ceo(){  
      return this.companydatasaveform.get('ceo');  
    }  
    
    get BoardOfDirectors(){  
      return this.companydatasaveform.get('boardOfDirectors');  
    }  
    get ListInStock(){  
      return this.companydatasaveform.get('listInStock');  
    }  
    get Sector(){  
      return this.companydatasaveform.get('sector');  
    }  
    get BriefWriteup(){  
      return this.companydatasaveform.get('briefWriteup');  
    }
    get StockCode(){  
      return this.companydatasaveform.get('stockCode');  
    }  
    
    saveCompanydataform(){  
      this.submitted=false;  
      this.companydatasaveform.reset();  
    }  
  
  }
    
  


