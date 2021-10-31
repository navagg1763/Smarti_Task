import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Article } from './article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
private apiURL="http://127.0.0.1:8000"
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
  constructor(private httpClient: HttpClient) { }

getAll(): Observable<Article[]> {
  return this.httpClient.get<Article[]>(this.apiURL+'/article/')
  .pipe(
    catchError(this.errorHandler)
  )
}

create(article): Observable<Article> {
  return this.httpClient.post<Article>(this.apiURL+'/article/', JSON.stringify(article), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

find(id): Observable<Article> {
  return this.httpClient.get<Article>(this.apiURL+'/article/get/' + id)
  .pipe(
    catchError(this.errorHandler)
  )
}
update(id, article): Observable<Article> {
  return this.httpClient.put<Article>(this.apiURL+'/article/'+ id, JSON.stringify(article), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}
delete(id){
  return this.httpClient.delete<Article>(this.apiURL+'/article/' + id, this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}
errorHandler(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
}