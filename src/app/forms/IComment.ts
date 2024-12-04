export interface IComment {
    id: number;
    text: string;
    date: Date;
    addComment(): void;
}