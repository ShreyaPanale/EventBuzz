import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TECHNICALComponent } from './technical/technical.component';
import { NONTECHNICALComponent } from './non-technical/non-technical.component';
import { HOMEComponent } from './home/home.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'home', component:HOMEComponent},
  {path:'technical', component:TECHNICALComponent},
  {path:'non-technical', component:NONTECHNICALComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AdminComponent, HOMEComponent, TECHNICALComponent, NONTECHNICALComponent ]
