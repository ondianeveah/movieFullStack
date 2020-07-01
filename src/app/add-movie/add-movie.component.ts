import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie = new Movie();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  submitMovieButton(){
    this.dataService.addMovie(this.movie).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['movieList']);
      }
      );
  }

  goBackToMovieList(){
    this.router.navigate(['movieList']);
  }

}
