import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StylistComponent } from './stylist/stylist.component';
import { ComplaintsComponent } from './complaints/complaints.component';

import {RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { StylistSetComponent } from './stylist-set/stylist-set.component';
import { SignupComponent } from './signup/signup.component';


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
  },
  {
    path : 'search_results' , component : SearchResultsComponent
  },
  {
    path : 'advance_search' , component : AdvanceSearchComponent
  },
  {
    path : 'stylist_set' , component : StylistSetComponent
  },
    {
      path : 'signup' , component : SignupComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StylistComponent,
    ComplaintsComponent,
    LoginComponent,
    SearchResultsComponent,
    AdvanceSearchComponent,
    StylistSetComponent,
    SignupComponent
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
