import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLunchboxComponent } from './components/add-lunchbox/add-lunchbox.component';
import { HomeComponent } from './components/home/home.component';
import { InstiDashboardComponent } from './components/insti-dashboard/insti-dashboard.component';
import { InstiSignupComponent } from './components/insti-signup/insti-signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgoDashboardComponent } from './components/ngo-dashboard/ngo-dashboard.component';
import { NgoSignupComponent } from './components/ngo-signup/ngo-signup.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'insti-signup', component:InstiSignupComponent },
  { path:'ngo-signup', component:NgoSignupComponent},
  { path:'login', component:LoginComponent },
  { path:'insti-dashboard', component:InstiDashboardComponent, canActivate:[AuthGuard], data: {role:['institute']} },
  { path:'add-lunchbox', component:AddLunchboxComponent, canActivate:[AuthGuard], data: {role:['institute']}},
  { path:'ngo-dashboard', component:NgoDashboardComponent, canActivate:[AuthGuard], data: {role:['ngo']} },
  { path:'**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
