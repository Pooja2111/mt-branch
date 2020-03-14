import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from './sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
 
  private baseUrl = 'http://localhost:8081/sector/sector';  
  constructor(private http:HttpClient) { }
  getAllsector(): Observable<any> {  
    return this.http.get<Sector>(`${this.baseUrl}`+'/getAllsector');  
  }  
  
  saveSector(Sector: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveSector', Sector);  
  }  
  
  deleteSector(id:number):Observable<any>{
    return this.http.delete<Sector>(this.baseUrl+'/deleteSector/'+id);
    } 
  
    findOneInAll3(id: number): Observable<any> {  
    return this.http.get<Sector>(this.baseUrl+'/findOneInAll3/'+id);  
  }  
  
  updateSector(id: number): Observable<any> {  
    return this.http.put(this.baseUrl+'/updateSector/{id}',+id);  
  }  
}


