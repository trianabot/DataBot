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
  mapdata: any = [];
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
  initmap: any;
  distance: number;
  harshbraking: number = 0;
  highspeed: number = 0;
  rapidacceleration: number = 0;
  fromdate: any;
  todate: any;
  searchtodate: number;
  searchfromdate: number;
  initInterval: any;
  searchInterval: any;
  today: any;
  inittodate: any;
  initfromdate: any;
  marker: any ;
  drivetimeDaysFormat: any;

  constructor(public databotService: DatabotService, private router: Router) {
    let searchtodate = Date.now();
    let todateStamp = new Date(searchtodate).getTime();
    this.searchtodate = todateStamp;
    this.searchfromdate = Date.now() - 1000 * 60 * 60 * 24 * 1;
    this.loadVehicles(this.searchfromdate, this.searchtodate);
    // console.log(this.searchfromdate, this.searchtodate);
    this.fetchAllData();
    // this.Map();
    // this.loadmapdata();
    // this.loadmap(this.searchfromdate, this.searchtodate);
    if (localStorage.getItem('username') == 'melrosepark' || localStorage.getItem('username') == 'Melrosepark') {
      this.tenantOverview = true;
      this.Overview = false;
    } else {
      this.tenantOverview = false;
      this.Overview = true;
    }
  }

  ngOnInit() {
    this.today = Date.now();
    var timestamp = new Date(this.today).getTime();
    var todate = new Date(timestamp).getDate();
    var tomonth = new Date(timestamp).getMonth() + 1;
    var toyear = new Date(timestamp).getFullYear();
    var original_date = tomonth + '/' + todate + '/' + toyear;
    // console.log(original_date);
    this.todate = original_date;
    this.fromdate = original_date;


    this.selected = 1;

    this.initInterval = setInterval(() => {
      this.fetchAllData();
    }, 5000);

  }
  fetchAllData() {
    this.inittodate = Date.now();
    this.initfromdate = Date.now() - 1000 * 60 * 60 * 24 * 1;
    this.getIdlingAllDevices();
    this.gettripevent();
    this.getAlerts();
    // this.loadVehicles(this.searchfromdate, this.searchtodate);
    // this.loadmap(this.searchfromdate, this.searchtodate);
    //this.getvehicleLocations();
  }
  ngOnDestroy() {
    clearInterval(this.searchInterval);
  }
  
  loadVehicles(fromDate, toDate) {
    var body = {
      "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getCurrentPostition(body).subscribe(res => {
      var data = res['data']['positions'];
      var mapdata = data;
      this.mapdata = data;
      var $this = this;
      var infowindow = new google.maps.InfoWindow();
      var geocoder = new google.maps.Geocoder();
      let payload: { queryParams: { vehicle: string, drivername: string, location: string, driverid: string, searchfromdate: number, searchtodate: number } };
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(this.mapdata[4]['latitude'], this.mapdata[4]['longitude']),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false
      });
      for(let item of this.mapdata) {
        var marker;
        var image = {
          url: '../../assets/images/warehouse.png',
          scaledSize: new google.maps.Size(50, 50),
        };
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(item['latitude'], item['longitude']),
          map: map,
          icon: image
        });
        var latlong1 = new google.maps.LatLng(item['latitude'], item['longitude']);
        attachMessage(map, marker, latlong1, item['personName'], item['fuelLevel'], item['battery'], item['speed'], item['deviceNbr'], item['driverId']);
        // this.showLocations(item, map, fromDate, toDate);
      }
      function attachMessage(map, marker, latlong, person, fuel, battery, speed, devicenumber, driverid) {
        marker.addListener('mouseover', function () {
          geocoder.geocode({ 'location': latlong }, function (res, status) {
        if (status == 'OK') {

          var currentLocation = res[0].address_components[2].long_name;
         infowindow = new google.maps.InfoWindow({
          // tslint:disable-next-line: max-line-length
          content:'<b style="display:inline-block"><p style="color:white;padding:5px;font-family: sans-serif; background:black;text-weight:bold;">' + '<i class="fa fa-map-marker" aria-hidden="true"></i> Current Location:' + currentLocation + '</p></b>'
          // tslint:disable-next-line: max-line-length
          +'<b style="display:inline-block; font-family: sans-serif; width:191px;"><p style="color:white;padding:5px; background:black;text-weight:bold">' + 'Driver Name:' + person + '</p></b><br>'
          // tslint:disable-next-line: max-line-length
          +'<b style=""><p style="color:black;float:left;font-family: sans-serif;">' + '<img src="../assets/fuel.jpg">Fuel:' + fuel + '</p></b>'
          // tslint:disable-next-line: max-line-length
          +'<b style="display:inline-block;" ><p style="color:black;text-weight:bold;font-family: sans-serif;">' + '<i class="fa fa-battery-quarter" aria-hidden="true"></i>Battery:' + battery +'V'+ '</p></b>'
          // tslint:disable-next-line: max-line-length
          +'<b style="display:inline-block; float:right;font-family: sans-serif;"><p style="color:black;text-weight:bold">' + '<img src="../assets/speed.jpg"> Speed:' + speed +'mph'+ '</p></b>'
              // content:'<b><p style="color:#0472b0;text-weight:bold">' + 'Current Location:' + currentLocation + '</p></b>'
              // +'<b><p style="color:#0472b0;text-weight:bold">' + 'Driver Name:' + person + '</p></b>'
              // +'<b><p style="color:#0472b0;text-weight:bold">' + 'Fuel:' + fuel + '</p></b>'
              // +'<b><p style="color:#0472b0;text-weight:bold">' + 'Battery:' + battery + '</p></b>'
              // +'<b><p style="color:#0472b0;text-weight:bold">' + 'Speed:' + speed + '</p></b>'
          });
          // console.log(infowindow);
          infowindow.open(map, marker);
         }
          });

        });
        marker.addListener('mouseout', function() {
          infowindow.close(map, marker);
        });
        marker.addListener('click', function () {
          // var latlong1 = new google.maps.LatLng(lat, long);
          geocoder.geocode({ 'location': latlong }, function (res, status) {
            if (status == 'OK') {
              var currentLocation = res[0].address_components[2].long_name;
              payload = {
                queryParams: {
                  vehicle: JSON.stringify(devicenumber),
                  drivername: JSON.stringify(person),
                  location: JSON.stringify(currentLocation),
                  driverid: JSON.stringify(driverid),
                  searchfromdate: fromDate,
                  searchtodate: toDate
                }
              };
              // console.log(payload);
              $this.router.navigate(['/fleetmatics'], payload);
              // alert(this.warehousename)
              // infowindow.open(this.map, marker);
    
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
          });
        });
      }
      this.UpdateMarker(map, marker, infowindow);
      this.initInterval = setInterval(() => {
        this.UpdateMarker(map, marker, infowindow);
      }, 5000);
    });
  }

  UpdateMarker(map, marker, infowindow) {
    var body = {
      "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getCurrentPostition(body).subscribe(res => {
      var data = res['data']['positions'];
      var mapdata = data;
      this.mapdata = data;
      for (let item of data) {
        var infowindow = new google.maps.InfoWindow();
        // this.showVehicle(item,map);
        // map.setCenter(new google.maps.LatLng(item.latitude, item.longitude));
        marker.setPosition(new google.maps.LatLng(item.latitude, item.longitude));
        // attachMessage(marker, item['personName'], item['fuelLevel'], item['battery'], item['speed'] )
      }
    });
  }

  getIdlingAllDevices() {
    // console.log(moment().subtract(1, 'days').toString()+ "hello ");
    var today = Date.now();
    var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 6;   // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
    var yest = new Date(yesterday);
    // console.log(yest+""+yesterday);​
    let body = {
      "username": "info@dataagile.com",
      "password": "conquest",
      "fromDate": this.searchfromdate,
      "toDate": this.searchtodate
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
    for (var item in stops) {
      let today = moment(Date.now()).format('MMM DD, YYYY');
      let todayfromdata = moment(stops[item]['beginDate']).format('MMM DD, YYYY');
      let endfromdate = moment(stops[item]['endDate']).format('MMM DD, YYYY');
      var dateString = moment().subtract(1, 'days').toString();
      var dateObj = new Date(dateString);
      var momentObj = moment(dateObj);
      var momentString = momentObj.format('MMM DD, YYYY');
      if (stops[item]['stopType'] == 'Engine Off') {
        this.stoptime = this.stoptime + stops[item]['duration'];
      }
      if (stops[item]['stopType'] == 'Idling') {
        this.idlingtime = this.idlingtime + stops[item]['duration'];
        // console.log(this.idlingtime);
      }
    }
  }

  gettripevent() {
    var today = Date.now();
    var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 1;
    let body = {
      "username": "info@dataagile.com",
      "password": "conquest",
      "fromDate": this.searchfromdate,
      "toDate": this.searchtodate
    }
    this.databotService.getVehicleTrips(body).subscribe(result => {
      this.trips = result['data']['trips'];
      this.getTotalDriveTime(this.trips);
    });
  }

  getTotalDriveTime(trips) {
    let drivetime = 0;
    this.distance = 0;
    for (let item of trips) {
      drivetime = drivetime + item['durationMinutes'];
      this.distance = this.distance + item['distanceMiles'];
      // console.log(this.drivetime);
    }
    this.drivetime = drivetime;
    this.convertoDays(this.drivetime);
  }

  getParams() {
    var today = this.searchtodate;
    var yesterday = this.searchfromdate;
    let body = {
      "username": "info@dataagile.com",
      "password": "conquest",
      "fromDate": this.searchfromdate,
      "toDate": this.searchtodate
    };
    return body;
  }

  getAlerts() {
    let harshbraking = 0;
    let highspeed = 0;
    let acceleration = 0;
    this.databotService.getVehicleAlerts(this.getParams()).subscribe(data => {
      for (let item of data['data']['alerts']) {
        // console.log(item['alertCode']);
        if (item['alertCode'] == 'HARSH_BRAKING') {
          harshbraking = harshbraking + 1;
          //  console.log(this.harshbraking);
        }
        if (item['alertCode'] == 'HIGH_SPEED') {
          highspeed = highspeed + 1;
          // console.log(this.harshbraking);
        }
        if (item['alertCode'] == 'RAPID_ACCELERATION') {
          acceleration = acceleration + 1;
          // console.log(this.rapidacceleration);
        }
      }
      this.harshbraking = harshbraking;
      this.highspeed = highspeed;
      this.rapidacceleration = acceleration;
    });
  }

  searching() {
    this.searchtodate = new Date(this.todate).getTime() * 1000;
    this.searchfromdate = new Date(this.fromdate).getTime() * 1000;
  }

  searchingBydate() {
    clearInterval(this.initInterval);
    this.searchtodate = new Date(this.todate).getTime();
    this.searchfromdate = new Date(this.fromdate).getTime();
    // console.log(this.searchfromdate, this.searchtodate);
    this.searchInterval = setInterval(() => {
      // console.log(this.searchfromdate, this.searchtodate);
      this.getAlerts();
      this.getIdlingAllDevices();
      this.gettripevent();
      this.loadVehicles(this.searchfromdate, this.searchtodate);
      // this.loadmap(this.searchfromdate, this.searchtodate);
    }, 10000);
  }

  convertoDays(input) {

    // set minutes to seconds
    var seconds = input * 60

    // calculate (and subtract) whole days
    var days = Math.floor(seconds / 86400);
    seconds -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(seconds / 3600) % 24;
    seconds -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(seconds / 60) % 60;

    this.drivetimeDaysFormat =  days + 'd ' + hours + 'h ' + minutes + 'm ';
    // console.log('str:', this.drivetimeDaysFormat);
  }
  getuserParams() {
    var today = Date.now();
    var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 1;
    let body = {
      "username": "info@dataagile.com",
      "password": "conquest",
      "fromDate": this.searchfromdate,
      "toDate": this.searchtodate
    };
    return body;
  }

  /*getvehicleLocations() {
    this.databotService.getVehicleLocations(this.getuserParams()).subscribe(data => {
      console.log(data);
    });
  }*/
}

