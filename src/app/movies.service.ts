import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesService {
  constructor(public _http: Http) { }
  
    // user: User;
  
    // data12: any;
    // grandTotal: any;
    // customer = {};
    // userr: any;
    // total;
 
    getCategory(): Observable<any> {
      return this._http.get('http://localhost:8888/api/v1/getallcategories').map(
        data => data.json()
      );
    }
    getMoviesByCategoryId(category_id): Observable<any> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json')
      let options = new RequestOptions({ headers: headers });
      
      let categoryId = {
         "categoryId": category_id
       }
      console.log(category_id)
      return this._http.post('http://localhost:8888/api/v1/getMoviesByCategory', categoryId, options).map(
        data => data.json()
  
      )
  
    }
}
