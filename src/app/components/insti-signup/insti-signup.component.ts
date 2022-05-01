import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Institute } from 'src/app/interfaces/Institute';
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
