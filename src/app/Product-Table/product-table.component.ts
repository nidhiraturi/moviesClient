import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router, NavigationExtras } from '@angular/router';
import { ExampleServiceService } from '../example-service.service'
import { ActivatedRoute, Params } from '@angular/router';





@Component({

  selector: 'app-customer-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],


})
export class CustomerTableComponent implements OnInit {
 
  subtotal = 0;

  products = [];
 
  cart : Array<any> = [];
  item;
  myarray = [];
  total=0;
  totalarray=[];
  GrandTotal = 0;
  category=[];
  pro=[];
  constructor(private _exampleservice: ExampleServiceService, private _route: ActivatedRoute, private route: Router) {


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
 
this._exampleservice.getCategory().subscribe(
      data => {
        this.category = data
        
      }
    )

  }
giveid(categoryid)
{
  console.log(categoryid)
  this._exampleservice.getProductByCategoryId(categoryid).subscribe(
      data => {
        this.products = data
        console.log(this.products);
        
      }
    )
}

  addElement(productId) {
    this.cart.push(productId);
    console.log(this.cart)

console.log(this.cart,"in setr");
  }
i:any;
  showCart() {
    
   console.log(this.cart)

      this._exampleservice.getProductById(this.cart).subscribe(data => {
        this.item = data;
        this._exampleservice.setCart(this.item);
     for(let i = 0 ; i < this.item.length ; i++){
          this.item[i].Subtotal = this.item[i].productPrice * this.item[i].productQuantity;
          this.GrandTotal += this.item[i].Subtotal;
        }        
    });


  }
  calculateGrandTotal(){
    this.GrandTotal = 0;
   for(let i = 0 ; i < this.item.length ; i++){
     this.GrandTotal += this.item[i].Subtotal; 
     
   }
   console.log(this.GrandTotal)

  }


  calculate(j){
  
  this.item[j].Subtotal = this.item[j].productPrice * this.item[j].productQuantity;
  
  this.calculateGrandTotal()


  }
  

  

  toNextComponent()
  {
    

    this._exampleservice.setTotal(this.GrandTotal);
    this.route.navigate(['bill']);
  }
  logout(){
    localStorage.clear();
  }

}





