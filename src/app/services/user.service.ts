import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Names} from '../stylist-set/stylist-set.component';
import {Names1} from '../home/home.component';
import {Observable} from 'rxjs/Observable';
import {Stylists} from '../stylist/stylist.component';

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
}
