import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLunchboxComponent } from './components/add-lunchbox/add-lunchbox.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './components/admin-dashboard/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { InstiDashboardComponent } from './components/insti-dashboard/insti-dashboard.component';
import { InstiSignupComponent } from './components/insti-signup/insti-signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgoSignupComponent } from './components/ngo-signup/ngo-signup.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'insti-signup', component:InstiSignupComponent },
  { path:'ngo-signup', component:NgoSignupComponent},
  { path:'login', component:LoginComponent },
  { path:'insti-dashboard', component:InstiDashboardComponent },
  { path:'add-lunchbox', component:AddLunchboxComponent },
  { path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'admin', component: AdminComponent},
  { path:'**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
