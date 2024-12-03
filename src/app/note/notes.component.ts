import { Component } from '@angular/core';
import { Notes } from './note'

@Component({
    selector: 'app-notes',
    standalone: true,
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css'
})
export class NotesComponent {
    notes = Notes;
}