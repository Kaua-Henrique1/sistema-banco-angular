import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavesServiceService {

  constructor(private http: HttpClient) { }

    buscarNaves(): Observable<Array<any>> {
    return this.http.get<any>('https://swapi.dev/api/starships');
    }

    buscarNavePorId(id: number): Observable<any> {
    return this.http.get<any>(`https://swapi.dev/api/starships//${id}`);
    }
}
