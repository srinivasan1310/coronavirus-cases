import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { Cases } from './cases';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error('Handle Error*****', error);
      return of(result as T);
    };
  }

  getCases(): Observable<Cases[]>{
    console.log('loaded');
    console.log(apiUrl);
    return this.http.get<Cases[]>(`${apiUrl}`).pipe(
      tap(cases => console.log('fetched cases')),
      catchError(this.handleError('getCases', []))
    );
  }
}
