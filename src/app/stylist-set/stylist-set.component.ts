import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylist-set',
  templateUrl: './stylist-set.component.html',
  styleUrls: ['./stylist-set.component.css']
})
export class StylistSetComponent implements OnInit {
 results: any[] = [
   {
     name : 'John',
     images : '../images/stylist/1.jpg',
     stars : '*****',
     desc : 'good styler',
     rate : '250',
     skill : 'dresser, cutter'
   },
   {
     name : 'Jano',
     images : '../images/stylist/2.jpg',
     stars : '****',
     desc : 'very good styler',
     rate : '280',
     skill : 'dresser'
   },
   {
     name : 'Shivu',
     images : '../images/stylist/3.jpg',
     stars : '*****',
     desc : 'good styler',
     rate : '180',
     skill : 'dresser'
   },
   {
     name : 'Kisho',
     images : '../images/stylist/4.jpg',
     stars : '**',
     desc : 'good styler',
     rate : '2500',
     skill : 'dresser'
   }
 ]

  constructor() { }

  ngOnInit() {
  }

}
