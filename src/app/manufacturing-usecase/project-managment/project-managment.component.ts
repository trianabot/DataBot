import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-project-managment',
  templateUrl: './project-managment.component.html',
  styleUrls: ['./project-managment.component.css']
})
export class ProjectManagmentComponent implements OnInit, OnDestroy {

  constructor(public route: ActivatedRoute) {
    var heading = this.route.snapshot.queryParamMap.get("title");
    if(heading == null || heading == ""){
      localStorage.setItem('title',"Project Managment");
    }else{
      localStorage.setItem("title",heading);
    }
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    localStorage.removeItem("title");
  }

}

