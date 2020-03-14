import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockexchange } from './stockexchange';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {
  private baseUrl = 'http://localhost:8081/stockexchange/stockexchange/';  

  constructor(private http:HttpClient) { }
  getAllstockexchange(): Observable<any> {  
    return this.http.get<Stockexchange>(`${this.baseUrl}`+'getAllstockexchange');  
  }  
  
  savestockexchange(stockexchange: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'savestockexchange', stockexchange);  
  }  
  
  deletestockexchange(id: number): Observable<any> {  
    return this.http.delete<Stockexchange>(`${this.baseUrl}deletestockexchange/${id}` );  
  }  
  
  findOneInAll4(id: number): Observable<any> {  
    return this.http.get<Stockexchange>(this.baseUrl+'findOneInAll4/'+id);  
  }  
  
  updatestockexchange(id: number, value: any): Observable<any> {  
    return this.http.post<Stockexchange>(this.baseUrl+'updatestockexchange/'+id, value);  
  }  
    

}
