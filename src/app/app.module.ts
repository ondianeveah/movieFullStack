import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { DataService } from './services/data.service';
import { NightModeComponent } from './night-mode/night-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    AddMovieComponent,
    EditMovieComponent,
    ViewMovieComponent,
    NightModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
