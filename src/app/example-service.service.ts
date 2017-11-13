import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';



@Injectable()
export class ExampleServiceService {
  constructor(public _http: Http) { }

 

  customer = {};
  userr: any;




//function to get all the customers
  getCustomers(a): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    console.log(a)
    return this._http.post('http://localhost:8888/api/v1/getCustomer', a, options).map(
      data => data.json()
    );
  }

  getProducts(): Observable<any> {
    return this._http.get('http://localhost:8888/api/v1/getallproducts').map(
      data => data.json()
    );
  }

  getCategory(): Observable<any> {
    return this._http.get('http://localhost:8888/api/v1/getallcategories').map(
      data => data.json()
    );
  }

  
//function to create temporary user
  createUser(form): Observable<any> {

    console.log(form)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });


    return this._http.post('http://localhost:8888/api/v1/createTempuser', form, options).map(data => { });
  }

  //create verified user
  createUserFinal(code): Observable<any> {
    
        console.log(code)
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')
        let codeobj = {
          "code" : code
        }
        let options = new RequestOptions({ headers: headers });
    
    
        return this._http.post('http://localhost:8888/api/v1/createuser' , codeobj, options).map(data =>data.json()
        );
      }


  name;
  setUser(userr) {
    this.customer = userr;
    console.log(this.customer);
  }
  getuser(): any {
    console.log(this.customer, "hellooooo");
    return this.customer;
  }

 
  
}
