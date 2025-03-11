import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  private apiUrl = 'https://run.mocky.io/v3/e6dcf033-1842-44db-a838-0b2986ce8fd8'; 

  constructor(private http: HttpClient) {}

  getRegions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
