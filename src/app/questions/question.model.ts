import { Answer } from "../answer/answer.model";

export class Questions{
    id?: string;
    title: string;
    description:string;
    createdAt: Date;
    icon?:string;
    answer: Answer[];

    constructor(
        title: string,
        description:string,
        createdAt: Date,
        icon?:string
    ){
        this.id = '1', 
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.icon = icon;
        this.answer = [];
    }
} 