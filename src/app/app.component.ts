import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin: boolean = false;
  constructor () {}
  ngOnInit () {  }
  toggleLogin() {
    this.isLogin = !this.isLogin;
  }
}
