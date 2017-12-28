import { Component } from '@angular/core';
import { SignupService } from './signup.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin: boolean = false;
  isSignup: boolean = false;
  constructor (private newservice: SignupService) {}
  ngOnInit () {
    console.log(this.newservice.success());
  }
  toggleLogin() {
    this.isLogin = !this.isLogin;
  }
}
