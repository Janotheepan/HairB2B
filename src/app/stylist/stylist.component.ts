import {Component, OnInit,} from '@angular/core';
// import {AppState} from 'app.service';
import * as moment from 'moment';

@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {
   stylist = {
     profile_pic: 'images/stylist/jj.jpg',
     name: 'Jano',
     star: '*****',
     skills: 'Colouring',
     description: 'I can work well and colour perfectly.',
     payment: '$250'
   };
   public date = moment();

   public daysArr;

  constructor() {
  }

  ngOnInit() {
    this.daysArr = this.createCalendar(this.date);
  }

  public createCalendar(month) {
    let firstDay = moment(month).startOf('M');
    let days = Array.apply(null, { length: month.daysInMonth() + 1})
      .map(Number.call, Number)
      .slice(1);
    for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);
    }
    return days;
  }
}
