import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fooditem } from 'src/app/interfaces/Fooditem';
import { Lunchbox } from 'src/app/interfaces/Lunchbox';
import { Ngo } from 'src/app/interfaces/Ngo';
import { FooditemService } from 'src/app/services/fooditem.service';
import { InstituteService } from 'src/app/services/institute.service';
import { LunchboxService } from 'src/app/services/lunchbox.service';
import { NgoService } from 'src/app/services/ngo.service';

@Component({
  selector: 'app-insti-dashboard',
  templateUrl: './insti-dashboard.component.html',
  styleUrls: ['./insti-dashboard.component.scss']
})
export class InstiDashboardComponent implements OnInit {

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

  public goToAddL() {
    this.router.navigateByUrl("add-lunchbox");
  }

  public getAllFooditem() {
    this.fooditemService.getAllFoodItem().subscribe({
      next: (response: any) => {
        console.log(response);
        this.fooditems = response;
        this.fooditemService.getNGONames().subscribe({
          next: (response: any) => {
            this.ngonames = response;
            for (let i = 0 ; i < this.fooditems.length ; i++) {
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
}
