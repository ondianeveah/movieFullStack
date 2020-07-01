import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})

export class EditMovieComponent implements OnInit {

  movie = new Movie();

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //get the id
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.fetchMovieById(id).subscribe(
      data => {
        this.movie = data;
      }
    );
  }

  editMovieList(){
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
