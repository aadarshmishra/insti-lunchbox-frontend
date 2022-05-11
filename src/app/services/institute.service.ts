import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institute } from '../interfaces/Institute';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private http : HttpClient) { } 
  
  private apiServerUrl = "http://localhost:9090";
  private requestHeaders = new HttpHeaders(
    {
      "No-Auth":"True"
    }
  )

  public addInstitute(institute: Institute): Observable<Institute> {
    return this.http.post<Institute>(`${this.apiServerUrl}/api/institute/add`,institute, {headers:this.requestHeaders});
  }
  
  public getInstituteByEmail(email: string) {
    return this.http.get<Institute>(`${this.apiServerUrl}/api/institute/${email}`)
  }
}
