import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Names} from '../stylist-set/stylist-set.component';
import {Observable} from 'rxjs/Observable';
import {Stylists} from '../stylist/stylist.component';
import {Charges} from '../stylist-set/stylist-set.component';
import {Prices} from '../stylist/stylist.component';
import {Skills} from '../stylist-set/stylist-set.component';
import {Dates } from '../stylist/stylist.component';
import { Locations } from '../stylist-set/stylist-set.component';
import { Jobroles } from '../stylist-set/stylist-set.component';
import { Busy } from '../stylist/stylist.component';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
    console.log('user service runs...');
  }


  getNames(): Observable<Names[]> {
    return this.http.get<Names[]>('http://localhost/demo/public/trn_stylists');
  }

  getStylist(): Observable<Stylists[]> {
    return this.http.get<Stylists[]>('http://localhost/demo/public/trn_stylists');
  }

  getCharge(): Observable<Charges[]> {
    return this.http.get<Charges[]>('http://localhost/demo/public/trn_charges');
  }

  getPrice(): Observable<Prices[]> {
    return this.http.get<Prices[]>('http://localhost/demo/public/trn_charges');
  }

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>('http://localhost/demo/public/trn_stylist_skills');
  }

  getDates(): Observable<Dates[]> {
    return this.http.get<Dates[]>('http://localhost/demo/public/trn_busy_dates');
  }

  getLocation(): Observable<Locations[]> {
    return this.http.get<Locations[]>('http://localhost/demo/public/trn_prefferred_location');
  }

  getJobrole(): Observable<Jobroles[]> {
    return this.http.get<Jobroles[]>('http://localhost/demo/public/trn_job_role');
  }
  getBusy(): Observable<Busy[]> {
    return this.http.get<Busy[]>('http://localhost/demo/public/trn_busy_dates');
  }
}
