import { Injectable } from '@angular/core';
import { Account } from '../domain/Account';
import { LoginDataService } from './data/LoginData.service';
import { RegisterDataService } from './data/registerData.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private loginDataService: LoginDataService,
    private registerDataService:RegisterDataService
  ) { }

  authenticate = (username: string, password: string) => {
    return this.loginDataService.login(username, password);
  }

  loggedUser = () => {
    let utente = sessionStorage.getItem("user");
    return (sessionStorage.getItem("user") != null) ? utente : "";
}

register=(account:Account)=>{
  return this.loginDataService.register(account);
}

isLogged = () => (sessionStorage.getItem("user") != null) ? true : false;


clearAll = () =>{ sessionStorage.removeItem("user")
                  sessionStorage.removeItem("user_roles")};

}