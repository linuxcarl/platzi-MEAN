import { Questions } from "../questions/question.model";
import { User } from "../singin/user.model";

export class Answer{
    constructor( public description:string,
        public question: Questions,
        public createdAt?: Date,
        public user? : User){}
}