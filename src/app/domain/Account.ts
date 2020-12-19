import { Profile } from "./Profile";
import { User } from "./User";

export class Account{

   constructor( public userDto:User,
    public profileDto:Profile,
    public type:string,
    ){

    }
}