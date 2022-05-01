import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ngo } from 'src/app/interfaces/Ngo';
import { User } from 'src/app/interfaces/User';
import { NgoService } from 'src/app/services/ngo.service';

@Component({
  selector: 'app-ngo-signup',
  templateUrl: './ngo-signup.component.html',
  styleUrls: ['./ngo-signup.component.scss']
})
export class NgoSignupComponent implements OnInit {

  constructor(private ngoService : NgoService) { }

  ngOnInit(): void {
  }

  ng: Ngo = {} as Ngo;
  user: User = {} as User;
  public onAddNGO(addForm: NgForm): void {
    this.ng.name = addForm.value.name;
    this.ng.address = addForm.value.address;
    this.ng.ngoId = addForm.value.ngoId;
    this.ng.contact = addForm.value.contact;
    this.ng.email = addForm.value.email;
    this.user.email = addForm.value.email;
    this.user.password = addForm.value.password;
    this.ng.user = this.user;
    this.ngoService.addNGO(this.ng).subscribe(
      (response: Ngo) => {
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
        addForm.reset();
      }
    );
  }
}
