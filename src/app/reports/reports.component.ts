import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  
  constructor(private router : Router) { }
  @Input('ReportUseCaseType') ReportUseCaseType: number=0;
   
 

  ngOnInit() {
  }
  ngOnChanges() {

  }
  

redirectDashboard(){
this.router.navigate(['./dashboard']);
localStorage.setItem('title',"Fleet Route");

 
}

redirectInventory(){
this.router.navigate(['./inventory']);
localStorage.setItem('title',"Inventory");
}

redirectInventortMap(){
this.router.navigate(['./inventormap']);
localStorage.setItem('title',"inventorymap");
}

redirectwarehouseoverview(){
  this.router.navigate(['./warehouseoverview'])
  }

  redirectstocktracking(){
   this.router.navigate(['./stocktracking'])
  }
  redirectdriveroverview()
  {
    this.router.navigate(['./driver-overview']);
    localStorage.setItem('title',"Driver Profile");
   }
  redirectvehicleMetrics()
  {
    this.router.navigate(['./vehicle-metric']);
    localStorage.setItem('title',"Vehicle Live Metric");
   }
   customerFeedbackAnalysis(){
    this.router.navigate(['./customer-feedback']);
    localStorage.setItem('title',"Customer Feedback Analysis");
   }


}
