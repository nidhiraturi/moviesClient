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
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

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
      // this.username=this._route.snapshot.params['username'];
      // this.name=this._exampleservice.getuser();
      // console.log(this.name)
      // this._exampleservice.getProducts().subscribe(
      //   data => {
      //     this.products = data
      //     console.log(this.products);
      //   }
      // )
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
    }
  // giveid(categoryid)
  // {
  //   console.log(categoryid)
  //   this._exampleservice.getProductByCategoryId(categoryid).subscribe(
  //       data => {
  //         this.products = data
  //         console.log(this.products);
          
  //       }
  //     )
  // }
  
  //   addElement(productId) {
  //     this.cart.push(productId);
  //     console.log(this.cart)
  
  // console.log(this.cart,"in setr");
  //   }
  // i:any;
  //   showCart() {
      
  //    console.log(this.cart)
  
  //       this._exampleservice.getProductById(this.cart).subscribe(data => {
  //         this.item = data;
  //         this._exampleservice.setCart(this.item);
  //      for(let i = 0 ; i < this.item.length ; i++){
  //           this.item[i].Subtotal = this.item[i].productPrice * this.item[i].productQuantity;
  //           this.GrandTotal += this.item[i].Subtotal;
  //         }        
  //     });
  
  
  //   }
  //   calculateGrandTotal(){
  //     this.GrandTotal = 0;
  //    for(let i = 0 ; i < this.item.length ; i++){
  //      this.GrandTotal += this.item[i].Subtotal; 
       
  //    }
  //    console.log(this.GrandTotal)
  
  //   }
  
  
  //   calculate(j){
    
  //   this.item[j].Subtotal = this.item[j].productPrice * this.item[j].productQuantity;
    
  //   this.calculateGrandTotal()
  
  
  //   }
    
  
    
  
  //   toNextComponent()
  //   {
      
  
  //     this._exampleservice.setTotal(this.GrandTotal);
  //     this.route.navigate(['bill']);
  //   }
  //   logout(){
  //     localStorage.clear();
  //   }

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
}
