import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companydata } from './companydata';

@Injectable({
  providedIn: 'root'
})
export class CompanydataService {
  
  private baseUrl = 'http://localhost:8081/companydata/companydata/';  
  getManagecompanies:any;
  

  constructor(private http:HttpClient) { }

  getAllCompanyData(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllCompanyData');  
  }  
  
  savecompanydata(companydata: object): Observable<object> {  
    return this.http.post<Companydata>(`${this.baseUrl}`+'savecompanydata', companydata);  
  }  
  
  deleteCompanydata(companyName:String):Observable<object>{
    return this.http.delete<Companydata>(this.baseUrl+'deleteCompanydata/'+companyName);
    }
  
  
    findOneInAll1(companyName: String): Observable<any> {  
    return this.http.get(this.baseUrl+'findOneInAll1/'+companyName);  
  }  
  
  updateCompanyData(companyName: String, value: any): Observable<any> {  
    return this.http.post<Companydata>(this.baseUrl+'updateCompanyData/'+companyName, value);  
  }  
    
}