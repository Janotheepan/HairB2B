import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

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
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';

import {UserService} from './services/user.service';
import { FilterredStylistSetComponent } from './filterred-stylist-set/filterred-stylist-set.component';
import { SkillResultComponent } from './skill-result/skill-result.component';
import { AsResultComponent } from './as-result/as-result.component';
import { PriceResultComponent } from './price-result/price-result.component';
import { PriceResultEveComponent } from './price-result-eve/price-result-eve.component';
import { LocationResultComponent } from './location-result/location-result.component';
import { JobroleResultComponent } from './jobrole-result/jobrole-result.component';
import { BookingComponent } from './booking/booking.component';

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
  },
  {
    path : 'filterred_stylist_set' , component : FilterredStylistSetComponent
  },
  {
    path : 'skill_result' , component : SkillResultComponent
  },
  {
    path : 'as_result' , component : AsResultComponent
  },
  {
    path : 'price_result' , component : PriceResultComponent
  },
  {
    path : 'price_result_eve' , component : PriceResultEveComponent
  },
  {
    path : 'location_result' , component : LocationResultComponent
  },
  {
    path : 'jobrole_result' , component : JobroleResultComponent
  },
  {
    path : 'booking' , component : BookingComponent
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
    SignupComponent,
    FilterredStylistSetComponent,
    SkillResultComponent,
    AsResultComponent,
    PriceResultComponent,
    PriceResultEveComponent,
    LocationResultComponent,
    JobroleResultComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})


export class AppModule { }
