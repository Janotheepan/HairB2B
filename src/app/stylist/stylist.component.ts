import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {
  stylist = {
    profile_pic : '../images/stylist/jj.jpg',
    name : 'Jano',
    star : '*****',
    skills : 'Colouring',
    description : 'I can work well and colour perfectly.',
    payment : '$250'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
