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
        AddNotes.push(this)
    }
}

export let AddNotes : iaddnote[] = [] ;
