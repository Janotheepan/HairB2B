import { Component, OnInit } from '@angular/core';
// import {AppState} from 'app.service';
import * as moment from 'moment';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Skills } from '../stylist-set/stylist-set.component';


@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {
  stylists: Stylists[];
  prices: Prices[];
  skills: Skills[];
  rel: '';
  query: any;
   public date = moment();
   public daysArr;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  public ngOnInit() {
    this.daysArr = this.createCalendar(this.date);
    this.userService.getStylist().subscribe((stylists) => {
      this.stylists = stylists;
    });
    this.userService.getPrice().subscribe((prices) => {
      this.prices = prices;
    });
    this.userService.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
    this.route.queryParams.subscribe(ss => {
      this.query = ss;
      console.log(this.query);
    });
  }
  public todayCheck(day) {
    if (!day) {
      return false;
    }
    return moment().format('L') === day.format('L');
  }
  public createCalendar(month) {
    const firstDay = moment(month).startOf('M');
    const days = Array.apply(null, { length: month.daysInMonth()})
      .map(Number.call, Number)
      .map((n) => {
        return moment(firstDay).add(n, 'd');
      });
      for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);
    }
    return days;
  }
  public nextMonth() {
    this.date.add(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }
  public previousMonth() {
    this.date.subtract(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }
  public possibleDay(day) {
    const check = moment();
    return (day < check);
  }
}

export interface Stylists {
  id: number;
  first_name: string;
  last_name: string;
  profile_pic_path: string;
  address: string;
  description: string;
  rating: number;
}
export interface Prices {
  id: number;
  stylist_id: number;
  time_slot: string;
  charge: any;
}
