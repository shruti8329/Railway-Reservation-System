import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor() {}

  ngOnInit() {}

  loginUser() {
    if (this.username == 'admin' && this.password == 'admin123') {
      console.log('logged in successfully');
    }
  }
}
