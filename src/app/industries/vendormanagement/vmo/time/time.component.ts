import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RouteService } from 'src/app/service/route.service';
import { error } from 'util';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  demo: any;
  commentForm: FormGroup;
  submitted = false;
  commentedData: boolean;
  Addcomments = [];
  tsetDataArray: any = [];
  commentDataArray: any = [];
  commentDataArray1: any = [];
  myDate: Date;
  myDate1: Date;
  addtimestampform = false;
  showassignedData = false;
  productData: any = [];
  createData: any = [];
  ratingClicked: number;
  itemIdRatingClicked: string;
  ratingtype: string;
  projectItem: any = [];
  qualityRate = 0;
  peopleRate = 0;
  costRate = 0;
  velocityRate = 0;
  people: any = [];
  addingArray: any = [];
  addingRatingArray: any = [];


  constructor(private formBuilder: FormBuilder, private routing: RouteService) {
    this.demo = "awesome"
  }

  ngOnInit() {
    this.getProductDetails();
    this.commentForm = this.formBuilder.group({
      inputBy: [''],
      inputFor: [''],
      people: [''],
      peopleRating: [''],
      peopleComment: [''],
      quality: [''],
      qualityRate: [''],
      qualityComment: [''],
      velocity: [''],
      velocityRating: [''],
      velocityComment: [''],
      cost: [''],
      costRating: [''],
      costComment: [''],
      _id: ['']
    });
    this.myDate = new Date();
  }
  timeStamps(item) {
    this.projectItem = item;
    console.log("this.projectItem", this.projectItem.addRating)
    console.log("this.projectItem", this.projectItem)
    this.showassignedData = true;
  }
  addtimestamp() {
    this.addtimestampform = true;
    this.Addcomments.push("1");

  }
  removeItem(i: number): void {
    this.Addcomments.splice(i, 1);
  }
  peopleRatingClick(event) {
    this.peopleRate = event.rating;
  }
  qualityRatingClick(event) {
    this.qualityRate = event.rating1;
  }
  velocityRatingClick(event) {
    this.velocityRate = event.rating2;
  }
  costRatingClick(event) {
    this.costRate = event.rating3;
  }

  getProductDetails() {
    this.routing.getProjectDetails().subscribe(data => {
      this.productData = data['data'];
      console.log("data", this.productData);
      // console.log("this.productData", this.productData[8].addRating);
      // for(var i=0;i<this.productData[8].addRating.length;i++){
      //   var addingData = this.productData.addRating.people+this.productData.addRating.quality+this.productData.addRating.velocity+this.projectItem.addRating.cost;
      //   console.log(addingData);
      // }
      // this.productData.forEach(function(key,values){
      //   // this.people = values;
      //   // let quality = values['addRating']['quality'];
      //   // let velocity = values['addRating']['velocity'];
      //   // let cost = values['addRating']['cost'];

      //   // let total = (people+quality+velocity+cost);
      //   console.log("Values",values['projectId']);
      // });
    })
  }
  removeProject(id) {
    this.routing.DeleteProject(id).subscribe(
      success => console.log("Done"),
      error => console.log(error)
    );
    console.log("deleteedId", id);
  }

  submit() {
    this.submitted = true;
    let obj =
      [
        {
          inputBy: this.commentForm.value.inputBy,
          inputFor: this.commentForm.value.inputFor,
          people: this.commentForm.value.people,
          peopleRating: this.peopleRate,
          peopleComment: this.commentForm.value.peopleComment,
          quality: this.commentForm.value.quality,
          qualityRating: this.qualityRate,
          qualityComment: this.commentForm.value.qualityComment,
          velocity: this.commentForm.value.velocity,
          velocityRating: this.velocityRate,
          velocityComment: this.commentForm.value.velocityComment,
          cost: this.commentForm.value.cost,
          costRating: this.costRate,
          costComment: this.commentForm.value.costComment,
        }
      ]
    let data = {
      "_id": this.projectItem._id,
      "addRating": obj
    }

    console.log("obj", obj)
    this.routing.createProductData(data).subscribe(data => {
      console.log("data", data);
      this.createData = data;
      console.log("this.createData", this.createData)
      this.routing.getProjectDetailsById(this.projectItem._id).subscribe(alldata => {
        console.log("alldata from get api", alldata);
        var ratingData = alldata['data'];
        this.addingArray = [];
        this.addingRatingArray = [];
        for (var i = 0; i < ratingData.addRating.length; i++) {

          let add = (ratingData.addRating[i].people + ratingData.addRating[i].quality + ratingData.addRating[i].velocity + ratingData.addRating[i].cost) / 4
          let addmultipleRating = (ratingData.addRating[i].peopleRating + ratingData.addRating[i].qualityRating + ratingData.addRating[i].velocityRating + ratingData.addRating[i].costRating) / 4
          this.addingArray.push(add);
          this.addingRatingArray.push(addmultipleRating);
        }
        var multipledata;
        var multipledataRating;
        if (this.addingArray.length == 1) {
          multipledata = this.addingArray[0];
          multipledataRating = this.addingRatingArray[0];
        } else {
          multipledata = this.addingArray.reduce(function (a, b) {
            return a + b;
          }, 0);
          multipledataRating = this.addingRatingArray.reduce(function (a, b) {
            return a + b;
          }, 0);
        }
        var weitage = (multipledata / this.addingArray.length).toFixed();
        var rating = (multipledataRating / this.addingRatingArray.length).toFixed();

        console.log("num3.toFixed() is ", weitage)
        console.log("num3.toFixed() is ", rating)
        let RatingObj = {
          "_id": this.projectItem._id,
          weightage: weitage,
          rating: rating
        }
        this.routing.updatingProject(RatingObj).subscribe(update => {
          console.log("update", update);
          this.commentForm.reset();
          this.getProductDetails();
        })
      });
    });

    // console.log("this.commentDataArray1",this.commentDataArray1);
    this.commentedData = true;
    sessionStorage.setItem("commentData", JSON.stringify(this.commentDataArray1));
    let newArray = sessionStorage.getItem("commentData");
    // localStorage.setItem("this.tsetDataArray",this.tsetDataArray);
    // console.log("this.commentForm object from newArray",JSON.parse(newArray));
    // console.log("this.tsetDataArray",this.tsetDataArray);
  }

}
