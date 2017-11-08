import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LazyMoviesComponent } from './lazy-movies/lazy-movies.component';
import { LazyReviewsComponent } from './lazy-reviews/lazy-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyMoviesComponent,
    LazyReviewsComponent
  ],
  imports: [
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
