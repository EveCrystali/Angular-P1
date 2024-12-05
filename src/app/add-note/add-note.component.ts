import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Note } from './add-note';
import { DatePipe } from '@angular/common';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
  standalone: true
})
export class AddNoteComponent {
  noteForm = new FormGroup({
    title: new FormControl(''),
    corpus: new FormControl('', Validators.required)
  });

  private noteService = inject(NoteService);

  Submit() {
    if (this.noteForm.valid) {
      const existingNotes = this.noteService.getNotes();
      const maxId = existingNotes.reduce((max, note) => Math.max(max, note.id), 0);
      
      const newNote = new Note(
        maxId + 1,
        this.noteForm.value.title || '',
        this.noteForm.value.corpus || ''
      );

      this.noteService.addNote(newNote);
      this.navigate();
    }
    else {
      alert('The addNote is not correct')
    }
  };

  router = inject(Router);
  navigate(){
    this.router.navigateByUrl('/listNotes')
  };
}
