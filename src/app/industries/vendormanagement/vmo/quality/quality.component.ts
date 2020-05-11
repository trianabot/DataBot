import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'; 
import { RatingServiceService } from 'src/app/service/rating-service.service';
import { Rating } from 'src/app/models/rating';
@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent implements OnInit {
  qualityRatingForm: FormGroup;
  ratings: Rating[];
  projectsData :any = [];
  ShowRatingForm = false;
  constructor(private ratingService:RatingServiceService) { }

  ngOnInit() {
    this.getProjectAllProjectsData();
  }
  getProjectAllProjectsData(){
    this.ratingService.getProjectAllProjectsData().subscribe(r=>{
      this.ratings = r['data'];
      console.log("data", this.ratings);
    })
  }
  
  ratingForm(){
    this.ShowRatingForm = true;
  }
 
}
