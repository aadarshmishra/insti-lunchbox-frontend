import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router,private userAuthService: UserAuthService) { }

  ngOnInit(): void {
  }

  goToRequests = () => {
    this.router.navigateByUrl('admin-pending-requests/admin-pending-requests.component.html');
  }


  openNav() {
    document.getElementById("page")!.style.width = "230px";
    document.getElementById("sidebar")!.style.width = "230px";
    document.getElementById("mySidebar")!.style.width = "120px";
  }
  closeNav() {
    document.getElementById("page")!.style.width = "0";
    document.getElementById("sidebar")!.style.width = "0";
    document.getElementById("mySidebar")!.style.width= "0";
  }
  
  public logout() {
    this.userAuthService.clear();
    this.router.navigateByUrl("login");
  }
}
