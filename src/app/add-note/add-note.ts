export class Note {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly corpus: string,
        readonly date: Date = new Date()
    ) {}
}