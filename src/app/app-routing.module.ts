import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { UpcomingmoviesComponent } from './upcomingmovies/upcomingmovies.component';

const routes: Routes = [
  {path:'' , component:MoviesListComponent},
  {path:'latest' , component:MoviesListComponent},
  {path:'upcoming' , component:UpcomingmoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  [x: string]: any;
}
