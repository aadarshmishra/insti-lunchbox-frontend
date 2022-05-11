import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  
  public getEmail() : any {
    return localStorage.getItem("email");
  }
  
  public setEmail(email : string){
    return localStorage.setItem("email",email);
  }
  
  public getToken() : any {
    return localStorage.getItem("token");
  }
  
  public setToken(token : string){
    return localStorage.setItem("token",token);
  }
  
  public getRole() : any {
    return localStorage.getItem("role");
  }
  
  public setRole(role : string){
    return localStorage.setItem("role",role);
  }
  
  public clear() {
    localStorage.clear();
  }
  
}
