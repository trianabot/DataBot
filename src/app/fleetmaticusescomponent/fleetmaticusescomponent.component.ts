import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { DatabotService } from './../core/databot.service';
import { OnDestroy, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { Chain, analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Router, ActivatedRoute } from '@angular/router';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import * as moment from 'moment';
declare const google: any;

@Component({
  selector: 'app-fleetmaticusescomponent',
  templateUrl: './fleetmaticusescomponent.component.html',
  styleUrls: ['./fleetmaticusescomponent.component.css']
})
export class FleetmaticusescomponentComponent implements OnInit {

  selected: any;
  fleetOverview = true;
  driverProfile: any;
  trackOrder: any;
  custFeed: any;
  tenantOverview: boolean;
  Overview: boolean;
  options: any;
  harshevents: any;
  hourschart: any;
  speedingchart: any;
  mileschart: any;
  mapdata: any;
  weekAcceleration: number;
  weekBraking: number;
  todayAcceleration: number;
  todayBraking: number;
  lastDayAcceleration: number;
  lastDayBraking: number;
  todayIdling: number;
  lastDayIdling: number;
  weekIdling: number;
  drivername: any;
  imei: any;
  stoptime: number;
  idlingtime: any;
  trips: any;
  drivetime: number;

  map: any;
  distance: void;

  constructor(public databotService: DatabotService, private router: Router) {
    if (localStorage.getItem('username') == 'melrosepark' || localStorage.getItem('username') == 'Melrosepark') {
      this.tenantOverview = true;
      this.Overview = false;
    } else {
      this.tenantOverview = false;
      this.Overview = true;
    }
  }

  ngOnInit() {
    this.selected = 1;
    this.loadmapdata();
    this.getIdlingAllDevices();
    this.gettripevent();

  }

  setfleetOverview(item: any) {
    this.fleetOverview = true;
    this.driverProfile = false;
    this.trackOrder = false;
    this.custFeed = false;
    this.selected = item;
  }

  setDriver(item: any) {
    this.fleetOverview = false;
    this.driverProfile = true;
    this.trackOrder = false;
    this.custFeed = false;
    this.selected = item;
  }

  setvehicleMetric(item: any) {
    this.fleetOverview = false;
    this.driverProfile = false;
    this.trackOrder = true;
    this.custFeed = false;
    this.selected = item;
  }


  setcustomerFeed(item: any) {
    this.fleetOverview = false;
    this.driverProfile = false;
    this.trackOrder = false;
    this.custFeed = true;
    this.selected = item;
  }


  isActive(item: any) {
    return this.selected === item;
  }
  loadmapdata() {
    var body = {
      "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getCurrentPostition(body).subscribe(res => {
      var data = res['data']['positions'];
      var mapdata = data;
      this.mapdata = data;
      console.log(this.mapdata);
      this.loadmap(mapdata);
    });
  }

  getIdlingAllDevices(){
    // console.log(moment().subtract(1, 'days').toString()+ "hello ");
    var today = Date.now();
    var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 6;   // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
    var yest = new Date(yesterday);
    // console.log(yest+""+yesterday);​
    let body = {
      "username":"info@dataagile.com",
      "password":"conquest",
      "fromDate":yesterday, 
      "toDate":today
    }
    this.databotService.getVehicleStops(body).subscribe(res => {
      var stops = res['data']['stops'];
      this.getIdlingEvents(stops);
    });
  }

  vehicleDDChange(event) {
     console.log(event.currentTarget.value);
     this.imei = event.currentTarget.value;
     this.getDeviceEvents(this.imei);
  }

  

  getDeviceEvents(number){
    // console.log(moment(1564337311686).format('MMM DD, YYYY') == moment(1564165457000).format('MMM DD, YYYY'));
    var today = Date.now();
    var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 2;   // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
    console.log(today, yesterday);
    var yest = new Date(yesterday);
    // console.log(yest+""+yesterday);​
    let body = {
      "username":"info@dataagile.com",
      "password":"conquest",
      "imei":number,
      "fromDate": yesterday,
      "toDate":today
    }
    this.databotService.getVehicleHistory(body).subscribe(result => {
      console.log(result);
      var positions  = result['data']['positions'];
      var stops = result['data']['stops'];
      this.drivername = result['data']['positions'][0]['personName'];
      this.getBrakingIdlingEvents(positions);
      this.getIdlingEvents(stops);
      this.getTotalDriveTime(this.trips);
    });
  }


  
  getBrakingIdlingEvents(positions){
    console.log(positions);
    this.weekAcceleration = 0;
    this.weekBraking = 0;
    this.todayAcceleration = 0;
    this.todayBraking = 0;
    this.lastDayAcceleration = 0;
    this.lastDayBraking = 0;
    // tslint:disable-next-line: forin
    for(var item in positions){
       let today = moment(Date.now()).format('MMM DD, YYYY');
       let todayfromdata = moment(positions[item]['date']).format('MMM DD, YYYY');
       var dateString = moment().subtract(1, 'days').toString();
       var dateObj = new Date(dateString);
       var momentObj = moment(dateObj);
       var momentString = momentObj.format('MMM DD, YYYY');
      //  console.log(momentString);
      //  if(positions[item]['behaviorCd'] == 'HAC'){
      //    this.weekAcceleration = this.weekAcceleration + 1;
      //  }else if(positions[item]['behaviorCd'] == 'HBR'){
      //    this.weekBraking = this.weekBraking + 1;
      //  }
        if(positions[item]['behaviorCd'] == 'HAC' && (today == todayfromdata)){
        this.todayAcceleration = this.todayAcceleration + 1;
       }else if (positions[item]['behaviorCd'] == 'HBR' && (today == todayfromdata)){
        this.todayBraking = this.todayBraking + 1;
       }
      // else if(positions[item]['behaviorCd'] == 'HAC' && (momentString == todayfromdata)){
      //   this.lastDayAcceleration = this.lastDayAcceleration + 1;
      //  }else if (positions[item]['behaviorCd'] == 'HBR' && (momentString == todayfromdata)){
      //   this.lastDayBraking = this.lastDayBraking + 1;
      //  }
    }
    // console.log(this.weekAcceleration+"this is"+this.weekBraking);
}


/**Get engine idling events */
getIdlingEvents(stops) {
    // console.log(stops);
    this.todayIdling = 0;
    this.lastDayIdling = 0;
    this.weekIdling = 0;
    this.stoptime = 0
    this.idlingtime = 0;
    // tslint:disable-next-line: forin
    for(var item in stops){
      let today = moment(Date.now()).format('MMM DD, YYYY');
      let todayfromdata = moment(stops[item]['beginDate']).format('MMM DD, YYYY');
      let endfromdate = moment(stops[item]['endDate']).format('MMM DD, YYYY');
      var dateString = moment().subtract(1, 'days').toString();
      var dateObj = new Date(dateString);
      var momentObj = moment(dateObj);
      var momentString = momentObj.format('MMM DD, YYYY');
      console.log(today == todayfromdata);
      // if(stops[item]['stopType'] == 'Idling'){
      //   this.weekIdling = this.weekIdling + 1;
      // }
      // else if(stops[item]['stopType'] == 'Idling' && (today == todayfromdata) && (today == endfromdate)){
      //  this.todayIdling = this.todayIdling + 1;
      // }else if(stops[item]['stopType'] == 'Idling' && (momentString == todayfromdata) && (momentString == endfromdate)){
      //   this.lastDayIdling = this.lastDayIdling + 1;
      //  }
      if((stops[item]['stopType'] == 'Engine Off') && (today == todayfromdata)) {
             this.stoptime = this.stoptime + stops[item]['duration'];
             console.log(this.stoptime);
      }
      if((stops[item]['stopType'] == 'Idling') && (today == todayfromdata)) {
        this.idlingtime = this.idlingtime + stops[item]['duration'];
        console.log(this.idlingtime);
      }
   }
} 

gettripevent() {
  var today = Date.now();
    var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 2;
  let body = {
    "username":"info@dataagile.com",
    "password":"conquest",
    "fromDate": yesterday,
    "toDate":today
  }
  this.databotService.getVehicleTrips(body).subscribe(result => {
     console.log(result);
     this.trips = result['data']['trips'];
     this.getTotalDriveTime(this.trips);
  });
}

getTotalDriveTime(trips) {
    this.drivetime = 0
    for(let item of trips) {
      this.drivetime = this.drivetime + item['durationMinutes'];
      this.distance = this.distance = item['distanceMiles'];
      console.log(this.drivetime);
    }
}


loadmap(mapdata){
  //console.log(mapdata);
var $this = this;
let payload: {queryParams: {vehicle: string, drivername: string}};
this.map = new google.maps.Map(document.getElementById('map'), {
zoom: 8,
center: new google.maps.LatLng(mapdata[0]['latitude'], mapdata[0]['longitude']),
mapTypeId: google.maps.MapTypeId.ROADMAP,
mapTypeControl: false,
streetViewControl: false
});

var infowindow = new google.maps.InfoWindow();
var marker;
var i;
var image = {
url: '../../assets/images/warehouse.png',
scaledSize: new google.maps.Size(50, 50),
};

for (i = 0; i < mapdata.length; i++) {
marker = new google.maps.Marker({
  position: new google.maps.LatLng(mapdata[i]['latitude'], mapdata[i]['longitude']),
  map: this.map,
  icon:image
});
attachSecretMessage(marker,  mapdata[i]['latitude'], mapdata[i]['longitude'], mapdata[i]['label'], mapdata[i]['deviceNbr'], mapdata[i]['personName']);
}

function attachSecretMessage(marker, lat, long, label, devicenumber, drivername) {
var geocoder = new google.maps.Geocoder();
marker.addListener('click', function () {
  var latlong1 = new google.maps.LatLng(lat, long);
  geocoder.geocode({ 'location': latlong1 }, function (res, status) {
    if (status == 'OK') {

      var currentLocation = res[0].address_components[2].long_name;
      // $this.city = currentLocation;
      // $this.state = res[0].address_components[4].long_name;
      // $this.country = res[0].address_components[5].long_name;

      // $this.esttime = est;
      infowindow = new google.maps.InfoWindow({
        content: '<b><p style="color:blue;text-weight:bold">' + currentLocation + '</p></b>'
        +'<b><p style="color:blue;text-weight:bold">' + label + '</p></b>'

      });

      $this.getDeviceEvents(devicenumber);
      payload = {
        queryParams: {
            vehicle: JSON.stringify(devicenumber),
            drivername: JSON.stringify(drivername)
        }
    };
      $this.router.navigate(['/fleetmatics'], payload);
      // alert(this.warehousename)
      infowindow.open(this.map, marker);

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
    marker.addListener('mouseout', function() {
      infowindow.close(marker.get('map'), marker);
    });
  });
});
}


}

}
