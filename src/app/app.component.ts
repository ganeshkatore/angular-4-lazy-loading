import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container"><h1>Code Splitting in Angular 4</h1></div>
    <router-outlet></router-outlet>
  `
})
export default class AppComponent {}

//TODO:- 
//Pass service from CORE SPA to dynamic modules
//esnext, which browsers are supported?