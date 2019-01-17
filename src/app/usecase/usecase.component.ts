import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase',
  templateUrl: './usecase.component.html',
  styleUrls: ['./usecase.component.css']
})
export class UsecaseComponent implements OnInit, OnChanges {
  // showChild=false;
   showfleetManagment:boolean= false;
   fleetMaintaince :boolean = false;
   vehiclerouteTracking:boolean = false;
   showmanufacturing:boolean=false;
   showVechile :boolean =false;
  reportusecase :boolean;
  reportUseCaseTypeValue:number=0;
  showReport :boolean =false;
  constructor(private router : Router) {

  }

   @Input('UseCaseType') UseCaseType: number=0;


  ngOnInit() {
   
  }
 ngOnChanges() {
     
}
  redirect(useCaseType){
    this.reportusecase=true;
    this.reportUseCaseTypeValue=useCaseType;
    if(useCaseType ==1)
    {
      this.showfleetManagment = true
        this.fleetMaintaince = false;
         this.showVechile = false
       // this.reportusecase=true;

    }
    else if(useCaseType ==2){

      //   this.showVechile = true;
        this.fleetMaintaince = true;
        this.showfleetManagment = false
      

    }
    else if(useCaseType ==3){

      //   this.showVechile = true;
      this.showmanufacturing = true;
        this.fleetMaintaince = false;
        this.showfleetManagment = false
      

    }




    // alert(useCaseType);
   // this.emitShowUseCase.emit(useCaseType);

  }
// click: any =0

  // redirect() {
  //   // this.router.navigate(['/',{outlets: {reports: ['reports']}}]);
  //   this.showChild = true;
  //   this.showfleetManagment = true
  //   this.fleetMaintaince = false;
  //   this.showVechile = false

  // // alert(JSON.stringify(this.router))

  // }


  // redirectfleetMaintaince() {
  //   this.showChild = false;
  //   this.showVechile = true;
  //   this.fleetMaintaince = true;
  //   this.showfleetManagment = false

  // }

}
