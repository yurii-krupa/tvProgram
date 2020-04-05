import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(
    private http: HttpClient
  ) {  }

  getTvSerials(limit = 5, page = 0, searchPhrase?: string): Observable<any> {
    let params = new HttpParams();
    if (limit) {
     params = params.append('_limit', limit.toString());
    }
    if (page) {
      params = params.append('_page', page.toString());
    }
    if (searchPhrase) {
      params = params.append('q', searchPhrase);
    }
    return this.http.get<any>(`${environment.apiUrl}/tvItems`, { params });
    // return this.http.get<any>(`${environment.apiUrl}/tvItems?_page=${page}&_limit=${limit}`);
  }

  getTvSerialsTotal(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/tvItems`);
  }

}
