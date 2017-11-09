import { Component } from '@angular/core';

import '../styles/DynamicComponent.scss';

@Component({
  selector: 'dynamic-component',
  template: `
    <div class="addMargin">
      <div><strong>Dynamic Modules and Components</strong></div>
      <div>This component was loaded dynamically... along with other stuffs</div>
    </div>
  `
})
export default class DynamicComponent {}
