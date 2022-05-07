import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fooditem } from '../interfaces/fooditem';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  constructor(private http: HttpClient) { }
  
  private apiServerUrl = "http://localhost:8080";

  public addFoodItem(fooditem: Fooditem): Observable<Fooditem> {
    return this.http.post<Fooditem>(`${this.apiServerUrl}/api/fooditem`,fooditem);
  }
  
  public getAllFoodItem() : Observable<any> {
    return this.http.get(`${this.apiServerUrl}/api/fooditem/get`);
  }
}
