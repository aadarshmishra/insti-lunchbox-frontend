import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fooditem } from 'src/app/interfaces/fooditem';
import { Lunchbox } from 'src/app/interfaces/lunchbox';
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
  ngoPicked: Ngo = {} as Ngo;
  
  fooditems = [this.fooditem];
  
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
        for (var res of response) {
          
        }
        this.ngoService.getNGOByEmail(response).subscribe({
          next: (response: Ngo) => {
            this.ngoPicked = response;
            console.log(this.ngoPicked);
          },
          error: (error: HttpErrorResponse) => {
            console.log(error.error.message);
          }
        })
        this.fooditems = response;
      },
      error: (error: HttpErrorResponse) => { }
    });
  }
}
