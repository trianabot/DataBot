import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-health-care-analytics',
  templateUrl: './health-care-analytics.component.html',
  styleUrls: ['./health-care-analytics.component.css']
})
export class HealthCareAnalyticsComponent implements OnInit, OnDestroy {

  constructor(public route: ActivatedRoute) {
    var heading = this.route.snapshot.queryParamMap.get("title");
    if(heading == null || heading == ""){
      localStorage.setItem('title',"Health Care Analytics");
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
