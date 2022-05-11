import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Fooditem } from 'src/app/interfaces/Fooditem';
import { Institute } from 'src/app/interfaces/Institute';
import { Lunchbox } from 'src/app/interfaces/Lunchbox';
import { FooditemService } from 'src/app/services/fooditem.service';
import { InstituteService } from 'src/app/services/institute.service';
import { LunchboxService } from 'src/app/services/lunchbox.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-lunchbox',
  templateUrl: './add-lunchbox.component.html',
  styleUrls: ['./add-lunchbox.component.scss']
})
export class AddLunchboxComponent implements OnInit {

  constructor(private fooditemService: FooditemService,
    private instituteService: InstituteService,
    private lunchboxService: LunchboxService,
    private router: Router,
    private userAuthService : UserAuthService) { }

  fooditem: Fooditem = {} as Fooditem;
  lunchbox: Lunchbox = {} as Lunchbox;
  
  ngOnInit(): void {
  }

  public goToDashboard() {
    this.router.navigateByUrl('insti-dashboard');
  }
  
  public addFooditem(addFooditemForm: NgForm) {
    this.fooditem.fname = addFooditemForm.value.fname;
    this.fooditem.fqty = addFooditemForm.value.fqty;
    this.fooditem.fremark = addFooditemForm.value.fremark;
    
    this.instituteService.getInstituteByEmail(this.userAuthService.getEmail()).subscribe({
      next: (response: Institute) => {
        console.log(response);
        this.lunchbox.institute = response;
        this.fooditem.lunchbox = this.lunchbox;
        this.lunchbox.institute = response;
        console.log(this.fooditem);
        this.fooditemService.addFoodItem(this.fooditem).subscribe(
          (response: Fooditem) => {
            console.log(response);
            addFooditemForm.reset();
          },
          (error: HttpErrorResponse) => {
            alert(error.error.message);
          }
        );
      },
      error: (error: HttpErrorResponse) => {
      }
    })
  }
}
