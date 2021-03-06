import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fooditem } from '../interfaces/Fooditem';
import { Lunchbox } from '../interfaces/Lunchbox';

@Injectable({
  providedIn: 'root'
})
export class LunchboxService {

  constructor(private http: HttpClient) { }
  
  private apiServerUrl = "http://localhost:9090";

  public addLunchbox(lunchbox: Lunchbox): Observable<Lunchbox> {
    return this.http.post<Lunchbox>(`${this.apiServerUrl}/api/lunchbox`,lunchbox);
  }
  
  // public getAllLunchbox(): Observable<[Fooditem]> {
    
  // }
}
