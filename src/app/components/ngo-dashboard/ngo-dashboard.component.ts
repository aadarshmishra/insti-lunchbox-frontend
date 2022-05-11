import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fooditem } from 'src/app/interfaces/Fooditem';
import { Lunchbox } from 'src/app/interfaces/Lunchbox';
import { FooditemService } from 'src/app/services/fooditem.service';
import { InstituteService } from 'src/app/services/institute.service';
import { LunchboxService } from 'src/app/services/lunchbox.service';
import { NgoService } from 'src/app/services/ngo.service';

@Component({
  selector: 'app-ngo-dashboard',
  templateUrl: './ngo-dashboard.component.html',
  styleUrls: ['./ngo-dashboard.component.scss']
})
export class NgoDashboardComponent implements OnInit {

  constructor(private fooditemService: FooditemService,
    private instituteService: InstituteService,
    private lunchboxService: LunchboxService,
    private ngoService: NgoService,
    private router: Router) { }

  fooditem: Fooditem = {} as Fooditem;
  lunchbox: Lunchbox = {} as Lunchbox;

  fooditems = [this.fooditem];
  ngonames = [];

  ngOnInit(): void {
    this.getAllFooditem();
  }

  public getAllFooditem() {
    this.fooditemService.getAllFoodItem().subscribe({
      next: (response: any) => {
        console.log(response);
        this.fooditems = response;
        this.fooditemService.getNGONames().subscribe({
          next: (response: any) => {
            this.ngonames = response;
            for (let i = 0; i < this.fooditems.length; i++) {
              this.fooditems[i].ngoname = this.ngonames[i];
            }
            console.log(this.ngonames);
          },
          error: (error: HttpErrorResponse) => {
            alert(error.error.message);
          }
        });
      },
      error: (error: HttpErrorResponse) => { }
    });
  }
  
  public confirmPickup(fooditem : Fooditem){
    fooditem.ngoemail = "eh@gmail.com";
    fooditem.status = 1;
    this.fooditemService.updateFooditem(fooditem).subscribe({
      next:(response: Fooditem) =>{
        console.log(response);
      },
      error:(error: HttpErrorResponse) => {}
    });
  }

}
