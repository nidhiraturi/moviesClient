import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router, NavigationExtras } from '@angular/router';
import { ExampleServiceService } from '../example-service.service'
import { ActivatedRoute, Params } from '@angular/router'
import {MoviesService} from '../movies.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  subtotal = 0;
  registerForm:FormGroup;
    products = [];
   movies=[];
    cart : Array<any> = [];
    item;
    myarray = [];
    total=0;
    totalarray=[];
    GrandTotal = 0;
    category=[];
    pro=[];
    categoryId;
    constructor(private _api:MoviesService,private formBuilder: FormBuilder, private _route: ActivatedRoute, private route: Router) {
  
  
    }
  
    ngOnInit() {
  
      this.registerForm = this.formBuilder.group({
        
        categoryId: [''],
        // typeUser: ['']
       
      })
      console.log(this.categoryId)
  this._api.getCategory().subscribe(
        data => {
          this.category = data
          
        }
       
      )
  console.log(this.category)
    
 
    this._api.getMovies().subscribe(
      data => {
        this.movies = data
        
      }


     
    )
  }
  onCategoryClick()
  {
    console.log(this.registerForm.value.categoryId);
    this._api.getMoviesByCategoryId(this.registerForm.value.categoryId).subscribe(
        data => {
          this.movies = data
          console.log(this.movies);
          
        }
      )
  }

  toNextComponent()
  {
  
  this.route.navigate(['movie'])  
  }
}