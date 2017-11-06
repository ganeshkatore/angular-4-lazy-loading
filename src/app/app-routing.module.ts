import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//This part needs to be dynamic. Let's say, I get the configuration from REST Call here
//and then below, it will get substituted back to routes stuff, which means it basically 
//becomes collection of loadChildrens. But, this will get activated once it gets visited.

//If we want activate in one short, then that part should be placed in eager loading like
//a normal way.
const routes: Routes = [
  { path: 'lazy', loadChildren: './lazy.module#LazyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
