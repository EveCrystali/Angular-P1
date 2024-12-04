import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { addNote } from './add-note';
import { AddNotes } from './add-note';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-note',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
  standalone: true
})
export class AddNoteComponent {
  addNotes = AddNotes;
  addNoteForm = new FormGroup({
    title: new FormControl(''),
    corpus: new FormControl('', Validators.required)
  });

  Submit() {
    if (this.addNoteForm.valid) {
      const newAddNote = new addNote(
        this.addNotes.length + 1,
        this.addNoteForm.value.title || '',
        this.addNoteForm.value.corpus || ''
      );

      newAddNote.addNote();
    }
    else{
      alert('The addNote is not correct')
    }
  };
}
