export interface iaddnote{
    id: number,
    title: string,
    corpus: string,
    date: Date,
    addNote(): void
}