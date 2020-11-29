import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TECHNICALComponent } from './technical/technical.component';
import { NONTECHNICALComponent } from './non-technical/non-technical.component';
import { HOMEComponent } from './home/home.component';
import { EventCenterComponent } from './event-center/event-center.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'admin', component:AdminComponent},
  {path:'home', component:HOMEComponent},
  {path:'event-center', component:EventCenterComponent},
  {path:'technical', component:TECHNICALComponent},
  {path:'non-technical', component:NONTECHNICALComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
export const routingComponents = [ AdminComponent, HOMEComponent, TECHNICALComponent, NONTECHNICALComponent ]
