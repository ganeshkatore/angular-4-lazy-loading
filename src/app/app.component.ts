import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   
  title = 'Lazy Loading Module!';
  name= 'Rahul Sahay';

  // reverse() {
  //   import('./print-output').then(module => {
  //     this.name = module.printMessage(this.name);
  //   });
  // }

  //Another Version 
  reverse() {
    import('./print-output').then(module => {
      this.name = module.someModule.prototype.printMessage(this.name);
    });
  }
}
