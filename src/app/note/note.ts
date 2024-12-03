import { INote } from './INote'

let i;
let Notes: INote[] = [];
let isBig=false;

export abstract class NoteBase implements INote {
    id: number;
    title: string;
    body: string;
    isBig = false;

    constructor(id: number, title: string, body: string)
    {
        this.id = id;
        this.title = title;
        this.body=body;
    }
    
    show(): void {
    }
}

export class NoteConcrete extends NoteBase {
    override show(): void {
        this.isBig=!this.isBig;
    }
}

for(let i=1; i<=3; i++){
    Notes.push(new NoteConcrete(i,'title '+i,'body '+i));
}

export { Notes };