import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from '../example-service.service'
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
category=[];
productForm:FormGroup;
  constructor(private api: ExampleServiceService,private fb:FormBuilder) { }

  ngOnInit() {
    this.api.getCategory().subscribe(
      data => {
        this.category = data
        console.log(this.category)
      }
     
    )
this.createUser();
  }
  createUser() {
    
    
    this.productForm = this.fb.group({
      productId:[''],
      proname: ['',[Validators.minLength(5),Validators.maxLength(99),Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      productPrice: ['',[Validators.required , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      productQuantity: ['',[Validators.required,Validators.pattern('^[7-9][0-9]{9}$')]],
      ProductImagePath: ['',[Validators.required , Validators.pattern('^[a-z0-9_-]{3,15}$')]],
      category_id:['']
    })
    console.log(this.productForm)
      }
      AddProduct() {
        console.log(this.productForm.value);
        
        
       
          this.api.postProduct(this.productForm.value).subscribe(data => {
           console.log(data)
           
          })
      }
      
}
