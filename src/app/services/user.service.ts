import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiServerUrl = "http://localhost:8080";
  private requestHeaders = new HttpHeaders(
    {
      "No-Auth":"True"
    }
  )
  
  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/api/user/${email}`)
  }
  
  public login(user: any) {
    return this.http.post<any>(`${this.apiServerUrl}/authenticate`,user,{headers:this.requestHeaders});
  }
}
