import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Stockexchange } from '../stockexchange';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  constructor(private stockexchangeservice:StockexchangeService,private router:Router) { }
  stockexchange: Stockexchange=new Stockexchange();  
  submitted = false;  
  ngOnInit() {
    var seid = window.localStorage.getItem("edit-id");
    if (seid != null && seid != "") {
      this.stockexchangeservice.findOneInAll4(parseInt(seid))
        .subscribe(data => {
         this.stockexchange = data; this.stockexchangesaveform.setValue(this.stockexchange)
        });
    }
    this.submitted=false;
  }
  stockexchangesaveform=new FormGroup({  
    id:new FormControl('' , [Validators.required , Validators.minLength(1) ] ),  
    stockExchange:new FormControl('',[Validators.required]),  
    brief:new FormControl(),
    contactAddress:new FormControl('',[Validators.required,Validators.minLength(10),]),
    remarks:new FormControl()
   
    });
    saveStockexchange(saveStockexchange){  
      this.stockexchange=new Stockexchange();  
      this.stockexchange.id=this.Id.value;  
      this.stockexchange.stockExchange=this.Stockexchange.value;  
      this.stockexchange.brief=this.Brief.value;  
      this.stockexchange.contactAddress=this.ContactAddress.value;  
      this.stockexchange.remarks=this.Remarks.value;
      
       this.submitted=true;
      this.save();  
    } 
    save() {  
      this.stockexchangeservice.savestockexchange(this.stockexchange)  
        .subscribe(data => console.log(data), error => console.log(error));  
      this.stockexchange = new Stockexchange();  
      window.localStorage.removeItem("edit-id");
      this.router.navigate(['home']) 
    }  
    get Id(){  
      return this.stockexchangesaveform.get('id');  
    }  
    get Stockexchange(){  
      return this.stockexchangesaveform.get('stockExchange');  
    }  
    get Brief(){  
      return this.stockexchangesaveform.get('brief');  
    }  
    
    get ContactAddress(){  
      return this.stockexchangesaveform.get('contactAddress');  
    }  
    get Remarks(){  
      return this.stockexchangesaveform.get('remarks');  
    } 
     
   
    
    saveCompanydataform(){  
      this.submitted=false;  
      this.stockexchangesaveform.reset();  
    }  
  
  } 


