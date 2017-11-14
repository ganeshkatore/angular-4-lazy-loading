import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './dynamic-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SampleComponent} from './sample.component';


@NgModule({
    imports: [
        CommonModule,
        routes,
        FormsModule,
        HttpModule 
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export default class SampleModule {
    constructor(){
        console.log('Coming From 2nd Module');
    }
 }
