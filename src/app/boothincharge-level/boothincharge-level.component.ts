import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boothincharge-level',
  templateUrl: './boothincharge-level.component.html',
  styleUrls: ['./boothincharge-level.component.css']
})
export class BoothinchargeLevelComponent implements OnInit {
  boothjsondata :any;
  district:any =[];
  assembly:any =[];
  districtname:any;
  assemblyname:any;
  

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/data/boothincharge.json').subscribe(data => {
      this.boothjsondata = data;
       var index: any;
      for (index in this.boothjsondata) {
          if (this.district.indexOf(this.boothjsondata[index].District) < 0) {
              this.district.push(this.boothjsondata[index].District);
          }

      }
      
    });

  }

  changeDistrict(district){
    this.assembly =[];
      this.districtname = district.currentTarget.value;
    var index: any;
        for (index in this.boothjsondata) {
            if (this.boothjsondata[index].District === this.districtname) {
                  if (this.assembly.indexOf(this.boothjsondata[index].Assembly) < 0) {

                  this.assembly.push(this.boothjsondata[index].Assembly);
                }
            }
        }
    
  }

  changeAssembly(assembly){
    this.assemblyname = assembly.currentTarget.value


  }



}
