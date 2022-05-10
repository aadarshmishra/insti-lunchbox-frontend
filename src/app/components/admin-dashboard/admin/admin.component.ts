import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminInstituteUsersService } from 'src/app/services/admin-institute-users.service';
import { AdminNgoUsersService } from 'src/app/services/admin-ngo-users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  instiSize: number = 0;
  ngoSize: number = 0;

  constructor(private seriveInstiUser : AdminInstituteUsersService, private serviceNgoUser : AdminNgoUsersService) { }

  ngOnInit(): void {
    this.fetchInstiUsers();
    this.fetchNgoUsers();
  }

  fetchInstiUsers() {
    this.seriveInstiUser.fetchUsrs().subscribe(
      response => {
        this.instiSize = response.length;
      },
    (error : HttpErrorResponse) => {
        console.log(error.message);
    }
    );
  }

  fetchNgoUsers() {
    this.serviceNgoUser.fetchUsrs().subscribe(
      response => {
        this.ngoSize = response.length;
      },
      (error : HttpErrorResponse) => {
        console.log(error.message);
       }
    );
  }
}
