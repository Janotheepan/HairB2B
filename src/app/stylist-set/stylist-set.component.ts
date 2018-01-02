import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-stylist-set',
  templateUrl: './stylist-set.component.html',
  styleUrls: ['./stylist-set.component.css']
})
export class StylistSetComponent implements OnInit {
  names: Names[];
  rel: '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getNames().subscribe((names) => {
      this.names = names;
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
