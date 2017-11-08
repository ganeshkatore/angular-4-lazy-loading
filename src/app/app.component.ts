import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   
  title = 'Lazy Loading Module!';

  print() {
    import('./print-output').then(module => {
      this.title = module.printMessage(this.title);
    });
  }
}
