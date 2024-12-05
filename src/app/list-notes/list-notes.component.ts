import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Note } from '../add-note/add-note';
import { AddNoteComponent } from '../add-note/add-note.component';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-list-notes',
  imports: [CommonModule, AddNoteComponent, RouterLink],
  standalone: true,
  templateUrl: './list-notes.component.html',
  styleUrl: './list-notes.component.css'
})
export class ListNotesComponent {

  noteService = new NoteService;

  notes = this.noteService.getNotes();

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    localStorage.setItem('savedNotes', JSON.stringify(this.notes));
  }
}
