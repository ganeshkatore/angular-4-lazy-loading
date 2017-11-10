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

export class MoviesComponent implements OnInit {
    movies:IMovie[];
    constructor(private moviesService:MoviesService) { }

    ngOnInit() { 
        //Incase of Http calls, subscribe model will come along
        this.movies=this.moviesService.getMovies();
                        
    }
}

export default MoviesComponent;