import { Component, OnInit } from '@angular/core';
import { MovieslistService } from '../movieslist.service'
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {

  
  moviesList: Array<any>

  constructor( private movieService: MovieslistService) { }

  ngOnInit() {

    this.movieService.getTopRatedMovies().subscribe(res => {
      this.moviesList = res 
    }
    )
  }
}
