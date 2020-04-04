import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(
    private http: HttpClient
  ) {  }

  getTvSerials(limit = 5, page = 0): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/tvItems?_page=${page}&_limit=${limit}`);
  }

}
