import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stylist-set',
  templateUrl: './stylist-set.component.html',
  styleUrls: ['./stylist-set.component.css']
})
export class StylistSetComponent implements OnInit {
  names: Names[];
  charges: Charges[];
  skills: Skills[];
  locations: Locations[];
  jobroles: Jobroles[];
  rel: '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getNames().subscribe((names) => {
      this.names = names;
    });
    this.userService.getCharge().subscribe((charges) => {
      this.charges = charges;
    });
    this.userService.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
    this.userService.getLocation().subscribe((locations) => {
      this.locations = locations;
    });
    this.userService.getJobrole().subscribe((jobroles) => {
      this.jobroles = jobroles;
    });
  }

}

export interface Names {
  id: number;
  first_name: string;
  last_name: string;
  profile_pic_path: string;
  address: string;
  description: string;
  rating: number;
}
export interface Charges {
  id: number;
  stylist_id: number;
  time_slot: string;
  charge: any;
}
export interface Skills {
  id: number;
  stylist_id: number;
  skill: string;
}
export interface Locations {
  id: number;
  stylist_id: number;
  location: string;
}
export interface Jobroles {
  id: number;
  type: string;
}
