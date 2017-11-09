import { Component } from '@angular/core';

@Component({
  selector: 'inline-component',
  template: `
  <div>
    <p>This component is the default component and was loaded by default.</p>
    <a routerLink="/dynamic" routerLinkActive="active">Load a dynamic component</a>
  </div>`
})
export default class InlineComponent {}
