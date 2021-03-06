import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  private apiURL = 'http://localhost:3000';

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
    return this.http.get<any>(`${this.apiURL}/tvItems`, { params });
  }

}
