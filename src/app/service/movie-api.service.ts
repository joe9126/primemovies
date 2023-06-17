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

  //trending movies and tv data
  trendingAllWeek():Observable<any>{
    //https://api.themoviedb.org/3/trending/all/week
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  //search movie or tv series

  searchMovie(data:any):Observable<any>{
    //https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1' \
    return this.http.get(`${this.baseurl}/search/multi?include_adult=false?&query=${data}&api_key=${this.apikey}`);
  }
}
