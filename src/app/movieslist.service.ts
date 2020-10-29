import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieslistService {
  API_KEY: string = `5a6c34020248dc7e4e9fd4801b7f9c59`
  upcominglist: string =`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=1`
  topRated=`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=2`
  constructor(private http: HttpClient) { }

getUpcomingMovies(): Observable<Array<any>> {
    return this.http.get(this.upcominglist)
      .pipe(
        map((response: any) => response.results)
      );

  }

getTopRatedMovies(): Observable<Array<any>> {
    return this.http.get(this.topRated)
      .pipe(
        map((response: any) => response.results)
      );

  }

}
