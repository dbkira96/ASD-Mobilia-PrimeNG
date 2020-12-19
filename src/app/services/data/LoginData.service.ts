import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import{User} from '../../domain/User';
import{Account} from '../../domain/Account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

    constructor(
      private httpClient:HttpClient
    ) { }

    login(username: string, password: string): Observable<User>{
      let params = new HttpParams();
      params = params.set('username', username);
      params = params.set('password', password);
            
      return this.httpClient.get<User>(`${environment.API_URL}/storehouse/users/login`, {params});
    }

      
   httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };

    register(account:Account): Observable<Account>{

      return this.httpClient.post<Account>(`${environment.API_URL}/storehouse/users/registration`,account,this.httpOptions);
    }
}
