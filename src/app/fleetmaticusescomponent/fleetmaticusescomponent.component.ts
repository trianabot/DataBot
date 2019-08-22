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
export class FleetmaticusescomponentComponent implements OnInit, OnDestroy {

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
  distance: number;
  harshbraking: number;
  highspeed: number;
  rapidacceleration: number;
  fromdate: Date;
  todate: Date
  searchtodata: number;
  searchfromdata: number;
  initInterval: any;
  searchInterval: any;

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
    this.initInterval = setInterval(() => {
      this.searchtodata = Date.now();
      this.searchfromdata = Date.now() - 1000 * 60 * 60 * 24 * 2;
      this.getIdlingAllDevices();
      this.gettripevent();
      this.getAlerts();
     },5000);

  }

  ngOnDestroy() {
    clearInterval(this.searchInterval);
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
      "fromDate":this.searchfromdata, 
      "toDate":this.searchtodata
    }
    this.databotService.getVehicleStops(body).subscribe(res => {
      var stops = res['data']['stops'];
      this.getIdlingEvents(stops);
    });
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
      if((stops[item]['stopType'] == 'Engine Off') && (today == todayfromdata)) {
             this.stoptime = this.stoptime + stops[item]['duration'];
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
    "fromDate": this.searchfromdata,
    "toDate":this.searchtodata
  }
  this.databotService.getVehicleTrips(body).subscribe(result => {
     this.trips = result['data']['trips'];
     this.getTotalDriveTime(this.trips);
  });
}

getTotalDriveTime(trips) {
    this.drivetime = 0;
    this.distance = 0;
    for(let item of trips) {
      this.drivetime = this.drivetime + item['durationMinutes'];
      this.distance = this.distance = item['distanceMiles'];
      // console.log(this.drivetime);
    }
}


loadmap(mapdata){
  //console.log(mapdata);
var $this = this;
let payload: {queryParams: {vehicle: string, drivername: string, location: string}};
this.map = new google.maps.Map(document.getElementById('map'), {
zoom: 11,
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
marker.addListener('mouseover', function () {
  var latlong1 = new google.maps.LatLng(lat, long);
  geocoder.geocode({ 'location': latlong1 }, function (res, status) {
    if (status == 'OK') {

      var currentLocation = res[0].address_components[2].long_name;
      // $this.city = currentLocation;
      // $this.state = res[0].address_components[4].long_name;
      // $this.country = res[0].address_components[5].long_name;

      // $this.esttime = est;
      infowindow = new google.maps.InfoWindow({
        content: '<b><p style="color:#0472b0;text-weight:bold">' + 'Current Location:' + currentLocation + '</p></b>'
        +'<b><p style="color:#0472b0;text-weight:bold">' + 'Driver Name:' + label + '</p></b>'

      });

      // $this.getDeviceEvents(devicenumber);
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
        content: '<b><p style="color:#0472b0;text-weight:bold">' + currentLocation + '</p></b>'
        +'<b><p style="color:#0472b0;text-weight:bold">' + label + '</p></b>'

      });

      // $this.getDeviceEvents(devicenumber);
      payload = {
        queryParams: {
            vehicle: JSON.stringify(devicenumber),
            drivername: JSON.stringify(drivername),
            location: JSON.stringify(currentLocation)
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

getParams() {
  var today = this.searchtodata;
  var yesterday = this.searchfromdata;
  let body = {
    "username":"info@dataagile.com",
    "password":"conquest",
    "fromDate": this.searchfromdata,
    "toDate":this.searchtodata
  };
  return body;
}

getAlerts() {
  this.harshbraking = 0;
  this.highspeed = 0;
  this.databotService.getVehicleAlerts(this.getParams()).subscribe(data => {
    for(let item of data['data']['alerts']) {
      // console.log(item['alertCode']);
      if(item['alertCode'] == 'HARSH_BRAKING') {
         this.harshbraking = this.harshbraking + 1;
         console.log(this.harshbraking);
      }
      if(item['alertCode'] == 'HIGH_SPEED') {
        this.highspeed = this.highspeed + 1;
        // console.log(this.harshbraking);
     }
     if(item['alertCode'] == 'RAPID_ACCELERATION') {
      this.rapidacceleration = this.rapidacceleration + 1;
      // console.log(this.rapidacceleration);
   }
    }
  });
}

searching() {
  this.searchtodata = new Date(this.todate).getTime()*1000;
  this.searchfromdata = new Date(this.fromdate).getTime()*1000;
}

searchingBydate() {
  clearInterval(this.initInterval);
  this.searchtodata = new Date(this.todate).getTime();
  this.searchfromdata = new Date(this.fromdate).getTime();
  this.searchInterval = setInterval(() => {
  this.getAlerts();
  this.getIdlingAllDevices();
  this.gettripevent();
   },5000);
}

}
