import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  sendMode(mode: number,id: number ,status: number, ngoId : string){
    if (typeof ngoId !== 'undefined')
      return this.http.put(`http://localhost:8080/api/ngo/updateStatus/${id}/${mode}`, status);
    else
      return this.http.put(`http://localhost:8080/api/institute/updateStatus/${id}/${mode}`, status);
  }
}
