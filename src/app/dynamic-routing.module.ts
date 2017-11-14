import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import DynamicComponent from './dynamic.component';
import { MoviesComponent } from './movies/movies.component';
import { SampleComponent } from './sample.component';

const dynamicRoutes: Routes = [
  { path: '', component: DynamicComponent, pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent},
  { path: 'sample', component: SampleComponent}
 
//  {
//    path:'sample',
//    loadChildren:()=>{
//      return import('./sample.module').then((comp:any)=>{
//        return comp.default;
//      });
//    }
//  }
];

export const routes: ModuleWithProviders = RouterModule.forChild(dynamicRoutes);
