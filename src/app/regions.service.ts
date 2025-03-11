import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  private apiUrl = 'https://run.mocky.io/v3/972fe59c-9a75-4aa5-9ed8-3ac118ddaf96'; 

  constructor(private http: HttpClient) {}

  getRegions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
