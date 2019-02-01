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
}

redirectInventory(){
this.router.navigate(['./inventory']);
}

redirectInventortMap(){
this.router.navigate(['./inventormap'])
}

redirectwarehouseoverview(){
  this.router.navigate(['./warehouseoverview'])
  }

  redirectstocktracking(){
   this.router.navigate(['./stocktracking'])
  }
  redirectdriveroverview()
  {
    this.router.navigate(['./driver-overview'])
   }
  redirectvehicleMetrics()
  {
    this.router.navigate(['./vehicle-metric'])
   }
   customerFeedbackAnalysis(){
    this.router.navigate(['./customer-feedback'])
   }


}
