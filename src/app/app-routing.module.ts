import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstiSignupComponent } from './components/insti-signup/insti-signup.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'insti-signup', component:InstiSignupComponent },
  { path:'**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
