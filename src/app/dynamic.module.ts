import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { routes } from './dynamic-routing.module';

import DynamicComponent from './dynamic.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [ 
    DynamicComponent,
    MoviesComponent
 ],
  imports: [ 
    CommonModule,
    routes,
    FormsModule,
    HttpModule ],
  providers:[MoviesService]
})
export default class DynamicModule {
  static routes = routes;
}
