import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

//service for CRUD movie app
@Injectable()
export class MoviesService {
  constructor(public _http: Http) { }


  //function to get all the categories
  getCategory(): Observable<any> {
    return this._http.get('http://localhost:8888/api/v1/getallcategories').map(
      data => data.json()
    );
  }
  //function to get all series
  getSeries(): Observable<any> {
    return this._http.get('http://localhost:8888/api/v1/getallseries').map(
      data => data.json()
    );
  }

  //function to get all the movies
  getMovies(): Observable<any> {
    return this._http.get('http://localhost:8888/api/v1/getallmovies').map(
      data => data.json()
    );
  }

  //function to get movies by id
  getMoviesById(movie_Id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });

    let movieId = {
      "movieId": movie_Id
    }

    return this._http.post('http://localhost:8888/api/v1/getmoviebyid', movieId, options).map(
      data => data.json()

    )
  }
  //function to get series by id

  getSeriesById(category_Id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    console.log(category_Id, "in roooooo")
    let categoryId = {
      "categoryId": category_Id
    }

    return this._http.post('http://localhost:8888/api/v1/getseriesbyid', categoryId, options).map(
      data => data.json()

    )
  }
  //function to update movie
  UpdateMovie(movieId, movie_Name) {
    console.log(movie_Name)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let movieName = {
      "movieName": movie_Name
    }
    return this._http.put('http://localhost:8888/api/v1/admin/updatemovie' + '/' + movieId, movieName, options).map(
      (res: Response) => res.json());
  }
  // function to delete movie by id
  deleteMovie(movieId): Observable<any> {


    console.log("in delete", movieId)
    return this._http.delete('http://localhost:8888/api/v1/admin/deletemovie' + '/' + movieId).map(
      data => data.json()
    );
  }

  //function to delete series by series id
  deleteSeries(seriesId): Observable<any> {



    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });



    return this._http.delete('http://localhost:8888/api/v1/admin/deleteseries' + '/' + seriesId).map(
      data => data.json()
    );
  }


  //function to delete season by season id

  deleteSeasons(seasonId): Observable<any> {



    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });

    console.log("hello", typeof (seasonId));

    return this._http.delete('http://localhost:8888/api/v1/admin/deleteseason' + '/' + seasonId).map(
      data => data.json()
    );
  }
  //function to delete episode by episode id
  deleteEpisode(episodeId): Observable<any> {



    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });

    console.log("hello", typeof (episodeId));

    return this._http.delete('http://localhost:8888/api/v1/admin/deleteepisode' + '/' + episodeId).map(
      data => data.json()
    );
  }
  //function to get movies by categoryId
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

  //function to get season by series id
  getSeasonBySeriesId(series_Id): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });

    let seriesType = {
      "seriesType": series_Id
    }
    console.log(seriesType)
    return this._http.post('http://localhost:8888/api/v1/getSeasonBySeries', seriesType, options).map(
      data => data.json()

    )

  }
  //function to post Category
  postCategory(category): Observable<any> {

    console.log(category)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });


    return this._http.post('http://localhost:8888/api/v1/admin/postcategory', category, options).map(data => data.json());
  }
  //function to post Movie
  postMovie(movie): Observable<any> {

    console.log("in movie add service", movie)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });


    return this._http.post('http://localhost:8888/api/v1/admin/postmovie', movie, options).map(data => data.json());
  }
  //function to post Series
  postSeries(series): Observable<any> {

    console.log("in movie add service", series)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });


    return this._http.post('http://localhost:8888/api/v1/admin/postseries', series, options).map(data => data.json());
  }
  //function to post Season
  postSeason(season): Observable<any> {

    console.log("in season add service", season)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });


    return this._http.post('http://localhost:8888/api/v1/admin/postseason', season, options).map(data => data.json());
  }
  //function to post Episode
  postEpisode(episode): Observable<any> {

    console.log("in movie add service", episode)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });


    return this._http.post('http://localhost:8888/api/v1/admin/postepisode', episode, options).map(data => data.json());
  }
}
