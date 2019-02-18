import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase',
  templateUrl: './usecase.component.html',
  styleUrls: ['./usecase.component.css']
})
export class UsecaseComponent implements OnInit, OnChanges, OnDestroy {
  // showChild=false;
  @Input('UseCaseType') UseCaseType: number=0;
   showfleetManagment:boolean= false;
   fleetMaintaince :boolean = false;
   vehiclerouteTracking:boolean = false;
   showmanufacturing:boolean=false;
   showVechile :boolean =false;
  reportusecase :boolean = false;
  reportUseCaseTypeValue:number=0;
  showReport :boolean =false;
  showAssembly:boolean =false;
  showHrms:boolean=false;
  showEng:boolean =false;
  showHealth:boolean =false;
  showProduction:boolean=false;
  constructor(private router : Router) {

  }

  ngOnInit() {

  }
 ngOnChanges() {
  console.log("Destroy");
  this.showfleetManagment= false;
  this.fleetMaintaince  = false;
  this.vehiclerouteTracking = false;
  this.showmanufacturing=false;
  this.showVechile  =false;
  this.reportUseCaseTypeValue=0;
  this.showReport  =false;
  this.showAssembly =false;
  this.showHrms=false;
  this.showEng =false;
  this.showHealth =false;
  this.showProduction =false;

}
ngOnDestroy() {
console.log("Destroy");
}
  redirect(useCaseType){
    this.reportusecase=true;
    this.reportUseCaseTypeValue=useCaseType;
    if(useCaseType ==1)
    {
      this.showfleetManagment = true;
        this.fleetMaintaince = false;
         this.showVechile = false
         this.showAssembly = false;
         this. showEng = false;
         this.showProduction =false;
       // this.reportusecase=true;

    }
    else if(useCaseType ==2){
     //   this.showVechile = true;
        this.fleetMaintaince = true;
        this.showfleetManagment = false
        this.showAssembly = false;
        this. showEng = false;
        this.showProduction =false;

  }
    else if(useCaseType ==3){
      //   this.showVechile = true;
      this.showmanufacturing = true;
        this.fleetMaintaince = false;
        this.showfleetManagment = false
        this.showAssembly = false;
        this. showEng = false;
        this.showHrms = false;
        this.showProduction =false;

     }
    else if(useCaseType ==4){
      this.showHrms = true;
      this.showmanufacturing = false;
        this.fleetMaintaince = false;
        this.showfleetManagment = false
        this.showAssembly = false;
        this. showEng = false;
        this.showProduction =false;
    }


    else if(useCaseType ==6){
    //   this.showVechile = true;
    this.showAssembly = true;
     this.showmanufacturing = true;
    this.fleetMaintaince = false;
    this.showfleetManagment = false
    this. showEng = false;
    this.showHrms=false;
    this.showProduction =false;
    }

    else if(useCaseType ==7){
      //   this.showVechile = true;
      this. showEng =true;
      this.showAssembly = true;
      this.showmanufacturing = true;
      this.fleetMaintaince = false;
      this.showfleetManagment = false
      this.showHrms=false;
      this.showProduction =false;

    }

    else if(useCaseType ==8){
      this.showProduction = true;
      this. showEng =false;
      this.showAssembly = false;
      this.showmanufacturing =false;
      this.fleetMaintaince = false;
      this.showfleetManagment = false
      this.showHrms=false;

    }
  }

}
