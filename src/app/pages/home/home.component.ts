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
      this.trendingallweekData();
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

    //trending all week

    trendingallweekData(){
      this.service.trendingAllWeek().subscribe(
        (result:any)=>{
          console.log(result,'trendingallweek#');
          this.trendingResult = result.results;
        }
      )
    }
}
