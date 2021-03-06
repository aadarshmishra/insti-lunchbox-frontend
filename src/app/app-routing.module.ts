import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLunchboxComponent } from './components/add-lunchbox/add-lunchbox.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminInstituteUsersComponent } from './components/admin-dashboard/admin-institute-users/admin-institute-users.component';
import { AdminNgoUsersComponent } from './components/admin-dashboard/admin-ngo-users/admin-ngo-users.component';
import { AdminPendingRequestsComponent } from './components/admin-dashboard/admin-pending-requests/admin-pending-requests.component';
import { AdminComponent } from './components/admin-dashboard/admin/admin.component';
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
  { path:'admin-dashboard', component:AdminDashboardComponent, canActivate: [AuthGuard], data: {role:['admin']},
  children:[
      {path:'admin', component: AdminComponent},
      {path:'admin-institute-users', component: AdminInstituteUsersComponent},
      {path:'admin-ngo-users', component: AdminNgoUsersComponent},
      {path:'admin-pending-requests', component: AdminPendingRequestsComponent}
    ]
  },
  { path:'**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
