import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IMovie } from './Movie';

@Injectable()
export class MoviesService {

    private movies : Array<IMovie> = [
        { id: 1, name:"Die Another Day", directorName:"Lee Tamahori",releaseYear:"2002"  },
        { id: 2, name:"Broken Arrow",   directorName:"John Woo",releaseYear:"1996" },
        { id: 3, name:"Top Gun", directorName:"Tony Scott",releaseYear:"1986" },
        { id: 4, name:"Day After Tomorrow", directorName:"Roland Emmerich",releaseYear:"2004" },
        { id: 5, name:"Titanic", directorName:"James Cameron",releaseYear:"1997" },
        { id: 6, name:"Jurassic World", directorName:"Colin Trevorrow",releaseYear:"2015" },
        { id: 7, name:"Grease", directorName:"Randal Kleiser",releaseYear:"1978" },
        { id: 8, name:"Anaconda", directorName:"Luis Llosa",releaseYear:"1997" },
        { id: 9, name:"Lake Placid", directorName:"Steve Miner",releaseYear:"1999" },
        { id: 10, name:"Superman", directorName:"Richard Donner",releaseYear:"1978" }
      ];
    constructor() { }

    getMovies():IMovie[]{
      //Use Http service in case of any remote call
      return this.movies;
    }
    
}