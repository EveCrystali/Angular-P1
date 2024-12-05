import { Injectable } from '@angular/core';
import { Note } from '../add-note/add-note';

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    private notes: Note[] = [];

    addNote(note: Note): void {
        const savedNotesFile = localStorage.getItem('notes');
        if (savedNotesFile != null) {
            this.notes = JSON.parse(savedNotesFile);
        }
        this.notes.push(note);
        localStorage.setItem('savedNotes', JSON.stringify(this.notes));
    }

    getNotes(): Note[] {
        const savedNotesFile = localStorage.getItem('savedNotes');
        if (savedNotesFile != null) {
            this.notes = JSON.parse(savedNotesFile);
        }
        return this.notes;
    }
}
