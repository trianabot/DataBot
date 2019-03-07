import { Component, OnInit, EventEmitter, Output } from '@angular/core';
declare function require(path: string);
import { Router } from '@angular/router';
import { DatabotService } from '../core/databot.service';



@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {
  someProperty = false;
  show: boolean = false;
  showHealth: boolean = false
  showManufacturing: boolean = false;
  showTextile: boolean = false;
  showEnergy: boolean = false;
  usecase: boolean = false;
  health: boolean = false;
  showpsephology: boolean = false;
  UseCaseTypeValue: number = 0;
  showreport: boolean = false;
  userId: any;
  showEng: boolean = false;
  userloginid: any;
  usecasejsonData: any;
  organizationCategories: any = [];

  userRole: any;
  manufacturing = false;
  transportation = false;
  finance = false;
  humanresource = false;
  healthcare = false;
  energy = false;
  noindustry = true;
  industryType:any;

  manufacturingusecase = [];
  transportationusecase = [];
  financeusecase = [];
  hrusecase = [];
  healthcareusecase = [];
  energyusecase = [];
  usecases = [];
  superadmin: boolean =false;

  userName :any;

  constructor(private router: Router, public databotservice: DatabotService) {
    this.userloginid = localStorage.getItem('userId');
    this.userRole = localStorage.getItem('userRole');
   
    console.log(this.userloginid);

   
  }

  ngOnInit() {
    if(localStorage.getItem('userRole') == "superadmin"){
      this.superadmin =true
      this.noindustry = false;
    }else{
      this.superadmin = false;
    }

    let userData = {
      role: localStorage.getItem('userRole'),
      userid: localStorage.getItem('userId')
    }

    this.databotservice.getUserDetails(userData).subscribe(data => {
      let userdata = data;
      let industries = userdata['user_data']['industries'];
      let industriesusecase = userdata['user_data']['industriesUsecase'];

      console.log(industries);
      this.displayIndustries(industries);
      this.displayIndustriesusecase(industriesusecase);
    }, (err) => {
      console.log(JSON.stringify(err) + "this is error");
    })

  }


  displayIndustries(industries) {
    var index: any
    for (index in industries) {
      switch (industries[index]) {
        case 'Manufacturing':
          this.manufacturing = true;
          this.noindustry = false;
          break;
        case 'Transportation':
          this.transportation = true;
          this.noindustry = false;
          break;
        case 'Finance':
          this.finance = true;
          this.noindustry = false;
          break;
        case 'Human Resources':
          this.humanresource = true;
          this.noindustry = false;
          break;
        case 'Health Care':
          this.healthcare = true;
          this.noindustry = false;
          break;
        case 'Energy':
          this.energy = true;
          this.noindustry = false;
          break;
      }
    }
  }

  displayIndustriesusecase(industiesusecase){
    var index:any;
    for(index in industiesusecase){
      switch (industiesusecase[index]['industryName']) {
        case 'Manufacturing':
          this.manufacturingusecase = industiesusecase[index]['industriesUsecase'];
          break;
        case 'Transportation':
          this.transportationusecase =industiesusecase[index]['industriesUsecase'];
          break;
        case 'Finance':
          this.financeusecase = industiesusecase[index]['industriesUsecase'];
          break;
        case 'Human Resources':
          this.hrusecase = industiesusecase[index]['industriesUsecase'];
          break;
        case 'Health Care':
          this.healthcareusecase = industiesusecase[index]['industriesUsecase'];
          break;
        case 'Energy':
          this.energyusecase = industiesusecase[index]['industriesUsecase'];
          break;
      }
    }
  }

  loaduseCase() {
    this.databotservice.loadUseCase().subscribe(data => {
      this.usecasejsonData = data;
      var index: any;
      for (index in this.usecasejsonData) {
        if (this.organizationCategories.indexOf(this.usecasejsonData[index].Industry) < 0) {
          this.organizationCategories.push(this.usecasejsonData[index].Industry);
        }
      }
    });
  }
  // @Output() emitShowUseCase = new EventEmitter();

  showUseCase(useCaseType) {

    this.UseCaseTypeValue = useCaseType;
    if (useCaseType == 1) {
      this.show = true
      this.showHealth = false
      this.showManufacturing = false
      this.showTextile = false;
      this.showEnergy = false;
      this.showpsephology = false;
      this.showEng = false;
      this.usecase = true;
      this.industryType = 'Transportation';
      this.usecases = this.transportationusecase;

    }
    else if (useCaseType == 2) {

      this.showHealth = true
      this.show = false
      this.showManufacturing = false;
      this.showTextile = false;
      this.showEnergy = false;
      this.showpsephology = false;
      this.showEng = false;
      this.usecase = true;
      this.industryType = 'Finance';
      this.usecases = this.financeusecase;

    }
    else if (useCaseType == 3) {
      this.showManufacturing = true
      this.show = false
      this.showHealth = false;
      this.showTextile = false;
      this.showEnergy = false;
      this.showpsephology = false;
      this.showEng = false;
      this.usecase = true;
      this.industryType = 'Manufacturing';
      this.usecases = this.manufacturingusecase;
    }

    else if (useCaseType == 4) {
      this.showTextile = true
      this.show = false
      this.showHealth = false;
      this.showEnergy = false;
      this.showManufacturing = false;
      this.showpsephology = false;
      this.showEng = false;
      this.usecase = true;
      this.industryType = 'Human Resources';
      this.usecases = this.hrusecase;

    }

    else if (useCaseType == 5) {
      this.showEnergy = true;
      this.show = false
      this.showHealth = false;
      this.showManufacturing = false;
      this.showTextile = false;
      this.showpsephology = false;
      this.showEng = false;
      this.usecase = true;
      this.industryType = 'Health Care';
      this.usecases = this.healthcareusecase;
    }


    else if (useCaseType == 7) {
      this.showEng = true;
      this.showpsephology = false;
      this.showEnergy = false;
      this.show = false
      this.showHealth = false;
      this.showManufacturing = false;
      this.showTextile = false;
      this.usecase = true;
      this.industryType = 'Energy';
      this.usecases = this.energyusecase;

    }




    // alert(useCaseType);
    // this.emitShowUseCase.emit(useCaseType);

  }
  //   redirect() {
  //     //this.selected ===itemindex;
  //    this.router.navigate(['./usecase']);
  //    // this.someProperty = true
  //   //  this.usecase = true;
  //    this.health = false;
  //    this.show = true
  //    this.showHealth = false
  //    this.showManufacturing = false
  //    this.showTextile = false;
  //    this.showEnergy = false

  //   }
  //   redirectHealth() {
  //    this.router.navigate(['./health']);
  //   // this.someProperty = true
  //   // this.usecase = false
  //   // this.health = true;
  //  this.showHealth = true
  //  this.show = false
  //  this.showManufacturing = false;
  //  this.showTextile = false;
  //  this.showEnergy = false;
  //  }

  //  redirectHealthleave() {
  //    this.router.navigate(['./health']);
  //  // this.someProperty = true
  //  this.showHealth = false
  //  this.show = false;
  //  this.showManufacturing = false;
  //  this.showTextile = false;
  //  this.showEnergy = false;
  //  }


  //  redirectManufacturing() {
  //    this.router.navigate(['./manufacturing']);
  //  // this.someProperty = true
  //  this.showManufacturing = true
  //  this.show = false
  //  this.showHealth = false;
  //  this.showTextile = false;
  //  this.showEnergy = false;

  //  }

  //  redirectTextile() {
  //    this.router.navigate(['./textile']);
  //  // this.someProperty = true
  //  this.showTextile = true
  //  this.show = false
  //  this.showHealth = false;
  //  this.showEnergy = false;
  //  this.showManufacturing = false;

  //  }

  //  redirectEnergy() {
  //    this.router.navigate(['./energy']);
  //  // this.someProperty = true
  //  this.showEnergy = true;
  //  this.show = false
  //  this.showHealth = false;
  //  this.showManufacturing = false;
  //  this.showTextile = false;

  //  }


}
