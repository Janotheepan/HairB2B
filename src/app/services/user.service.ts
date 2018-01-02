import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Names} from '../stylist-set/stylist-set.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
    console.log('user service runs...');
  }


  getNames(): Observable<Names[]> {
    return this.http.get<Names[]>('http://localhost/demo/public/trn_stylists');
  }
}
