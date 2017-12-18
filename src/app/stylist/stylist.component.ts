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
    const firstDay = moment(month).startOf('M');
    const days = Array.apply(null, { length: month.daysInMonths() })
      .map(n => {
        return moment(firstDay).add(n, 'd');
      });
    for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);
    }
    return days;
  }
}
