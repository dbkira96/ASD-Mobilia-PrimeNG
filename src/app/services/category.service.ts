import { HttpClient, HttpParams } from '@angular/common/http';
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

  getSubcategory(name: string): Observable<Subcategory> {
    return this.http.get<Subcategory>(`${environment.API_URL}/storehouse/subcategory?name=${name}`);
  }

  getSubcategoriesName(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.API_URL}/storehouse/subcategoriesName`);
  }
  
  //return all sub category by id of category
  getAllSubcategoryByCategory(id):Observable<Subcategory[]>{
    return this.http.get<Category[]>(`${environment.API_URL}/storehouse/categories/${id}`);
  }
}
