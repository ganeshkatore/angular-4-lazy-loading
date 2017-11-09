import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoggingService } from './logging-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
   
  title = 'Lazy Loading Module!';
  name= 'Rahul Sahay';

  // reverse() {
  //   import('./print-output').then(module => {
  //     this.name = module.printMessage(this.name);
  //   });
  // }

  //TODO:- browser versions supporting esnext and pass some data from core SPA to dynamic module.

 // Another Version 
  reverse() {
    import('./print-output').then(module => {
      this.name = module.someModule.prototype.printMessage(this.name);
    });
  }
  constructor(private logging:LoggingService){}
  ngOnInit(): void {
   this.logging.logToConsole('something logged!')
    
    setTimeout(()=>{
      import('./print-output').then(module=>{
        //Need to think on scanning components and loading usual way
       // module.someModule.
      // this.name=module.someModule.prototype.printMessage(this.name);
     // module.someModule.prototype.navigateToLazyMovie();
       // this.logging.logToConsole('Some Value'); -->working
      });
    },2000);
  }
  
}
