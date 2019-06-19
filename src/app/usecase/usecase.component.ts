import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router, OutletContext } from '@angular/router';

@Component({
  selector: 'app-usecase',
  templateUrl: './usecase.component.html',
  styleUrls: ['./usecase.component.css']
})
export class UsecaseComponent implements OnInit, OnChanges, OnDestroy {
  // showChild=false;
  @Input('UseCaseType') UseCaseType: number = 0;
  @Output() open: EventEmitter<any> = new EventEmitter();
  showfleetManagment: boolean = false;
  fleetMaintaince: boolean = false;
  vehiclerouteTracking: boolean = false;
  showmanufacturing: boolean = false;
  showVechile: boolean = false;
  reportusecase: boolean = false;
  reportUseCaseTypeValue: any = 0;
  showReport: boolean = false;
  showAssembly: boolean = false;
  showHrms: boolean = false;
  showEng: boolean = false;
  showHealth: boolean = false;
  showProduction: boolean = false;
  showHealthAnalysis: boolean = false;
  showmatics: boolean = false;
  constructor(private router: Router) {

  }

  ngOnInit() {
    //var reportusecase = sessionStorage.getItem('reportusecase')
    var reportusecase = localStorage.getItem('reportusecase');
    //console.log("Usecase", reportusecase);
    this.redirect(reportusecase);
  }
  ngOnChanges() {
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
    this.showmatics = false;
  }
  ngOnDestroy() {
    //console.log("Destroy");
  }
  redirect(useCaseType) {
    this.reportusecase = true;
    this.reportUseCaseTypeValue = useCaseType;
    // console.log("Report Use Case",this.reportUseCaseTypeValue);
    //sessionStorage.setItem('reportusecase', this.reportUseCaseTypeValue)
    localStorage.setItem('reportusecase', this.reportUseCaseTypeValue);
    
    if (useCaseType == 1) {
      this.router.navigate(['/telematicsusecase']);
    }
    else if (useCaseType == 2) {
      this.router.navigate(['/reportusecase']);
    }
    else if (useCaseType == 3) {
      this.router.navigate(['/productionusecase']);
    }
    else if (useCaseType == 4) {
      this.router.navigate(['/humancapital']);
    }

    else if (useCaseType == 5) {
      this.router.navigate(['/healthusecase']);
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

      this.router.navigate(['/supplyusercase']);
    } else if (useCaseType == 9){

        this.router.navigate(['/fleetmatic']);
    }
    //console.log(useCaseType);
  }
  getPrevious() {
    this.open.emit(this.UseCaseType);
  }

  onOpen(event) {
    this.reportusecase = false;
  }
} 
