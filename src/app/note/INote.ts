export interface INote {
    id: number;
    title: string;
    body: string;
    isBig: boolean;
    show(): void;
}