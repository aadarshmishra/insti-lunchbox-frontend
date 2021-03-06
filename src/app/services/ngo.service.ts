import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Ngo} from '../interfaces/Ngo'

@Injectable({
  providedIn: 'root'
})
export class NgoService {

  constructor(private http : HttpClient) { }
  private requestHeaders = new HttpHeaders(
    {
      "No-Auth":"True"
    }
  )
  
  private apiServerUrl = "http://localhost:9090";
  
  public addNGO(ngo: Ngo): Observable<Ngo> {
    return this.http.post<Ngo>(`${this.apiServerUrl}/api/ngo/add`,ngo, {headers:this.requestHeaders});
  }
  
  public getNGOByEmail(email: string): Observable<Ngo> {
    return this.http.get<Ngo>(`${this.apiServerUrl}/api/ngo/${email}`)
  }
}
