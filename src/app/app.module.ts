import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { TECHNICALComponent } from './technical/technical.component';
import { NONTECHNICALComponent } from './non-technical/non-technical.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCenterComponent } from './event-center/event-center.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HOMEComponent,
    TECHNICALComponent,
    NONTECHNICALComponent,
    EventListComponent,
    EventDetailComponent,
    EventCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
