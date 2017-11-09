import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//This part needs to be dynamic. Let's say, I get the configuration from REST Call here
//and then below, it will get substituted back to routes stuff, which means it basically 
//becomes collection of loadChildrens. But, this will get activated once it gets visited.
//There’s another option we have, the PreloadAllModules feature that allows Angular, once bootstrapped,
// to go and fetch all the remaining module chunks from your server. This could again be part of your performance
// story and you choose to eagerly download your chunked modules. This would lead to faster navigation between
// different modules, and they download asynchronously once you add it to your root module’s routing
//If we want activate in one short, then that part should be placed in eager loading like
//a normal way.
const routes: Routes = [
  { path: 'lazy', loadChildren: './print.output#someModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }