import{Place} from "./Place"

export class Shelf{

    id?:number;
    nome?:string;
    note?:string;
    places?:Place[];

    constructor(i:number){this.id = i; this.places =[]}

}