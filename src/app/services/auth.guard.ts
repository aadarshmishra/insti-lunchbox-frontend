import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService,
    private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userAuthService.getToken()!==null && this.userAuthService.getToken()){
        const role = route.data["role"];

        if(role!==null && role.length>0){
          let match = false;
          for(let i=0; i<role.length; i++){
            if(this.userAuthService.getRole()===role[i]){
              match=true;
              break;
            }
          }
          // const match = this.doctorService.roleMatch(role);

          if(match) return true;
          else {
            this.router.navigate(['login']);
            return false;
          }
        }
      }

      this.router.navigate(['login']);
      return false;
  }
  
}
