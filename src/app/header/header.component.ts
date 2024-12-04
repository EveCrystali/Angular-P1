import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
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