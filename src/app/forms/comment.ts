import { IComment } from "./IComment";
import { DatePipe } from '@angular/common';

export class Comment implements IComment {
    id: number;
    text: string;
    date: Date;

    constructor(id: number, text: string)
    {
        this.id = id;
        this.text=text;
        this.date= new Date();
    }
    
    addComment(): void {
        Comments.push(this)
    }
}

export let Comments: IComment[] = []




