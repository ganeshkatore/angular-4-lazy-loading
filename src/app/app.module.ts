import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app-routing.module';

import AppComponent from './app.component';
import InlineComponent from './inline.component';
import SampleInlineComponent from './sample-inline.component';
import { LoggingService } from './looging-service';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponent
    
  ],
  imports: [ BrowserModule, routes ],
  bootstrap: [ AppComponent ],
  providers:[LoggingService]
})
export class AppModule {}
