import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';


const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: 'addMovie', component: AddMovieComponent},
  {path: 'movieList', component: MovieListComponent},
  {path: 'editMovie/:id', component: EditMovieComponent},
  {path: 'viewMovie/:id', component: ViewMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
