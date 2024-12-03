import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { LogoAngularComponent } from './logo-angular/logo-angular.component';
import { NotesComponent } from './note/notes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,LogoAngularComponent,NotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'P1';
}
