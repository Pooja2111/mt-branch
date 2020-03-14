import { Component, OnInit } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Observable } from 'rxjs';
import { Stockprice } from '../stockprice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {

  constructor(private stockpriceservice: StockpriceService,private router: Router) { }
  stockpricelist: Observable<Stockprice[]>;

  ngOnInit() {
    this.stockpriceservice.getAllstockprice().subscribe(data => {
      this.stockpricelist = data;
     })
  }
  deleteStockprice(stockprice:Stockprice)
  {
     this.stockpriceservice.deleteStockprice(stockprice.stockExchange).subscribe(data=>{
     this.stockpriceservice.getAllstockprice().subscribe(data=>{this.stockpricelist=data;});
    });
    }
    updateStockprice(stockprice : Stockprice ) {
      window.localStorage.removeItem("edit-stockExchange");
      window.localStorage.setItem("edit-stockExchange", stockprice.stockExchange.toString());
      this.router.navigate(['stockprice']);
      }
  }
       
  


