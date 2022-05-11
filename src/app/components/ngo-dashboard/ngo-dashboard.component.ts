import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fooditem } from 'src/app/interfaces/Fooditem';
import { Lunchbox } from 'src/app/interfaces/Lunchbox';
import { FooditemService } from 'src/app/services/fooditem.service';
import { InstituteService } from 'src/app/services/institute.service';
import { LunchboxService } from 'src/app/services/lunchbox.service';
import { NgoService } from 'src/app/services/ngo.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

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
    private router: Router,
    private userAuthService: UserAuthService) { }

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
              if (this.fooditems[i].status === 0) this.fooditems[i].confirm = false;
              else { this.fooditems[i].confirm = true; }
            }
            console.log(this.ngonames);
            console.log(this.fooditems);
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
    fooditem.ngoemail = this.userAuthService.getEmail();
    fooditem.status = 1;
    this.fooditemService.updateFooditem(fooditem).subscribe({
      next:(response: Fooditem) =>{
        console.log(response);
        window.location.reload();
      },
      error:(error: HttpErrorResponse) => {}
    });
  }
  
  public logout() {
    this.userAuthService.clear();
    this.router.navigateByUrl("login");
  }

}
