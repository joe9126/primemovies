import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    constructor(private service:MovieApiService){  }
    bannerResult:any = [];

    trendingResult:any = [];

    ngOnInit(){
      this.bannerData();
      this.trendingMovies();
    }

    //fetch banner data
    bannerData(){
      this.service.bannerApiData().subscribe(
        (result:any)=>{
         // console.log(result, 'banner-result#')
          this.bannerResult = result.results;
        }
      );
    }

<<<<<<< HEAD
    trendingMovies(){
      this.service.bannerApiData
    }
=======
    //trending movies
    trendingMovies(){
      this.service.trendingMovies().subscribe(
        (result:any)=>{
          console.log(result,'trendingmovies#');
          this.trendingResult = result.results;
        }
      )
    }


>>>>>>> 73758dee326b3f1cfd5b2417a1f7ec72cd3f4627
}
