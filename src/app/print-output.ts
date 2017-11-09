import { LoggingService } from "./logging-service";
import { NgModule, Injector, CompilerFactory } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LazyMoviesComponent } from "./lazy-movies/lazy-movies.component";
import { Router, RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { LazyModule } from "./lazy.module";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// export function printMessage(input: string) {
//     return input.split('').reverse().join('');
//   //  return input;
//   }
 
//Another Version
// export class someModule{
//   constructor(private logging:LoggingService){

//   }
//   printMessage(input: string) {
//     return input.split('').reverse().join('');
//   //  return input;
//   }
// }
// export const routes: Routes = [
//   { path: 'load-movie', component: LazyMoviesComponent }
// ];
@NgModule({
  declarations: [
    LazyMoviesComponent
  ],
  imports: [
    CommonModule,
    //AppRoutingModule,
   // RouterModule.forChild(routes)
   RouterModule.forRoot([
    { path: 'movies', component: LazyMoviesComponent },
   ])
   
  ],
  providers: [LoggingService],
  bootstrap: []
})

export class someModule {
  protected _compiler : any;
  protected _compilerFactory : any;   
  constructor(private injector:Injector){
 
  }
  logging:LoggingService=this.injector.get(LoggingService);
    printMessage(input: string) {
    //  console.log(this.injector.get(LoggingService));
     // this.logging.logToConsole('CORE SPA Injected service:-, Incoming Value'+input);
    return input.split('').reverse().join('');
  //  return input;
  }
  navigateToLazyMovie(){
    //return this.router.navigate(['/lazy/load-movie']);
   // return this.router.navigate(['movies']);
    this.logging.logToConsole('Value getting injected from CORE SPA!')
  }
}