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
    }, 50000);

  }
  fetchAllData() {
    this.inittodate = Date.now();
    this.initfromdate = Date.now() - 1000 * 60 * 60 * 24 * 1;
    this.getIdlingAllDevices();
    this.gettripevent();
    this.getAlerts();
    this.loadVehicles(this.searchfromdate, this.searchtodate);
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
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(0, 0),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false
      });
      for(let item of this.mapdata) {
        this.showLocations(item, fromDate, toDate);
      }
    });
  }

  showLocations(item, fromDate, toDate) {
    console.log(item);
    var marker;
    var geocoder = new google.maps.Geocoder();
    var $this = this;
    let payload: { queryParams: { vehicle: string, drivername: string, location: string, driverid: string, searchfromdate: number, searchtodate: number } };
    var infowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    this.map.setCenter(new google.maps.LatLng(this.mapdata[4]['latitude'], this.mapdata[4]['longitude']));
    var image = {
      url: '../../assets/images/warehouse.png',
      scaledSize: new google.maps.Size(50, 50),
    };
    if (marker && marker.setMap) {
        marker.setMap(null);
      }
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(item['latitude'], item['longitude']),
      map: this.map,
      icon: image
    });
    var latlong1 = new google.maps.LatLng(item['latitude'], item['longitude']);
    // attachSecretMessage(marker, item['latitude'], item['longitude'], item['label'], item['deviceNbr'], item['personName'], item['fuelLevel'], item['battery'], item['speed'], item['driverId'], this.searchfromdate, this.searchtodate)
    marker.addListener('mouseover', function () {
      geocoder.geocode({ 'location': latlong1 }, function (res, status) {
        if (status == 'OK') {

          var currentLocation = res[0].address_components[2].long_name;
          // $this.city = currentLocation;
          // $this.state = res[0].address_components[4].long_name;
          // $this.country = res[0].address_components[5].long_name;

          // $this.esttime = est;
          infowindow = new google.maps.InfoWindow({
            content: '<b><p style="color:#0472b0;text-weight:bold">' + 'Current Location:' + currentLocation + '</p></b>'
              + '<b><p style="color:#0472b0;text-weight:bold">' + 'Driver Name:' + item['label'] + '</p></b>'
              + '<b><p style="color:#0472b0;text-weight:bold">' + 'Fuel:' + item['fuelLevel'] + '</p></b>'
              + '<b><p style="color:#0472b0;text-weight:bold">' + 'Battery:' + item['battery'] + '</p></b>'
              + '<b><p style="color:#0472b0;text-weight:bold">' + 'Speed:' + item['speed'] + '</p></b>'

          });

          // $this.getDeviceEvents(devicenumber);
          // alert(this.warehousename)
          infowindow.open(this.map, marker);

        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
    marker.addListener('mouseout', function () {
      infowindow.close(marker.get('map'), marker);
    });
    marker.addListener('click', function () {
      // var latlong1 = new google.maps.LatLng(lat, long);
      geocoder.geocode({ 'location': latlong1 }, function (res, status) {
        if (status == 'OK') {

          var currentLocation = res[0].address_components[2].long_name;
          payload = {
            queryParams: {
              vehicle: JSON.stringify(item['deviceNbr']),
              drivername: JSON.stringify(item['personName']),
              location: JSON.stringify(currentLocation),
              driverid: JSON.stringify(item['driverId']),
              searchfromdate: fromDate,
              searchtodate: toDate
            }
          };
          console.log(payload);
          $this.router.navigate(['/fleetmatics'], payload);
          // alert(this.warehousename)
          // infowindow.open(this.map, marker);

        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
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
      if ((stops[item]['stopType'] == 'Engine Off') && (today == todayfromdata)) {
        this.stoptime = this.stoptime + stops[item]['duration'];
      }
      if ((stops[item]['stopType'] == 'Idling') && (today == todayfromdata)) {
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

  // initmap() {
  //   this.map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 11,
  //     center: new google.maps.LatLng(mapdata[0]['latitude'], mapdata[0]['longitude']),
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     mapTypeControl: false,
  //     streetViewControl: false
  //   });
  // }

  loadmapdata() {
    var body = {
      "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getCurrentPostition(body).subscribe(res => {
      var data = res['data']['positions'];
      var mapdata = data;
      this.mapdata = data;
      this.getpositions();
      this.loadmap('', '');
    });
  }

  getpositions() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false
    });
  }

  loadmap(searchfromdate, searchtodate) {
    this.marker = new Array();
    var body = {
      "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getCurrentPostition(body).subscribe(res => {
      var data = res['data']['positions'];
      var mapdata = data;
      this.mapdata = data;
      this.map.setCenter(new google.maps.LatLng(this.mapdata[4]['latitude'], this.mapdata[4]['longitude']));
      this.updateMarkers(searchfromdate, searchtodate);
    });

  }

  updateMarkers(searchfromdate, searchtodate) {
    var $this = this;
    let payload: { queryParams: { vehicle: string, drivername: string, location: string, driverid: string, searchfromdate: number, searchtodate: number } };

    var infowindow = new google.maps.InfoWindow();
    var marker;
    var i;
    var image = {
      url: '../../assets/images/warehouse.png',
      scaledSize: new google.maps.Size(50, 50),
    };
    // this.map.center = new google.maps.LatLng(mapdata[4]['latitude'], mapdata[4]['longitude']);
    // this.marker = [];
    // this.marker = [];
    // if (marker && marker.setMap) {
    //   marker.setMap(null);
    // }
    var latlong = [];
    if (marker && marker.setMap) {
      marker.setMap(null);
    }
    // tslint:disable-next-line: forin
    for (let item in this.mapdata) {
      var lat = this.mapdata[item]['latitude'];
      var long = this.mapdata[item]['longitude'];
      latlong = new google.maps.LatLng(lat, long);
      // if (marker && marker.setMap) {
      //   console.log(marker.setMap);
      //   marker.setMap(null);
      // }
      // else {
      //   marker = new google.maps.Marker({
      //     position: new google.maps.LatLng(this.mapdata[item]['latitude'], this.mapdata[item]['longitude']),
      //     map: this.map,
      //     icon: image
      //   });
      // }
      // marker.setMap(null);
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.mapdata[item]['latitude'], this.mapdata[item]['longitude']),
        map: this.map,
        icon: image
      });
      this.marker.push(marker);
      // this.marker.setMap(null);
      attachSecretMessage(marker, this.mapdata[item]['latitude'], this.mapdata[item]['longitude'], this.mapdata[item]['label'], this.mapdata[item]['deviceNbr'], this.mapdata[item]['personName'], this.mapdata[item]['fuelLevel'], this.mapdata[item]['battery'], this.mapdata[item]['speed'], this.mapdata[item]['driverId'], searchfromdate, searchtodate);
    }
    function attachSecretMessage(marker, lat, long, label, devicenumber, drivername, fuel, battery, speed, driverid, searchfromdate, searchtodate) {
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
                + '<b><p style="color:#0472b0;text-weight:bold">' + 'Driver Name:' + label + '</p></b>'
                + '<b><p style="color:#0472b0;text-weight:bold">' + 'Fuel:' + fuel + '</p></b>'
                + '<b><p style="color:#0472b0;text-weight:bold">' + 'Battery:' + battery + '</p></b>'
                + '<b><p style="color:#0472b0;text-weight:bold">' + 'Speed:' + speed + '</p></b>'

            });

            // $this.getDeviceEvents(devicenumber);
            // alert(this.warehousename)
            infowindow.open(this.map, marker);

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      });
      // marker.addListener('mouseout', function () {
      //   infowindow.close(marker.get('map'), marker);
      // });
      marker.addListener('mouseout', function () {
        infowindow.close(marker.get('map'), marker);
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
                + '<b><p style="color:#0472b0;text-weight:bold">' + label + '</p></b>'

            });

            // $this.getDeviceEvents(devicenumber);
            payload = {
              queryParams: {
                vehicle: JSON.stringify(devicenumber),
                drivername: JSON.stringify(drivername),
                location: JSON.stringify(currentLocation),
                driverid: JSON.stringify(driverid),
                searchfromdate: searchfromdate,
                searchtodate: searchtodate
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
      this.loadmap(this.searchfromdate, this.searchtodate);
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

