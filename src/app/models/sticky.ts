export class Sticky {
    id: Number;
    title: string;
    content: string;
    createdDate: Date;
    modifiedDate: Date;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.createdDate = new Date();
        this.modifiedDate = new Date();
    }
}
