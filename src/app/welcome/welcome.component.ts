import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router, NavigationExtras } from '@angular/router';
import { ExampleServiceService } from '../example-service.service'
import { ActivatedRoute, Params } from '@angular/router'
import { MoviesService } from '../movies.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  registerForm: FormGroup;

  movies = [];

  category = [];

  categoryId;
  series = [];
  seriesForm: FormGroup
  constructor(private _api: MoviesService, private formBuilder: FormBuilder, private _route: ActivatedRoute, private route: Router) {


  }

  ngOnInit() {
    //categoryform
    this.registerForm = this.formBuilder.group({

      categoryId: ['']


    })
    //series form
    this.seriesForm = this.formBuilder.group({

      seriesId: ['']


    })
    //api call to get categories on page load
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
    console.log(this.category)
  }

  //function to get  movies by category id
  onCategoryClick() {
    console.log(this.registerForm.value.categoryId);
    this._api.getMoviesByCategoryId(this.registerForm.value.categoryId).subscribe(
      data => {
        this.movies = data
        console.log(this.movies);

      }
    )
  }

  //function to get series
  onSeriesClick() {
    console.log(this.seriesForm.value.seriesId, "in series");
    this._api.getSeriesById(this.seriesForm.value.seriesId).subscribe(
      data => {
        this.series = data
        console.log(this.series);

      }
    )

  }

  //function to get seasons
  onSeasonClick() {
    console.log(this.seriesForm.value.seriesId, "in series");
    this._api.getSeriesById(this.seriesForm.value.seriesId).subscribe(
      data => {
        this.series = data
        console.log(this.series);

      }
    )

  }

  //function to go into movie component
  toNextComponent() {

    this.route.navigate(['movie'])
  }
}
