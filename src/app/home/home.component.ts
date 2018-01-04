import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/map';
import { Names } from '../stylist-set/stylist-set.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  names: Names[];
  rel: '';
  query: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }
  selected: boolean;

  ngOnInit() {
    this.selected = true;

    this.userService.getNames().subscribe((names) => {
      this.names = names;
    });
  }

}
