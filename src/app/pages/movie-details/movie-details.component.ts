import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api/movie-api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieData:any = "";
  movietrailervideoKey:any;
  cast:any;
  baseUrlwithapikey:any;
  constructor(private service: MovieApiService, private router: ActivatedRoute){
    //this.baseUrlwithapikey =
  }

  ngOnInit(): void {
    let movieid = this.router.snapshot.paramMap.get('id');
   // console.log(movieid,'movieid#');
      this.movieDetails(movieid);
      this.movieVideo(movieid);
      this.movieCast(movieid);
  }


     //get movie details
     movieDetails(id:any){
      this.service.getMovieDetails(id).subscribe(
        (result:any)=>{
          console.log(result,'moviedetails#');
          this.movieData = result;
        }
      )
    }

    //get the movie video
    movieVideo(id:any){
      this.service.getMovieVideo(id).subscribe(
        (result:any)=>{
          console.log(result,'videostream#');
          const results:any = result.results;
          if(results){
            results.forEach((element:any )=> {
              if(element.type=="Trailer"){
                this.movietrailervideoKey = element.key;
                console.log(this.movietrailervideoKey,'trailer#');
              }
          });
          }


        }
      )
    }

    //get movie casts
    movieCast(id:any){
      this.service.getMovieCasts(id).subscribe(
        (result:any)=>{
          console.log(result,'casts#');
          this.cast = result.cast;

        }
      )
    }
}
