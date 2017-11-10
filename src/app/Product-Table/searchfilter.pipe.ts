import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Customer: any,key:any): any {
    if(key===undefined)
    return  Customer;
    
    return Customer.filter(function(customer)
    {
     return ((customer.Firstname.toLowerCase().includes(key.toLowerCase()))||(customer.Lastname.toLowerCase().includes(key.toLowerCase()))||(customer.Email.toLowerCase().includes(key.toLowerCase()))
    ||(customer.IsActive.toLowerCase().includes(key.toLowerCase()))||(customer.Date_Created.toLowerCase().includes(key.toLowerCase()))
    ||(customer.Date_Updated.toLowerCase().includes(key.toLowerCase())));
  })
}

}
