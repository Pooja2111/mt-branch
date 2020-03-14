import { Component, OnInit,ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
   ChangeDetectorRef, } from '@angular/core';
   import { CompanydataService } from '../companydata.service';
  import { StockpriceService } from '../stockprice.service';
  import { Router } from '@angular/router';
  import { Companydata } from 'src/app/companydata';
  import { Observable } from 'rxjs/internal/Observable';
  import { Stockprice } from 'src/app/stockprice';
  import { SectorService } from '../sector.service';
  import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
  import { Sector } from 'src/app/sector';
  import { of } from 'rxjs';
  import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
  //import { HighchartsService } from './HighchartsService.service';
  import * as Highcharts from 'highcharts';
import { HighchartsService } from './highcharts-service.service';
  @Component({
   selector: 'app-comparecompany',
   templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css']
  })
  export class ComparecompanyComponent implements OnInit {
    myGroup: FormGroup;



    constructor(private hcs: HighchartsService, private formBuilder: FormBuilder, private router: Router, private companydataService: CompanydataService, private sectorService: SectorService, private stockpriceService: StockpriceService) { }
   
   
   
    companyList: Companydata[];
   
   
   
    companyListAll: Companydata[];
   
   
   
    sectorsList: Sector[];
   
   
   
    stockpriceList: Observable<Stockprice[]>;
   
   
   
    ngOnInit() {
   
   
   
     this.stockpriceService.getmultiplelinechart().subscribe(result => {
   
   
   
     var formatteddata = [];
   
   
   
     for (var key in result) {
   
   
   
      var singleObject = {
   
   
   
      name: '',
   
   
   
      data: []
   
   
   
      }
   
   
   
      singleObject.name = key.toUpperCase();
   
   
   
      for (var i = 0; i < result[key].length; i++) {
   
   
   
      singleObject.data.push(parseInt(result[key][i].currentPrice));
   
   
   
      }
   
   
   
      formatteddata.push(singleObject);
   
   
   
     }
   
   
   
     this.drawMultipleLineChart(formatteddata);
   
   
   
     });
   
   
   
     this.myGroup = this.formBuilder.group({
   
   
   
     "choose": new FormControl([Validators.required]),
   
   
   
     "sectorName": new FormControl([Validators.required]),
   
   
   
     "companyName": new FormControl([Validators.required]),
   
   
   
     "fromdate": new FormControl([Validators.required]),
   
   
   
     "todate": new FormControl([Validators.required])
   
   
   
     })
   
   
   
     this.companydataService.getAllCompanyData().subscribe(data => {
   
   
   
     this.companyList = data;
   
   
   
     this.companyListAll = data;
   
   
   
     this.companyList = this.companyList.filter(comp => comp.sector == 'NSE');
   
   
   
     })
   
   
   
     this.stockpriceService.getAllstockprice().subscribe(data => {
   
   
   
     this.stockpriceList = data;
   
   
   
     })
   
   
   
     this.sectorService.getAllsector().subscribe(data => {
   
   
   
     this.sectorsList = data;
   
   
   
     })
   
   
   
    }
   
   
   
    sectorChange() {
   
   
   
     alert(1234);
   
   
   
     var sectorValue = this.myGroup.controls['sectorname'].value;
   
   
   
     this.companyList = this.companyListAll.filter(comp => comp.sector == sectorValue);
   
   
   
    }
   
   
   
    drawMultipleLineChart(formatteddata) {
   
   
   
    Highcharts.chart('container', {
   
   
   
     title: {
   
   
   
      text: 'Company Growth by Sector, 2010-2019'
   
   
   
     },
   
   
   
     subtitle: {
   
   
   
      text: 'Source: thecompanyfoundation.com'
   
   
   
     },
   
   
   
     yAxis: {
   
   
   
      title: {
   
   
   
      text: 'Number of Companies'
   
   
   
      }
   
   
   
     },
   
   
   
     legend: {
   
   
   
      layout: 'vertical',
   
   
   
      align: 'right',
   
   
   
      verticalAlign: 'middle'
   
   
   
     },
   
   
   
     plotOptions: {
   
   
   
      series: {
   
   
   
      label: {
   
   
   
       connectorAllowed: false
   
   
   
      },
   
   
   
      pointStart: 2000
   
   
   
      }
   
   
   
     },
   
   
   
     series: formatteddata,
   
   
   
     responsive: {
   
   
   
      rules: [{
   
   
   
      condition: {
   
   
   
       maxWidth: 500
   
   
   
      },
   
   
   
      chartOptions: {
   
   
   
       legend: {
   
   
   
       layout: 'horizontal',
   
   
   
       align: 'center',
   
   
   
       verticalAlign: 'bottom'
   
   
   
       }
   
   
   
      }
   
   
   
      }]
   
   
   
     }
   
   
   
     });
   
   
   
    }
   
    
  }