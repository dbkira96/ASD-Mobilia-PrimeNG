import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from '../domain/Vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

constructor(private http:HttpClient) { }

getVendor(name: string): Observable<Vendor> {
  return this.http.get<Vendor>(`${environment.API_URL}/storehouse/vendor?name=${name}`);
}

getVendorsName(): Observable<string[]> {
  return this.http.get<string[]>(`${environment.API_URL}/storehouse/vendorsName`);
}

}
