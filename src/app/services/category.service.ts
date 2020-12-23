import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../domain/Category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.API_URL}/storehouse/categories`);
  }
}
