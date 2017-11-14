import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { IMovie } from './Movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls:['./movies.component.css']
})

//Movie Class Implementation. This implementation feature apps can have over interface

export class MoviesComponent implements OnInit {
    movies:IMovie[];
    movie:IMovie = new Movie();
    constructor(private moviesService:MoviesService) { }

    ngOnInit() { 
        //Incase of Http calls, subscribe model will come along
        this.movies=this.moviesService.getMovies();
                        
    }

    createMovie(){
        this.movie.id=0;
        this.movie.directorName="Some Director";
        this.movie.name="Some Movie";
        this.movie.releaseYear="2017";
        this.movies=this.moviesService.createMovie(this.movie);
    }
}

export default MoviesComponent;

class Movie implements IMovie{
    id: number;
    name: string;
    directorName: string;
    releaseYear: string;
    
}