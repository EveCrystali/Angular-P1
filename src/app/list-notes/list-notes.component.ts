import { Component, inject } from '@angular/core';
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

  private noteService = inject(NoteService);

  notes = this.noteService.getNotes();

}
