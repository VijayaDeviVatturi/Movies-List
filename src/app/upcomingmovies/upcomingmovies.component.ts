import { Component, OnInit } from '@angular/core';
import { MovieslistService } from '../movieslist.service'

@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcomingmovies.component.html',
  styleUrls: ['./upcomingmovies.component.css']
})
export class UpcomingmoviesComponent implements OnInit {
  moviesList: Array<any>
  constructor(private movieService: MovieslistService) { }

  ngOnInit() {
    this.movieService.getUpcomingMovies().subscribe(res => {
      this.moviesList = res
      console.log(this.moviesList.toString())
    }
    )

  }
}
