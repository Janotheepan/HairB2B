import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignup: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  toggleSignup() {
    this.isSignup = !this.isSignup;
  }

}
