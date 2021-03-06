import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminInstituteUsers } from 'src/app/interfaces/admin-institute-users';
import { AdminNgoUsers } from 'src/app/interfaces/admin-ngo-users';
import { AdminInstituteUsersService } from 'src/app/services/admin-institute-users.service';
import { AdminNgoUsersService } from 'src/app/services/admin-ngo-users.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-pending-requests',
  templateUrl: './admin-pending-requests.component.html',
  styleUrls: ['./admin-pending-requests.component.scss']
})
export class AdminPendingRequestsComponent implements OnInit {

  users : any[] = [];
  instiUser : AdminInstituteUsers[] = [];
  ngoUser : AdminNgoUsers[] = [];
  constructor(private serviceAdmin : AdminService, private serviceNgoUser : AdminNgoUsersService,
              private serviceInstiUser : AdminInstituteUsersService) {}

  ngOnInit(): void {
    this.fetchNgoUsers();
    this.fetchInstiUsers();
  }

  fetchInstiUsers() : void{
    this.serviceInstiUser.fetchUsersByStatus().subscribe(
      response => {
        console.log("serviceInstiUser");
        console.log(response);
        this.instiUser = response;
        for (let i = 0; i < this.instiUser.length; i++) {
          this.users.push(this.instiUser[i]);
        }
      }
    );
  }

  fetchNgoUsers() : void{
    this.serviceNgoUser.fetchUsersByStatus().subscribe(
      (response) => {
        console.log("serviceNgoUser");
        console.log(response);
        this.ngoUser = response;
        for (let i = 0; i < this.ngoUser.length; i++) {
          this.users.push(this.ngoUser[i]);
        }
      }
    );
  }



  onClick(mode:number, id : number, ngoId : string) {
    this.serviceAdmin.sendMode(mode,id,0, ngoId).subscribe(
      response => {
        if(response == 1){
          alert("Approved!");
        }

        if(response == 0){
          alert("Rejected!");
        }
        window.location.reload();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }

}
