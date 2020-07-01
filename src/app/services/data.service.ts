import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Observable
  fetchListOfMovies(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/movies')
  }

  addMovie(movie: Movie){
    return this.http.post<any>('http://localhost:8080/movies', movie);
  }

  fetchMovieById(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/movies/${id}`);

    // return this.http.get<any>('http://localhost:8080/movies' + id);
  }

  //Delete data from the backend
  deleteMovieById(id: number){
    return this.http.delete<any>(`http://localhost:8080/movies/${id}`);
  }
}
