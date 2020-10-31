import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movie, MovieDataResponse } from './Movie';
@Injectable({
  providedIn: 'root'
})
export class MovieslistService {
  API_KEY: string = `5a6c34020248dc7e4e9fd4801b7f9c59`
  upcominglist: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=1`
  topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=3`
  constructor(private http: HttpClient) { }

  getUpcomingMovies(): Observable<MovieDataResponse> {
    return this.http.get<MovieDataResponse>(this.upcominglist)
      .pipe(
        map((response: MovieDataResponse) => {

          response.results = response.results.map(mv => {

            return {
              backdrop_path: mv.backdrop_path,
              title: mv.title,
              release_date: mv.release_date,
              vote_average: mv.vote_average
            }
          })
          return response

        })
      );

  }

  getTopRatedMovies(): Observable<MovieDataResponse> {
    return this.http.get<MovieDataResponse>(this.topRated)
      .pipe(
        map((response: MovieDataResponse) => {
          response.results = response.results.map(mv => {
            return {
              backdrop_path: mv.backdrop_path,
              title: mv.title,
              release_date: mv.release_date,
              vote_average: mv.vote_average
            }
          })
          return response

        })
      );

  }

}

