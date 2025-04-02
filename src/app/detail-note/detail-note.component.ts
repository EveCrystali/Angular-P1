import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Note } from '../add-note/add-note';
import { AddNoteComponent } from '../add-note/add-note.component';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-detail-note',
  imports: [CommonModule, RouterModule, AddNoteComponent],
  standalone: true,
  templateUrl: './detail-note.component.html',
  styleUrl: './detail-note.component.css'
})
export class DetailNoteComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private noteService = inject(NoteService);
  
  note?: Note;

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.note = this.noteService.getNote(id);
      
      if (!this.note) {
        console.error(`Note with id ${id} not found`);
        this.navigate();
      }
    });
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id);
    this.navigate();
  }

  editNote(note: Note) {
    this.noteService.editNotes(note);
    this.router.navigateByUrl(`/editNote/${note.id}`);
  }

  navigate() {
    this.router.navigateByUrl('/listNotes');
  }
}
