import { Component, OnInit } from '@angular/core';
// import {AppState} from 'app.service';
import * as moment from 'moment';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Skills } from '../stylist-set/stylist-set.component';
import { Locations } from '../stylist-set/stylist-set.component';
import { Jobroles } from '../stylist-set/stylist-set.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {
  stylists: Stylists[];
  prices: Prices[];
  skills: Skills[];
  dates: Dates[];
  locations: Locations[];
  jobroles: Jobroles[];
  busydays: Busy[];
  rel: '';
  query: any;
  nam: any;
  asnm: any;
  thisDate;
  thisDatee;
  count: boolean  = false;
  selectedDate = [];
  dayFormatted;
  dateTo;
  costTotal;
   public date = moment();
   public dateForm: FormGroup;
   public daysArr;
   public isReserved;
   public isReservedw;

  constructor(private route: ActivatedRoute, private userService: UserService, private fb: FormBuilder ) {
    this.initDateForm();
  }

  // onPickDate(val) {
  //     this.thisDate = val;
  //     console.log(this.thisDate);
  //     this.selectedDate.push(this.thisDate);
  // }

  public initDateForm() {
    return this.dateForm = this.fb.group( {
      dateFrom: [null, Validators.required],
      dateTo: [null, Validators.required]
    });
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
    this.userService.getDates().subscribe((dates) => {
      this.dates = dates;
    });
    this.userService.getLocation().subscribe((locations) => {
      this.locations = locations;
    });
    this.userService.getJobrole().subscribe((jobroles) => {
      this.jobroles = jobroles;
    });
    this.userService.getBusy().subscribe((busydays) => {
      this.busydays = busydays;
    });
    this.route.queryParams.subscribe(ss => {
      this.query = ss;
      // console.log(this.query);
    });
    this.route.queryParams.subscribe(nm => {
      this.nam = nm;
       console.log(this.nam);
    });
    this.route.queryParams.subscribe(name => {
      this.asnm = name;
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

  public selectedDatem(day) {
    this.dayFormatted = day.format('DD/MM/YYYY');
    if (this.dayFormatted) {
      this.thisDate = 'You have chosen ' + this.dayFormatted + ' - Morning session';
      for (let i = 0; i < this.selectedDate.length; i++) {
        if (this.selectedDate[i] === this.thisDate) {
          this.selectedDate.splice(i , 1);
          return;
        }
      }
      this.selectedDate.push('You have chosen ' + this.dayFormatted + ' - Morning session');
    }
    // this.costTotal.push('100');
  }

  public selectedDatee(day) {
    this.dayFormatted = day.format('DD/MM/YYYY');
    if (this.dayFormatted) {
      this.thisDate = 'You have chosen ' + this.dayFormatted + ' - Evening session';
      for (let i = 0; i < this.selectedDate.length; i++) {
        if (this.selectedDate[i] === this.thisDate) {
          this.selectedDate.splice(i, 1);
          return;
        }
      }
      this.selectedDate.push('You have chosen ' + this.dayFormatted + ' - Evening session');
    }
  }

  public isSelected() {
    if (this.count) {
      this.count = !this.count;
      return false;
    } else {
      this.count = !this.count;
      return true;
    }
    // if (!day) {
    //   return false;
    // }
    // let dateFrom = moment(this.dateForm.value.dateFrom, 'DD/MM/YYYY');
    // let dateTo = moment(this.dateForm.value.dateTo, 'DD/MM/YYYY');
    // if (this.dateForm.valid) {
    //   return dateFrom.isSameOrBefore(day) && dateTo.isSameOrAfter(day);
    // }
    // if (this.dateForm.get('dateFrom').valid) {
    //    dateFrom.isSame(day);
    // }return
    // this.dayFormatted = day.format('DD/MM/YYYY');
    // if (this.dayFormatted) {
    //   this.thisDate = 'You have chosen ' + this.dayFormatted + ' - Morning session';
    //   this.thisDatee = 'You have chosen ' + this.dayFormatted + ' - Evening session';
    //   for (let i = 0; i < this.selectedDate.length; i++) {
    //     if (this.selectedDate[i] === this.thisDate || this.selectedDate[i] === this.thisDatee) {
    //       return true;
    //     }
    //   }
    //   return false;
    // }
  }
  public checkBusy(day) {

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
export interface Dates {
  id: number;
  stylist_id: number;
  time_slot: string;
  date: string;
}
export interface Busy {
  id: number;
  stylist_id: number;
  time_slot: string;
}
