import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Note } from '../add-note/add-note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-edit-note',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})
export class EditNoteComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private noteService = inject(NoteService);

  note?: Note;

  noteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    corpus: new FormControl('', Validators.required)
  });

  constructor() {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.note = this.noteService.getNote(id);

      if (this.note) {
        this.noteForm.patchValue({
          title: this.note.title,
          corpus: this.note.corpus
        });
      } else {
        console.error(`Note with id ${id} not found`);
        this.navigate();
      }
    });
  }

  navigate() {
    this.router.navigateByUrl('/listNotes');
  }

  Submit() {
    if (this.noteForm.valid && this.note) {
      const updatedNote: Note = {
        ...this.note,
        title: this.noteForm.value.title!,
        corpus: this.noteForm.value.corpus!
      };
      this.noteService.editNotes(updatedNote);
      this.navigate();
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
