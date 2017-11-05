import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyMovieComponent } from './lazy-movie/lazy-movie.component';
import { LazyReviewComponent } from './lazy-review/lazy-review.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'load-movie', component: LazyMovieComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LazyMovieComponent,
    LazyReviewComponent
  ]
})
export class LazyModule { }
