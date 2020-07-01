import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
//container
  movies: Movie[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshMovies();
    // this.deleteMovie();
  }


  refreshMovies(){
    this.dataService.fetchListOfMovies().subscribe(
      data => {
        console.log(data);
        this.movies = data;
      },
      error => console.log(error)
      );
  }
  
  goToAddMovie(){
    this.router.navigate(['addMovie']);
  }

  goToEditMovie(id: number){
    this.router.navigate(['editMovie', id]);
  }

  goToViewMovie(id: number){
    this.router.navigate(['viewMovie', id]);
  }

  deleteMovie(id: number){
    this.dataService.deleteMovieById(id).subscribe(
      data => {
        this.refreshMovies();
        console.log('deleted');
        this.router.navigate(['movieList']);
      }
    );
  }

}



