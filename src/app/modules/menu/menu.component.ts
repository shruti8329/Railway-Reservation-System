import { Component } from '@angular/core';
// import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public isCollapsed = true;

  title = 'login-page';
  constructor(private matDialog: MatDialog) {}
  openlogin() {
    this.matDialog.open(LoginComponent, {
      width: '350px',
      height: '350px',
    });
  }
}
