import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StylistComponent } from './stylist/stylist.component';
import { ComplaintsComponent } from './complaints/complaints.component';

import {RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '', component : HomeComponent
  },
  {
    path : 'stylist' , component : StylistComponent
  },
  {
    path : 'complaints' , component : ComplaintsComponent
  },
  {
    path : 'login' , component : LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StylistComponent,
    ComplaintsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule { }
