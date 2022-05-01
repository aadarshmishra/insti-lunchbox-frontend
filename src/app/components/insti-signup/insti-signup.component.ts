import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Institute } from 'src/app/interfaces/Institute';
import { User } from 'src/app/interfaces/User';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-insti-signup',
  templateUrl: './insti-signup.component.html',
  styleUrls: ['./insti-signup.component.scss']
})
export class InstiSignupComponent implements OnInit {

  constructor(private instituteService: InstituteService) { }

  ngOnInit(): void {
  }
  
  insti: Institute = {} as Institute;
  user: User = {} as User;
  
  public onAddInstitute(addForm: NgForm): void {
    this.insti.name = addForm.value.name;
    this.insti.address = addForm.value.address;
    this.insti.contact = addForm.value.contact;
    this.insti.email = addForm.value.email;
    this.user.email = addForm.value.email;
    this.user.password = addForm.value.password;
    this.insti.user = this.user;
    this.instituteService.addInstitute(this.insti).subscribe(
      (response: Institute) => {
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
