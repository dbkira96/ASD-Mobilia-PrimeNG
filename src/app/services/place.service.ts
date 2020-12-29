import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Place } from '../domain/Place';

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

}
