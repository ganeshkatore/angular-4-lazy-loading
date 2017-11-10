import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

    constructor() { }

    logToConsole(input:string){
        console.log(input);
    }
}