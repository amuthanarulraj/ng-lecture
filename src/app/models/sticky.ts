export class Sticky {
    id: string;
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
