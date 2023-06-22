import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api/movie-api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchForm : FormGroup;
  searchResults : any;
  constructor(private fb: FormBuilder, private service: MovieApiService){
    this.searchForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchtext:  ["", Validators.required]
    });
  }

  searchPhrase(){
    const formData = this.searchForm.getRawValue();
    //console.log(formData.searchtext,'search text#');

    /*if(this.searchForm.invalid) {
      this.searchForm.setErrors({ ...this.searchForm.errors, 'yourErrorName': true });
      return;
    }*/

    this.service.searchMovie(formData.searchtext).subscribe(
      (result)=>{
        console.log(result.results,'searchresults#');
        this.searchResults = result.results;
      }
    );
  }
}
