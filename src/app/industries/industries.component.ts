import { Component, OnInit, EventEmitter, Output } from '@angular/core';
declare function require(path: string);
import { Router } from '@angular/router';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {
  someProperty = false;
 show:boolean = false;
 showHealth :boolean=false
 showManufacturing : boolean = false;
 showTextile: boolean = false;
 showEnergy:boolean = false;
 usecase :boolean =false;
 health:boolean = false
 UseCaseTypeValue:number=0;
 showreport:boolean = false;

  constructor(private router : Router) { }

  ngOnInit() {
    // alert(this.UseCaseTypeValue)

  }
 // @Output() emitShowUseCase = new EventEmitter();

  showUseCase(useCaseType){
    this.usecase=true;
    
    this.UseCaseTypeValue=useCaseType;
    if(useCaseType==1){
      this.show = true
   this.showHealth = false
   this.showManufacturing = false
   this.showTextile = false;
   this.showEnergy = false;

 
   
   
    }
    else if(useCaseType ==2){

      this.showHealth = true
     this.show = false
     this.showManufacturing = false;
      this.showTextile = false;
      this.showEnergy = false;
      
      
     
     
     
    }
    else if(useCaseType ==3){
 this.showManufacturing = true
 this.show = false
 this.showHealth = false;
 this.showTextile = false;
 this.showEnergy = false;
 
    }

    else if(useCaseType ==4){
      this.showTextile = true
       this.show = false
       this.showHealth = false;
       this.showEnergy = false;
       this.showManufacturing = false;
         }
         else if(useCaseType ==5){
          this.showEnergy = true;
       this.show = false
       this.showHealth = false;
       this.showManufacturing = false;
      this.showTextile = false;

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
