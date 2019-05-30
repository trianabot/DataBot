import { Component, OnInit,Input, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

  constructor(private router : Router) { }
  @Input('ReportUseCaseType') ReportUseCaseType: number=0;



  ngOnInit() {
  }
  ngOnChanges() {

  }
  ngOnDestroy(){

  }


redirectDashboard(){
this.router.navigate(['./dashboard']);
}

redirectInventory(){
this.router.navigate(['./inventory']);
}

redirectInventortMap(){
this.router.navigate(['./inventormap']);
}

redirectwarehouseoverview(){
  this.router.navigate(['./warehouseoverview']);
  }

  redirectstocktracking(){
   this.router.navigate(['./stocktracking']);
  }
  redirectdriveroverview()
  {
    this.router.navigate(['./driver-overview']);
   }
  redirectvehicleMetrics()
  {
    this.router.navigate(['./vehicle-metric']);
  }
  customerFeedbackAnalysis(){
    this.router.navigate(['./customer-feedback']);
 }

 redirectPolticalStatics(){
  this.router.navigate(['./poltical-statics']);
 }

 redirectStateOverview(){
  this.router.navigate(['./state-overview']);
 }

 redirectBoothIncharge(){
  this.router.navigate(['./booth-incharge']);

 }

 redirectForcastAnalysis(){
  this.router.navigate(['./forecast-analysis']);
 }

 redirectHrmsUseCaseOne(){
  this.router.navigate(['./hrms-usecase-1']);
 }

 redirectHrmsUseCaseTwo(){
  this.router.navigate(['./hrms-usecase-2']);
 }

 redirectHrmsUseCaseThree(){
  this.router.navigate(['./hrms-usecase-3']);
 }

 redirectHealthAnalytics(){
  this.router.navigate(['./healthcare-analytics']);
 }

 redirectFinanceExpense(){
  this.router.navigate(['./finance-expense']);
 }

 redirectProductManagment(){
  this.router.navigate(['./project-managment']);
 }

}
