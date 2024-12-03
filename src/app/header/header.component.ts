import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  AppName = 'My Notes';
  logoClass= 'logoClass'
  logoAppUrl = "assets/564445.png";
  isBig=false;
  testBig() {
    this.isBig = !this.isBig;
  }
}