import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';



@Injectable()
export class ExampleServiceService {
  constructor(public _http: Http) { }

getCustomersApi="http://192.168.13.126:8888/api/v1/getCustomer"
uploadImageApi="http://192.168.13.126:8888/api/v1/upload/image"
getAllCategoriesApi="http://192.168.13.126:8888/api/v1/getallcategories"
createTempUserApi="http://192.168.13.126:8888/api/v1/createTempuser"
createUserFinalApi="http://192.168.13.126:8888/api/v1/createuser"

  customer = {};
  userr: any;




//function to get all the customers
  getCustomers(a): Observable<any> {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    console.log(a)
    return this._http.post(this.getCustomersApi, a, options).map(
      data => data.json(),
      
    );
    
  }

  uploadImage(imageF)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    console.log("hello",imageF)
    let image = {
      "image" : imageF
    }
    return this._http.post(this.uploadImageApi, image, options).map(
      data => data.json(),
      
    );

  }
  

  getCategory(): Observable<any> {
    return this._http.get(this.getAllCategoriesApi).map(
      data => data.json()
    );
  }

  
//function to create temporary user
  createUser(form): Observable<any> {

    console.log(form)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });


    return this._http.post(this.createTempUserApi, form, options).map(data => { data.json()});
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
    
    
        return this._http.post(this.createUserFinalApi , codeobj, options).map(data =>data.json()
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
