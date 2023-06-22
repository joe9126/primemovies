import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
 baseurl = 'https://api.themoviedb.org/3';
 apikey = '50e8719ca4891ccd00f7205647c69111';

  constructor(private http: HttpClient) { }

  //banner data
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  //trending movies data
  trendingMovies():Observable<any>{

    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  //search movie or tv series

  searchMovie(data:any):Observable<any>{

    return this.http.get(`${this.baseurl}/search/multi?include_adult=false?&query=${data}&api_key=${this.apikey}`);
  }

  getMovieDetails(data:any):Observable<any>{
    //'https://api.themoviedb.org/3/movie/movie_id?language=en-US'
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`);
  }

  //get movie video
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`);
  }

  //get movie casts

  getMovieCasts(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`);
  }
}
