import { iaddnote } from "./iadd-note";

export class addNote implements iaddnote {
    id: number;
    title: string;
    corpus: string;
    date: Date;

    constructor(id: number, title: string, corpus: string) {
        this.id = id,
            this.title = title,
            this.corpus = corpus,
            this.date = new Date();

    }

    addNote(): void {
        const savedNotesFile = localStorage.getItem('notes');
        if (savedNotesFile != null) {
            const savedNotes = JSON.parse(savedNotesFile);
            AddNotes = savedNotes;
        }
        AddNotes.push(this);
        localStorage.setItem('savedNotes', JSON.stringify(AddNotes));
    }
}

export let AddNotes: iaddnote[] = [];
