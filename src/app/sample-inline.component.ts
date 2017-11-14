import { Component } from '@angular/core';

@Component({
  selector: 'sample-inline-component',
  template: `
  <div class="container">
    <p>This is another module entry point kind of!</p>
   <strong> 
    <a routerLink="/sample" routerLinkActive="active">Sample Module</a></strong>
  </div>`
})
export default class SampleInlineComponent {}
