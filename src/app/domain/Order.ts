import { Element } from "./Element";
import { User } from "./User";

export class Order {
    public id?: string;
    public user?: User;
    public state?: string;
    public elements?: Element[];
}