import { Component } from '@angular/core';
import { ListNotesComponent } from "../list-notes/list-notes.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListNotesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
