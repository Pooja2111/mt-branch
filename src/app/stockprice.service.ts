import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockprice } from './stockprice';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  private baseUrl = 'http://localhost:8081/stockprice/stockprice/'; 

  constructor(private http:HttpClient) { }
  getAllstockprice(): Observable<any> {  
    return this.http.get<Stockprice>(`${this.baseUrl}`+'getAllstockprice');  
  }  
  
  savestockprice(stockprice: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'savestockprice', stockprice);  
  }  
  
  deleteStockprice(stockExchange:String):Observable<object>{
    return this.http.delete<Stockprice>(this.baseUrl+'deleteStockprice/'+stockExchange);
    } 
  
    findOneInAll5(companyCode: String): Observable<any> {  
    return this.http.get<Stockprice>(this.baseUrl+'findOneInAll5/'+companyCode);  
  }  
  
  updateStockprice(stockExchange: String, value: any): Observable<any> {  
    return this.http.post<Stockprice>(this.baseUrl+'updateStockprice/'+stockExchange, value);  
  }  
  getmultiplelinechart(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+'/multiplelinechart');
  
    }
  
    uploadFile(file: File, companyCode: String): Observable<any> {
  
  
    let url = this.baseUrl + "uploadfile/" + companyCode;
  
    const formdata: FormData = new FormData();
  
    formdata.append('file', file);
  
    return this.http.post(url, formdata);
  
  
    }
  
}


