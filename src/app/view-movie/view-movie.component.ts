import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  movie = new Movie();
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.fetchMovieById(id).subscribe(
      data => {
        this.movie = data;
      }
    ); 
  }

  goBackToMovieList(){
    this.router.navigate(['movieList']);
  }
}
