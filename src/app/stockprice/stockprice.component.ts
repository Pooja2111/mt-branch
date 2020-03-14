import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {
 

  constructor(private stockpriceservice:StockpriceService,private router:Router) { }
  stockprice: Stockprice=new Stockprice();  
  submitted = false;  

  ngOnInit() {
    var companyCode = window.localStorage.getItem("edit-stockExchange");
    if (companyCode != null && companyCode != "") {
      this.stockpriceservice.findOneInAll5(companyCode)
        .subscribe(data => {
         this.stockprice = data; this.stockpricesaveform.setValue(this.stockprice)
        });
    }
    this.submitted=false;
  }
  stockpricesaveform=new FormGroup({  
    companyCode:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),  
    stockExchange:new FormControl('',[Validators.required]),  
    currentPrice:new FormControl(),
    date:new FormControl(),
    time:new FormControl(),
    uploadfile:new FormControl()
  
   
    });
    saveStockprice(saveStockprice){  
      this.stockprice=new Stockprice();  
      this.stockprice.companyCode=this.CompanyCode.value;  
      this.stockprice.stockExchange=this.Stockexchange.value;  
      this.stockprice.currentPrice=this.CurrentPrice.value;  
      this.stockprice.date=this.Date.value;  
      this.stockprice.time=this.Time.value; 
      this.stockprice.uploadfile=this.Uploadfile.value; 
       this.submitted=true;
      this.save();  


}
save() {  
  this.stockpriceservice.savestockprice(this.stockprice)  
    .subscribe(data => console.log(data), error => console.log(error));  
  this.stockprice = new Stockprice(); 
  window.localStorage.removeItem("edit-stockExchange");
  this.router.navigate(['home'])  
}  
get CompanyCode(){  
  return this.stockpricesaveform.get('companyCode');  
}  
get Stockexchange(){  
  return this.stockpricesaveform.get('stockExchange');  
}  
get CurrentPrice(){  
  return this.stockpricesaveform.get('currentPrice');  
}  

get Date(){  
  return this.stockpricesaveform.get('date');  
}
get Time(){  
  return this.stockpricesaveform.get('time');  
} 
get Uploadfile(){  
  return this.stockpricesaveform.get('uploadfile');  
}  

 


saveStockpriceform(){  
  this.submitted=false;  
  this.stockpricesaveform.reset();  
}  

} 



