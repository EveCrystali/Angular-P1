import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { AddNoteComponent } from "./add-note/add-note.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AddNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'P1';
}
