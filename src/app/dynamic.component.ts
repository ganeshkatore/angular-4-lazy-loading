import { Component } from '@angular/core';

import '../styles/DynamicComponent.scss';
import { LoggingService } from './looging-service';

@Component({
  selector: 'dynamic-component',
  template: `
  <div class="container">
  
      <div><strong>Dynamic Modules and Components</strong></div>
      <div>This component was loaded dynamically... along with other stuffs</div>
   
    </div>
  `
})
export default class DynamicComponent {
  constructor(private logging:LoggingService){
    logging.logToConsole('Logged Message via SPA Core');
  }
}
