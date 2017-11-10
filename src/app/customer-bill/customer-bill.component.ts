import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from '../example-service.service';
@Component({
  selector: 'app-customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.css']
})
export class CustomerBillComponent implements OnInit {

  constructor(private api: ExampleServiceService) {
    
   }
userObj:any;
user:any;
total:any;
customerBill:any;
item=[];
data ={
  name: '',
  total1 : ''
}
  ngOnInit() {
    let a  = this.api.getuser();
    this.user=a.name;
    
    console.log(this.user);
   this.total=this.api.getTotal();
   this.data.name=this.user;
   this.data.total1=this.total; 
    
  
   this.api.postBill(this.data).subscribe(res=>console.log(res));
  this.item= this.api.getcart();
console.log("in bill",this.item)
  }


}
