import { Component, OnInit } from '@angular/core';
import { IposService } from '../ipos.service';
import { Ipos } from '../ipos';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

  constructor(private iposservice:IposService,private router:Router) { }
  ipos : Ipos=new Ipos();  
  submitted = false;  

  ngOnInit() {
    var sid = window.localStorage.getItem("edit-id")
    if (sid != null && sid != "") {
     this.iposservice.findOneInAll2(parseInt(sid))
      .subscribe(data => {
       this.ipos = data; this.ipossaveform.setValue(this.ipos)
      });
    }
    this.submitted = false;
   }
  ipossaveform=new FormGroup({  
    id:new FormControl('' , [Validators.required ] ),  
    companyName:new FormControl('',[Validators.required,Validators.minLength(5)]),  
    stockExchange:new FormControl('',[Validators.required]),
    pricePerShare:new FormControl('' , [Validators.required ]),
    totalNoOfShares:new FormControl('',[Validators.required]),
    remarks:new FormControl('',[Validators.required,,Validators.minLength(5)]),
    opendatetime:new FormControl()
   
    }); 
    saveIpos(saveIpos){  
      this.ipos=new Ipos();  
      this.ipos.id=this.Id.value;  
      this.ipos.companyName=this.CompanyName.value;  
      this.ipos.stockExchange=this.StockExchange.value;  
      this.ipos.pricePerShare=this.PricePerShare.value;  
      this.ipos.totalNoOfShares=this.TotalNoOfShares.value;
      this.ipos.remarks=this.Remarks.value;
     this.ipos.opendatetime=this.OpenDateTime.value;
       this.submitted=true;
      this.save();  
    } 
     save() {  
      this.iposservice.saveIpos(this.ipos)  
        .subscribe(data => console.log(data), error => console.log(error));  
      this.ipos = new Ipos(); 
      window.localStorage.removeItem("edit-id");
      this.router.navigate(['ipolist'])   
    }  
    get Id(){  
      return this.ipossaveform.get('id');  
    }  
    get CompanyName(){  
      return this.ipossaveform.get('companyName');  
    }  
    get StockExchange(){  
      return this.ipossaveform.get('stockExchange');  
    }  
    
    get PricePerShare(){  
      return this.ipossaveform.get('pricePerShare');  
    }  
    get TotalNoOfShares(){  
      return this.ipossaveform.get('totalNoOfShares');  
    }  
    get Remarks(){  
      return this.ipossaveform.get('remarks');  
    } 
    get OpenDateTime(){  
      return this.ipossaveform.get('opendatetime');  
    }  
    
    saveIposform(){  
      this.submitted=false;  
      this.ipossaveform.reset();  
    }  
  
  }
    
  





