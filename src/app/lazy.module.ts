import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyReviewsComponent } from './lazy-reviews/lazy-reviews.component';
import { LazyMoviesComponent } from './lazy-movies/lazy-movies.component';

const routes: Routes = [
  { path: 'load-movie', component: LazyMoviesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LazyMoviesComponent,
    LazyReviewsComponent
  ]
})
export class LazyModule { }
