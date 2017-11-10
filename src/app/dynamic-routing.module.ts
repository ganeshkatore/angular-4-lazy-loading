import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import DynamicComponent from './dynamic.component';
import { MoviesComponent } from './movies/movies.component';

const dynamicRoutes: Routes = [
  { path: '', component: DynamicComponent, pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent}
];

export const routes: ModuleWithProviders = RouterModule.forChild(dynamicRoutes);
