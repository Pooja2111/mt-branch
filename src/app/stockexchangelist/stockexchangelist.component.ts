import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Observable } from 'rxjs';
import { Stockexchange } from '../stockexchange';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockexchangelist',
  templateUrl: './stockexchangelist.component.html',
  styleUrls: ['./stockexchangelist.component.css']
})
export class StockexchangelistComponent implements OnInit {
  

  constructor(private stockexchangeservice: StockexchangeService,private router:Router) { }
  stockexchangelist: Observable<Stockexchange[]>;
  ngOnInit() {
    this.stockexchangeservice.getAllstockexchange().subscribe(data => {
      this.stockexchangelist = data;
     })
  }
  deletestockexchange(stockexchange:Stockexchange)
  {
     this.stockexchangeservice.deletestockexchange(stockexchange.id).subscribe(data=>{
     this.stockexchangeservice.getAllstockexchange().subscribe(data=>{this.stockexchangelist=data;});
    });
    }
    updatestockexchange(stockexchange : Stockexchange ) {
      window.localStorage.removeItem("edit-id");
      window.localStorage.setItem("edit-id", stockexchange.id.toString());
      this.router.navigate(['stockexchange']);
      }
  }


