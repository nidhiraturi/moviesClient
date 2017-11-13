import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

import { ActivatedRoute, Params } from '@angular/router'
import {MoviesService} from '../movies.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
category=[];

movieForm:FormGroup;
categoryForm:FormGroup;
seriesForm:FormGroup;
seasonForm:FormGroup
  categoryId;
  series=[];
  episode=[];
  seasons=[];
  season=[];
  movies=[];
  episodeForm:FormGroup
  updateForm:FormGroup

  constructor(private _api:MoviesService,private formBuilder: FormBuilder, private _route: ActivatedRoute, private route: Router) {


  }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      
      categoryType: [''],
      movieName:[''],
      movieImagePath:['']
      // typeUser: ['']
     
    })
    this.seriesForm = this.formBuilder.group({
      
      categoryType: [''],
      seriesName:[''],
      seriesImagePath:[''],
      updatedDate:[''],
      createdDate:['']
      // typeUser: ['']
     
    })

    this.seasonForm = this.formBuilder.group({
      
      seriesType: [''],
      seasonName:[''],
      seasonImagePath:[''],
      updatedDate:[''],
      createdDate:['']
      
      // typeUser: ['']
     
    })

    this.episodeForm = this.formBuilder.group({
      
      seriesType: [''],
      seasonType:[''],
      episodeName:[''],
      episodeImagePath:[''],
      updatedDate:[''],
      createdDate:['']
      // typeUser: ['']
     
    })
    this.categoryForm=this.formBuilder.group({
      
      categoryName: [''],
      categoryType:[''],
   
    })

    this.updateForm=this.formBuilder.group({
      
      movieName: ['']
      
   
    })
    // function to get categories on page load
this._api.getCategory().subscribe(
      data => {
        this.category = data
        
      }


     
    )
    //api call to get series on page load
    this._api.getSeries().subscribe(
      data => {
        this.series = data
        
      }


     
    )
    //api call to get movies on page load
    this._api.getMovies().subscribe(
      data => {
        this.movies = data
        
      }


     
    )
    console.log(this.movies)

  }
  
//function to add series in db
postSeries()
{
  console.log(this.seriesForm.value)
  this._api.postSeries(this.seriesForm.value).subscribe(
    data => {
      this.series = data
      
    }
   
  )
}

//function to add seasons in db
postSeason()
{
  console.log(this.seasonForm.value)
  this._api.postSeason(this.seasonForm.value).subscribe(
    data => {
      this.seasons = data
      
    }
   
  )
}

// function to get season by series id
getSeasonBySeries()
{
  console.log("hello",this.episodeForm.value.seriesType);
  this._api.getSeasonBySeriesId(this.episodeForm.value.seriesType).subscribe(
    data => {
      this.season = data
      
    }


   
  )
  console.log(this.season);
}

//function to get seasons on click of series
onSeriesClick()
{
  console.log(this.seasonForm.value)
  this._api.postSeason(this.seasonForm.value).subscribe(
    data => {
      this.seasons = data
      
    }
   
  )
}

// function to add category in db
addCategory()
{
  this._api.postCategory(this.categoryForm.value).subscribe(
    data => {
      this.category = data
      
    }
   
  )
}
//function to add movie in db
addMovie()
{
  console.log("in addMovie")
  this._api.postMovie(this.movieForm.value).subscribe(
    data => {
      this.category = data
      
    }
   
  )
}

//function to delete movie wrt movieid 
deleteMovie(movieId)
{
  console.log("in addMovie")
  this._api.deleteMovie(movieId).subscribe(
    data => {
      this.movies = this.movies.filter(movie => movie.movieId !== movieId); 
      
    }
   
  )
}

//function to delete series wrt series id

deleteSeries(seriesId)
{
  console.log("in del series")
  this._api.deleteSeries(seriesId).subscribe(
    data => {
      this.series = this.series.filter(serie => serie.seriesId !== seriesId); 
      
    }
   
  )
}

//function to delete season wrt season id 
deleteSeasons(seasonId)
{
  console.log("in del season")
  this._api.deleteSeasons(seasonId).subscribe(
    data => {
      this.seasons= this.seasons.filter(season => season.seasonId !== seasonId); 
      
    }
   
  )
}

//function to delete the episodes wrt id
deleteEpisode(episodeId)
{
  console.log("in del season")
  this._api.deleteEpisode(episodeId).subscribe(
    data => {
      this.episode= this.episode.filter(episodes => episodes.seasonId !== episodeId); 
      
    }
   
  )
}
//function to get movie by id
getMovieById(movieId)
{
  console.log(movieId)
  this._api.getMoviesById(movieId).subscribe(
    data => {
      this.movies = data
      
    }


   
  )

}

//function to update the movies(by name)
updateMovie(seriesId)
{
  console.log("in updateMovie",seriesId)
  console.log("in updateMovie",this.updateForm.value.movieName)
  this._api.UpdateMovie(seriesId,this.updateForm.value.movieName).subscribe(
    data => {
      this.category = data
      
    }
   
  )
}

//function to post the episodes
postEpisode()
{
  this._api.postEpisode(this.episodeForm.value).subscribe(
    data => {
      this.episode = data
      
    }
   
  )
}

 }