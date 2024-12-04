import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { iaddnote } from '../add-note/iadd-note';
import { AddNoteComponent } from '../add-note/add-note.component';


@Component({
  selector: 'app-list-notes',
  imports: [CommonModule, AddNoteComponent, RouterLink],
  standalone: true,
  templateUrl: './list-notes.component.html',
  styleUrl: './list-notes.component.css'
})
export class ListNotesComponent {
  notes: iaddnote[] = [];

  constructor() {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    localStorage.setItem('savedNotes', JSON.stringify(this.notes));
  }
}
