import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Institute } from 'src/app/interfaces/Institute';
import { Ngo } from 'src/app/interfaces/Ngo';
import { User } from 'src/app/interfaces/User';
import { InstituteService } from 'src/app/services/institute.service';
import { NgoService } from 'src/app/services/ngo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    private instiService: InstituteService,
    private ngoService: NgoService) { }

  ngOnInit(): void {
  }

  public validateInstitute(loginForm: NgForm): void {
    this.userService.getUserByEmail(loginForm.value.email).subscribe(
      (response: User) => {
        if (loginForm.value.password === response.password) {
          if (response.role === "institute") {
            this.instiService.getInstituteByEmail(loginForm.value.email).subscribe(
              (response:Institute) => {
                if (response.status === 0) {
                  alert("You're not authorized by Admin yet.")
                }
                else if (response.status === 2) {
                  alert("You're registration has been denied. Kindly contact admin.")
                }
                else if (response.status === 1) {
                  // this.router.navigateByUrl('insti_dashboard');
                  console.log("logged in");
                }
              },
              (error: HttpErrorResponse) => {
                alert(error.error.message);
              }
            );
          }
          else if (response.role === 'ngo') {
            this.ngoService.getNGOByEmail(loginForm.value.email).subscribe(
              (response: Ngo) => {
                if (response.status === 0) {
                  alert("You're not authorized by Admin yet.")
                }
                else if (response.status === 2) {
                  alert("You're registration has been denied. Kindly contact admin.")
                }
                else if (response.status === 1) {
                  // this.router.navigateByUrl('insti_dashboard');
                  console.log("logged in");
                }
              },
              (error: HttpErrorResponse) => {
                alert(error.error.message);
              }
            );
          }
        }
        else {
          alert("Wrong Password.")
        }
        loginForm.reset();
      },
      (error: HttpErrorResponse) => {
        loginForm.reset;
        alert(error.error.message);
      }
    );
  }
}
