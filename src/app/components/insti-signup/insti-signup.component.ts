import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Institute } from 'src/app/interfaces/Institute';

@Component({
  selector: 'app-insti-signup',
  templateUrl: './insti-signup.component.html',
  styleUrls: ['./insti-signup.component.scss']
})
export class InstiSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onAddInstitute(addForm: NgForm): void {
    this.instituteService.addInstitute(addForm.value).subscribe(
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
