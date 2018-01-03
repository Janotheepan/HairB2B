import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  names1: Names1[];
  rel: '';
  query: any;

  constructor(private userService: UserService) { }
  radiobtsearch: 'Name';
  selected: boolean;

  ngOnInit() {
    this.selected = true;

    this.userService.getNames().subscribe((names1) => {
      this.names1 = names1;
    });
  }

}
export interface Names1 {
  id: number;
  first_name: string;
  last_name: string;
  profile_pic_path: string;
  address: string;
  description: string;
  rating: number;
}
