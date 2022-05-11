import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminNgoUsers } from 'src/app/interfaces/admin-ngo-users';
import { User } from 'src/app/interfaces/User';
import { AdminNgoUsersService } from 'src/app/services/admin-ngo-users.service';

@Component({
  selector: 'app-admin-ngo-users',
  templateUrl: './admin-ngo-users.component.html',
  styleUrls: ['./admin-ngo-users.component.scss']
})
export class AdminNgoUsersComponent implements OnInit {

  ngoUsers: AdminNgoUsers[] = [];
  editNgoUser: AdminNgoUsers = {} as AdminNgoUsers;
  removeNgoUser: AdminNgoUsers = {} as AdminNgoUsers;
  ngoUser: AdminNgoUsers = {} as AdminNgoUsers;
  user: User = {} as User;
  private cnfpassword : string = "";
  private password : string = "";



  constructor(private serviceNgoUsers : AdminNgoUsersService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() : void{
    this.serviceNgoUsers.fetchUsrs().subscribe(
      response => {
        console.log("ServiceNgoUsers");
        //console.log(response);
        this.ngoUsers = response;
      },
      (error : HttpErrorResponse) => {

        console.log(error.message);
      }
    );
  }

  onUpdateNgoUser(updateNgoUser: NgForm) {
    const val1 = updateNgoUser.value.password;
    const val2 = updateNgoUser.value.cnfpassword;

    if(val1 != val2) {
      alert("The password does not match!");
    }
    else{
      console.log(updateNgoUser);
      this.ngoUser.id = updateNgoUser.value.id;
      this.ngoUser.name = updateNgoUser.value.name;
      this.ngoUser.email = updateNgoUser.value.email;
      this.ngoUser.address = updateNgoUser.value.address;
      this.ngoUser.contact = updateNgoUser.value.contact;
      this.ngoUser.ngoId = updateNgoUser.value.ngoId;
      this.user.email = updateNgoUser.value.email;
      this.user.id = updateNgoUser.value.userId;
      this.user.password = updateNgoUser.value.password;
      this.user.role = "ngo";
      this.ngoUser.user = this.user;

      this.serviceNgoUsers.updateNgoUser(this.ngoUser).subscribe(
        response => {
          console.log(response);
          updateNgoUser.reset();
          this.reload();
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
          updateNgoUser.reset();
        }
      );
    }
  }

  onDeleteNgoUser(deleteNgoUser: NgForm) {
    console.log(deleteNgoUser);
    this.serviceNgoUsers.deleteNgoUser(deleteNgoUser.value.id).subscribe(
      response => {
        console.log(response);
        this.reload();
      },
      (error : HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  reload() {
    window.location.reload();
  }

  onAddNgoUser(addNgoUser: NgForm) {

    const val1 = addNgoUser.value.password;
    const val2 = addNgoUser.value.cnfpassword;

    if(val1 != val2) {
      alert("The password does not match!");
    }
    else {
      this.ngoUser.name = addNgoUser.value.name;
      this.ngoUser.contact = addNgoUser.value.contact;
      this.ngoUser.email = addNgoUser.value.email;
      this.ngoUser.address = addNgoUser.value.address;
      this.ngoUser.ngoId = addNgoUser.value.ngoId1;
      this.user.email = addNgoUser.value.email;
      this.user.password = addNgoUser.value.password;
      this.ngoUser.user = this.user;

      this.serviceNgoUsers.addNgoUser(this.ngoUser).subscribe(
        response => {
          console.log(response);
          addNgoUser.reset();
          window.location.reload();
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
          addNgoUser.reset();
        }
      );
    }
  }

  onClick(ngoUser: any) {
    this.editNgoUser = ngoUser;
    this.removeNgoUser = ngoUser;
  }

}
