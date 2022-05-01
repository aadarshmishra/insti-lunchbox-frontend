import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institute } from '../interfaces/Institute';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private http : HttpClient) { } 
  
  private apiServerUrl = "http://localhost:8080";

  public addInstitute(institute: Institute): Observable<Institute> {
    return this.http.post<Institute>(`${this.apiServerUrl}/api/institute`,institute);
  }
  
  public getInstituteByEmail(email: string): Observable<Institute> {
    return this.http.get<Institute>(`${this.apiServerUrl}/api/institute/${email}`)
  }
}
