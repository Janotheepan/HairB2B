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
     images : '../../assets/images/1.jpg',
     stars : '*****',
     desc : 'good styler',
     rate : '250',
     skill : 'dresser, cutter'
   },
   {
     name : 'Jano',
     images : '../../assets/images/1.jpg',
     stars : '****',
     desc : 'very good styler',
     rate : '280',
     skill : 'dresser'
   },
   {
     name : 'Shivu',
     images : '../../assets/images/1.jpg',
     stars : '*****',
     desc : 'good styler',
     rate : '180',
     skill : 'dresser'
   },
   {
     name : 'Kisho',
     images : '../../assets/images/1.jpg',
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
