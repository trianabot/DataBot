import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quality-form',
  templateUrl: './quality-form.component.html',
  styleUrls: ['./quality-form.component.css']
})
export class QualityFormComponent implements OnInit {
  qualityRatingForm: FormGroup;
  qualityRate = 0;
  peopleRate = 0;
  costRate = 0;
  velocityRate = 0;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.qualityRatingForm = this.formBuilder.group({
      inputBy: [''],
      inputFor: [''],
      people: [''],
      peopleRating: [''],
      peopleComment: [''],
      quality: [''],
      qualityRating: [''],
      qualityComment: [''],
      velocity: [''],
      velocityRating: [''],
      velocityComment: [''],
      cost: [''],
      costRating: [''],
      costComment: [''],
      _id: ['']
    });
  }

  peopleRatingClick(event) {
    this.peopleRate = event.rating;
  }
  qualityRatingClick(event) {
    this.qualityRate = event.rating;
  }
  velocityRatingClick(event) {
    this.velocityRate = event.rating;
  }
  costRatingClick(event) {
    this.costRate = event.rating;
  }
  submit(){
    let formData =
    [
      {
        inputBy: this.qualityRatingForm.value.inputBy,
        inputFor: this.qualityRatingForm.value.inputFor,
        people: this.qualityRatingForm.value.people,
        peopleRating: this.peopleRate,
        peopleComment: this.qualityRatingForm.value.peopleComment,
        quality: this.qualityRatingForm.value.quality,
        qualityRating: this.qualityRate,
        qualityComment: this.qualityRatingForm.value.qualityComment,
        velocity: this.qualityRatingForm.value.velocity,
        velocityRating: this.velocityRate,
        velocityComment: this.qualityRatingForm.value.velocityComment,
        cost: this.qualityRatingForm.value.cost,
        costRating: this.costRate,
        costComment: this.qualityRatingForm.value.costComment,
      }
    ]
    console.log("obj", formData);
  }
  
}
