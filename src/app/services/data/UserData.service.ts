import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import{User}from '../../domain/User';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

constructor(private HttpClient:HttpClient) { }

  getAllUsers(){
    return this.HttpClient.get<User[]>(`${environment.API_URL}/storehouse/users`);
  }

  save(user: User) {
    return this.HttpClient.post<User>(`${environment.API_URL}/storehouse/user/save`, user);
  }

  update(user: User) {
    return this.HttpClient.post<User>(`${environment.API_URL}/storehouse/user/update`, user);
  }

  delete(id: number) {
    return this.HttpClient.delete(`${environment.API_URL}/storehouse/user/delete?id=${id}`);
  }
 
}
