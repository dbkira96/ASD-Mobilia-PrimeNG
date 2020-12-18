import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import{User} from '../../domain/User'
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
            
      return this.httpClient.get<User>(`${environment.API_URL}/users/login`, {params});
    }
}
