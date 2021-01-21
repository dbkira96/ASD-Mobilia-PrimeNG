import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Place } from '../domain/Place';
import { Shelf } from '../domain/Shelf';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

constructor(private http:HttpClient) { }

getPlace(id: number): Observable<Place> {
  return this.http.get<Place>(`${environment.API_URL}/storehouse/place?id=${id}`);
}
getAllPlaces(){
  return this.http.get<Place[]>(`${environment.API_URL}/storehouse/places`);
}
getAllShelves(){
  return this.http.get<Shelf[]>(`${environment.API_URL}/storehouse/shelf/getAll`);
}

delete(id:number) {
  return this.http.delete(`${environment.API_URL}/storehouse/place/delete?id=${id}`);
}

newShelf(shelf:Shelf){
  return this.http.post<Shelf>(`${environment.API_URL}/storehouse/shelf/addShelf`,shelf);
}

newPlace(place:Place){
  return this.http.post<Place>(`${environment.API_URL}/storehouse/places/addPlace`,place);
}

}
