import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { iaddnote } from '../add-note/iadd-note';
import { AddNoteComponent } from '../add-note/add-note.component';

@Component({
  selector: 'app-detail-note',
  imports: [CommonModule, RouterModule, AddNoteComponent],
  standalone: true,
  templateUrl: './detail-note.component.html',
  styleUrl: './detail-note.component.css'
})
export class DetailNoteComponent {
  route = inject(ActivatedRoute);
  note?: iaddnote;
  notes: iaddnote[] = [];

  constructor() {
    // Récupérer l'ID depuis l'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Récupérer les notes du localStorage
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
      const notes: iaddnote[] = JSON.parse(savedNotes);
      // Trouver la note correspondante
      this.note = notes.find(note => note.id === id);
    }
  }

  deleteNote(id: number) {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
      const notes: iaddnote[] = JSON.parse(savedNotes);
      const updatedNotes = notes.filter(note => note.id !== id);
      localStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
    }
    this.navigate();
  }

  router = inject(Router);
  navigate(){
    this.router.navigateByUrl('/listNotes')
  };
  
}
