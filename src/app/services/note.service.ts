import { Injectable } from '@angular/core';
import { Note } from '../add-note/add-note';

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    private notes: Note[] = [];
    private note : Note | undefined;


    addNote(note: Note): void {
        const savedNotesFile = localStorage.getItem('savedNotes');
        if (savedNotesFile != null) {
            this.notes = JSON.parse(savedNotesFile);
        }
        this.notes.push(note);
        localStorage.setItem('savedNotes', JSON.stringify(this.notes));
    }

    getNote(id: number): Note | undefined {
        const savedNotesFile = localStorage.getItem('savedNotes');
        if (savedNotesFile != null) {
            this.notes = JSON.parse(savedNotesFile);
            const note = this.notes.find(note => note.id === id);
            return note;
        }
        return undefined;
    }

    getNotes(): Note[] {
        const savedNotesFile = localStorage.getItem('savedNotes');
        if (savedNotesFile != null) {
            this.notes = JSON.parse(savedNotesFile);
        }
        return this.notes;
    }

    deleteNote(id: number) {
        const savedNotesFile = localStorage.getItem('savedNotes');
        if (savedNotesFile != null) {
            this.notes = this.notes.filter(note => note.id !== id);
            localStorage.setItem('savedNotes', JSON.stringify(this.notes));
        }
    }
}
