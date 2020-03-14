import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipos } from './ipos';

@Injectable({
  providedIn: 'root'
})
export class IposService {
 
  private baseUrl = 'http://localhost:8081/ipos/ipos/';  

  constructor(private http:HttpClient) { }
  getAllipos(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllipos');  
  }  
  
  saveIpos(ipos: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveIpos', ipos);  
  }  
  
  deleteipos(id:number):Observable<object>{
    return this.http.delete<Ipos>(this.baseUrl+'deleteipos/'+id);
    }
  
  
    findOneInAll2(id: number): Observable<any> {  
    return this.http.get<Ipos>(this.baseUrl+'findOneInAll2/'+id);  
  }  
  
  updateIpos(id: number, value: any): Observable<any> {  
    return this.http.post<Ipos>(this.baseUrl+'updateIpos/'+id, value);  
  }  
}
