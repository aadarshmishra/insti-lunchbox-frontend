import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Institute } from 'src/app/interfaces/Institute';
import { Ngo } from 'src/app/interfaces/Ngo';
import { InstituteService } from 'src/app/services/institute.service';
import { NgoService } from 'src/app/services/ngo.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
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
    private ngoService: NgoService,
    private userAuthService : UserAuthService) { }

  ngOnInit(): void {
  }
  
  testemail: string = "";
  testpass: string = "";
  
  public validateInstitute(loginForm: NgForm): void {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setEmail(response.user.email);
        this.userAuthService.setRole(response.user.role);
        this.userAuthService.setToken(response.jwttoken);
        console.log(response);
        if (response.user.role === "admin") {
          console.log("admin logged in.");
          this.router.navigateByUrl('admin-dashboard');
        }
        if (response.user.role === "institute") {
          this.instiService.getInstituteByEmail(loginForm.value.email).subscribe(
            (response: Institute) => {
              if (response.status === 0) {
                alert("You're not authorized by Admin yet.")
                this.userAuthService.clear();
              }
              else if (response.status === 2) {
                alert("You're registration has been denied. Kindly contact admin.")
                this.userAuthService.clear();
              }
              else if (response.status === 1) {
                this.router.navigateByUrl('insti-dashboard');
                console.log("institute logged in");
              }
            },
            (error: HttpErrorResponse) => {
              console.log(error);
              alert(error.error.message);
            }
          );
        }
        else if (response.user.role === 'ngo') {
          this.ngoService.getNGOByEmail(loginForm.value.email).subscribe(
            (response: Ngo) => {
              if (response.status === 0) {
                alert("You're not authorized by Admin yet.")
                this.userAuthService.clear();
              }
              else if (response.status === 2) {
                alert("You're registration has been denied. Kindly contact admin.")
                this.userAuthService.clear();
              }
              else if (response.status === 1) {
                this.router.navigateByUrl('ngo-dashboard');
                console.log("ngo logged in");
              }
            },
            (error: HttpErrorResponse) => {
              alert(error.error.message);
            }
          );
        }
        loginForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert("Error Logging in. Please try again.");
        loginForm.reset();
      }
    );
  }
  
  public testForm(loginForm: NgForm) {
    this.testemail = loginForm.value.email;
    this.testpass = loginForm.value.password;
  }
}
