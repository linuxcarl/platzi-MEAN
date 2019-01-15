export class User{
    constructor(public email: string,
                public password: string,
                public fistName?: string,
                public lastName?: string){

    }
    fullName(){
        return `${this.fistName} ${this.lastName}`;
    }
}