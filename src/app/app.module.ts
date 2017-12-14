import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StylistComponent } from './stylist/stylist.component';
import { ComplaintsComponent } from './complaints/complaints.component';

import {RouterModule , Routes} from '@angular/router';

const routes: Routes = [
  {
    path : '', component : HomeComponent
  },
  {
    path : 'stylist' , component : StylistComponent
  },
  {
    path : 'complaints' , component : ComplaintsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StylistComponent,
    ComplaintsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule { }
