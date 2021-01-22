import{Place} from "./Place"

export class Shelf{

    id?:number;
    nome?:string;
    note?:string;
    places?:Place[];

    constructor(i:number,n:string){this.id = i;this.nome = n; this.places =[]}

}