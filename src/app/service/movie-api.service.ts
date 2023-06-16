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
}
