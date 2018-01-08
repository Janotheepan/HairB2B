import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Names } from '../stylist-set/stylist-set.component';
import { Locations } from '../stylist-set/stylist-set.component';
import { Skills } from '../stylist-set/stylist-set.component';
import { Jobroles } from '../stylist-set/stylist-set.component';
import { Prices } from '../stylist/stylist.component';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit {
  names: Names[];
  locations: Locations[];
  skills: Skills[];
  jobroles: Jobroles[];
  prices: Prices[];

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userService.getNames().subscribe((names) => {
      this.names = names;
    });
    this.userService.getLocation().subscribe((locations) => {
      this.locations = locations;
    });
    this.userService.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
    this.userService.getJobrole().subscribe((jobroles) => {
      this.jobroles = jobroles;
    });
    this.userService.getPrice().subscribe((prices) => {
      this.prices = prices;
    });
  }

}
