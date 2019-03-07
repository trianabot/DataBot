import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DatabotService } from '../core/databot.service';

@Component({
  selector: 'app-usecase',
  templateUrl: './usecase.component.html',
  styleUrls: ['./usecase.component.css']
})
export class UsecaseComponent implements OnInit, OnChanges{
  // showChild=false;
  @Input('UseCaseType') UseCaseType: number = 0;
  @Input() IndustryType;
  @Input() usecaseslist: any[];
  showfleetManagment: boolean = false;
  fleetMaintaince: boolean = false;
  vehiclerouteTracking: boolean = false;
  showmanufacturing: boolean = false;
  showVechile: boolean = false;
  reportusecase: boolean = false;
  reportUseCaseTypeValue: number = 0;
  showReport: boolean = false;
  showAssembly: boolean = false;
  showHrms: boolean = false;
  showEng: boolean = false;
  showHealth: boolean = false;
  showProduction: boolean = false;
  showHealthAnalysis: boolean = false;

  telematics:boolean = false;
  fleettrack :boolean = false;
  reporting : boolean = false;
  forecasting: boolean = false;
  production: boolean = false;
  inventorymanagement: boolean = false;
  performance :boolean = false;
  invforecasting :boolean = false;
  workforce:boolean = false;
  statistics:boolean = false;
  supplies:boolean = false;
  billing:boolean = false;
  consumption:boolean = false;
  management :boolean = false;
  superadmin: boolean =false;
 

  constructor(private router: Router, public databotservice: DatabotService) {

  }

  ngOnInit() {

    if(localStorage.getItem('userRole') == "superadmin"){
      this.superadmin =true
      // this.noindustry = false;
    }else{
      this.superadmin = false;
    }


  
    let userData = {
      role: localStorage.getItem('userRole'),
      userid: localStorage.getItem('userId')
    }
    console.log(userData)


    this.databotservice.getUserDetails(userData).subscribe(data => {
      let userdata = data;
      let industries = userdata['user_data']['industriesUsecase'];
      console.log(industries);
      // this.displayIndustriesusecase(industries);
    }, (err) => {
      console.log(JSON.stringify(err) + "this is error");
    })
  }
  ngOnChanges() {
    console.log(this.IndustryType);
    console.log(this.usecaseslist);
    this.loadUsecases(this.usecaseslist);
    // console.log("Destroy");
    this.showfleetManagment = false;
    this.fleetMaintaince = false;
    this.vehiclerouteTracking = false;
    this.showmanufacturing = false;
    this.showVechile = false;
    this.reportUseCaseTypeValue = 0;
    this.showReport = false;
    this.showAssembly = false;
    this.showHrms = false;
    this.showEng = false;
    this.showHealth = false;
    this.showProduction = false;
    this.showHealthAnalysis = false;


  }

  loadUsecases(usecaseslist){
    var index:any;
    for(index in usecaseslist){
      switch(usecaseslist[index]){
        case 'Production':
         this.production = true;
        break;
        case 'Inventory Management':
         this.inventorymanagement = true;
        break;
        case 'Performance':
         this.performance = true;
        break;
        case 'Inventory Forecasting':
         this.invforecasting = true;
        break;
        case 'Telematics':
         this.telematics = true;
        break;
        case 'Fleet Track':
         this.fleettrack = true;
        break;
        case 'Reporting':
         this.reporting = true;
        break;
        case 'Forecasting':
         this.forecasting = true;
        break;
        case 'Work Force':
         this.workforce = true;
        break;
        case 'Statistics':
         this.statistics = true;
        break;
        case 'Supplies':
         this.supplies = true;
        break;
        case 'Billing':
         this.billing = true;
        break;
        case 'Consumption':
         this.consumption = true;
        break;
        case 'Management':
         this.management = true;
        break;
      }
    }
  }


  
  redirect(useCaseType) {
    this.reportusecase = true;
    this.reportUseCaseTypeValue = useCaseType;
    if (useCaseType == 1) {
      this.showfleetManagment = true;
      this.fleetMaintaince = false;
      this.showVechile = false
      this.showAssembly = false;
      this.showEng = false;
      this.showProduction = false;
      // this.reportusecase=true;

    }
    else if (useCaseType == 2) {
      //   this.showVechile = true;
      this.fleetMaintaince = true;
      this.showfleetManagment = false
      this.showAssembly = false;
      this.showEng = false;
      this.showProduction = false;

    }
    else if (useCaseType == 3) {
      //   this.showVechile = true;
      this.showmanufacturing = true;
      this.fleetMaintaince = false;
      this.showfleetManagment = false
      this.showAssembly = false;
      this.showEng = false;
      this.showHrms = false;
      this.showProduction = false;

    }
    else if (useCaseType == 4) {
      this.showHrms = true;
      this.showmanufacturing = false;
      this.fleetMaintaince = false;
      this.showfleetManagment = false
      this.showAssembly = false;
      this.showEng = false;
      this.showProduction = false;
    }

    else if (useCaseType == 5) {
      this.showHealthAnalysis = true;
      this.showHrms = false;
      this.showmanufacturing = false;
      this.fleetMaintaince = false;
      this.showfleetManagment = false
      this.showAssembly = false;
      this.showEng = false;
      this.showProduction = false;
    }



    else if (useCaseType == 6) {
      //   this.showVechile = true;
      this.showAssembly = true;
      this.showmanufacturing = true;
      this.fleetMaintaince = false;
      this.showfleetManagment = false
      this.showEng = false;
      this.showHrms = false;
      this.showProduction = false;
    }

    else if (useCaseType == 7) {
      //   this.showVechile = true;
      this.showEng = true;
      this.showAssembly = true;
      this.showmanufacturing = true;
      this.fleetMaintaince = false;
      this.showfleetManagment = false
      this.showHrms = false;
      this.showProduction = false;

    }

    else if (useCaseType == 8) {
      this.showProduction = true;
      this.showEng = false;
      this.showAssembly = false;
      this.showmanufacturing = false;
      this.fleetMaintaince = false;
      this.showfleetManagment = false
      this.showHrms = false;

    }
  }

}
