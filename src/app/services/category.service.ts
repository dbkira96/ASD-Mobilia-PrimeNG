import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../domain/Category';
import { Subcategory } from '../domain/Subcategory';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.API_URL}/storehouse/categories`);
  }
  //return all sub category by id of category
  getAllSubcategoryByCategory(id):Observable<Subcategory[]>{
    return this.http.get<Category[]>(`${environment.API_URL}/storehouse/categories/${id}`);
  }
}
