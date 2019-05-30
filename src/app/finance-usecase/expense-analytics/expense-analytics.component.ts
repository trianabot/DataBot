import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-expense-analytics',
  templateUrl: './expense-analytics.component.html',
  styleUrls: ['./expense-analytics.component.css']
})
export class ExpenseAnalyticsComponent implements OnInit,OnDestroy {

  constructor(public route: ActivatedRoute) {
    var heading = this.route.snapshot.queryParamMap.get("title");
    if(heading == null || heading == ""){
      localStorage.setItem('title',"Expense Analytics");
    }else{
      localStorage.setItem("title",heading);
    }
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    localStorage.removeItem("title");
  }

}
