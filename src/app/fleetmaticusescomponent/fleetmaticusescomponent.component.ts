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
import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';

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
  username: any;
  totalTrucks: any;
  vehicleTrackerInfo: any = [];
  stompClient: any;
  WEBSOCKET_URL: any = 'http://192.168.99.1:6060/linxuplocation/';
  gmarkers: any = [];

  constructor(public databotService: DatabotService, private router: Router) {
    let searchtodate = Date.now();
    let todateStamp = new Date(searchtodate).getTime();
    this.searchtodate = todateStamp;
    this.searchfromdate = Date.now() - 1000 * 60 * 60 * 24 * 1;
    this.loadVehicles(this.searchfromdate, this.searchtodate);
    // console.log(this.searchfromdate, this.searchtodate);
    this.fetchAllData();
    this.username = localStorage.getItem('username');
    // this.Map();
    // this.loadmapdata();
    // this.loadmap(this.searchfromdate, this.searchtodate);
    // if (localStorage.getItem('username') == 'melrosepark' || localStorage.getItem('username') == 'Melrosepark') {
    //   this.tenantOverview = true;
    //   this.Overview = false;
    // } else {
    //   this.tenantOverview = false;
    //   this.Overview = true;
    // }
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
    this.initializeWebSocketConnection();
    this.getvehicleinfo();
    this.selected = 1;

    this.initInterval = setInterval(() => {
      this.fetchAllData();
    }, 5000);
    // setInterval(() => {
    //     this.updatemarkersdata();
    //   }, 5000);

  }
  getvehicleinfo() {
    this.databotService.getLocationInfo().subscribe(data => {
      console.log(data);
    });
  }

  initializeWebSocketConnection() {
    let ws = new SockJs('http://192.168.29.253:6060/linxuplocation');
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, (frame: any) => {
      that.stompClient.subscribe('/location/databot', (scoredata) => {
        const scoreJson = JSON.parse(scoredata.body);
        console.log(scoreJson);
      });
    });
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
    clearInterval(this.initInterval);
  }
  
  loadVehicles(fromDate, toDate) {
    var body = {
      "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getVehicleLocations(body).subscribe(res => {
      var data = res['data']['locations'];
      var mapdata = data;
      this.mapdata = data;
      // this.loadmap();

      var $this = this;
      this.totalTrucks = 0;
      var infowindow = new google.maps.InfoWindow();
      var geocoder = new google.maps.Geocoder();
      let payload: { queryParams: { vehicle: string, drivername: string, location: string, driverid: string, searchfromdate: number, searchtodate: number } };
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(this.mapdata[4]['latitude'], this.mapdata[4]['longitude']),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false
      });
      for(let item of this.mapdata) {
        var marker;
        var icon;
        var size;
        
        if(this.username == 'melrosepark') {
          if(item['fleetId'] == 129900) {
            if(item['speed'] == '0') {
              icon = '../../assets/truck-stop.png';
              size = new google.maps.Size(15, 15);
            }else{
              icon = '../../assets/truck-dir.png';
              size = new google.maps.Size(15, 15);
            }
            var image = {
              url: icon,
              scaledSize: size,
              rotation: [90]
            };
            this.totalTrucks = this.totalTrucks + 1;
            this.marker = new google.maps.Marker({
              position: new google.maps.LatLng(item['latitude'], item['longitude']),
              map: this.map,
              icon: image
            });
            var latlong1 = new google.maps.LatLng(item['latitude'], item['longitude']);
            attachMessage(this.map, this.marker, latlong1, item['personName'], item['fuelLevel'], item['battery'], item['speed'], item['imei'], item['driverId'], item['virtualOdo']);  
          }
        }else{
          if(item['speed'] == '0') {
            icon = '../../assets/truck-stop.png';
            size = new google.maps.Size(15, 15);
          }else{
            icon = '../../assets/truck-dir.png';
            size = new google.maps.Size(15, 15);
          }
          var image = {
            url: icon,
            scaledSize: size,
            rotation: [90]
          };
          this.totalTrucks = this.totalTrucks + 1;
          this.marker = new google.maps.Marker({
            position: new google.maps.LatLng(item['latitude'], item['longitude']),
            map: this.map,
            icon: image
          });
          var latlong1 = new google.maps.LatLng(item['latitude'], item['longitude']);
          attachMessage(this.map, this.marker, latlong1, item['personName'], item['fuelLevel'], item['battery'], item['speed'], item['imei'], item['driverId'], item['virtualOdo']);
          // this.showLocations(item, map, fromDate, toDate);
        }
        }
      function attachMessage(map, marker, latlong, person, fuel, battery, speed, devicenumber, driverid, odo) {
        marker.addListener('mouseover', function () {
          geocoder.geocode({ 'location': latlong }, function (res, status) {
        if (status == 'OK') {
          var runningStatus;
          var deviceStatus;
          var currentLocation = res[0].address_components[2].long_name;
          if(speed == '0') {
            runningStatus = 'Stopped';
          }else{
            runningStatus = 'Running';
          }
          if(!battery) {
            deviceStatus = 'Disconnected';
          }else{
            deviceStatus = 'Connected';
          }

         infowindow = new google.maps.InfoWindow({
          // tslint:disable-next-line: max-line-length
          content:'<div class="row" style="margin:0px"><div div class="row" style="margin:0px;background:black;width:360px"><div class="col-md-7" style="padding:0px"><span style="color:white;font-family: sans-serif; background:black;text-weight:bold;">' + '<i class="fa fa-map-marker" aria-hidden="true"></i> Current Location:' + currentLocation + '</span></div>'
          // tslint:disable-next-line: max-line-length
          +'<div class="col-md-5" style="padding:0px;"><span style="color:white; background:black;text-weight:bold;font-family: sans-serif;">' + 'Driver Name:' + person + '</span></div></div><br>'
          // tslint:disable-next-line: max-line-length
          +'<div class="row" style="margin:0px"><div class="col-md-4" style="padding:0px"><b style=""><span style="color:black;float:left;font-family: sans-serif;">' + '<img src="../assets/fuel.jpg" style="width: 22px;">&nbsp;&nbsp;Fuel&nbsp;:&nbsp;' + fuel + '</span></b></div>'
          // tslint:disable-next-line: max-line-length
          +'<div class="col-md-4" style="padding:0px"><b style="display:inline-block;" ><span style="color:black;text-weight:bold;font-family: sans-serif;">' + '<i class="fa fa-battery-quarter" aria-hidden="true"></i> Battery&nbsp;:&nbsp;' + battery +'V'+ '</span></b></div>'
          // tslint:disable-next-line: max-line-length
          +'<div class="col-md-4" style="padding:0px"><b style="display:inline-block; float:right;font-family: sans-serif;"><span style="color:black;text-weight:bold">' + '<img src="../assets/speed.jpg"> Speed&nbsp;:&nbsp;' + speed +'mph'+ '</span></b>' + '</div></div>'
          // tslint:disable-next-line: max-line-length
          +'<div class="row" style="margin:0px"><div class="col-md-4" style="padding:0px"><b style=""><span style="color:black;float:left;font-family: sans-serif;">' + '<img src="../assets/odometer.png" style="width:18px">&nbsp;Odo&nbsp;:&nbsp;' + odo + '</span></b></div>'
          // tslint:disable-next-line: max-line-length
          +'<div class="col-md-8" style="padding:0px;margin-left: -50px;"><b style="display:inline-block; float:right;font-family: sans-serif;"><span style="color:black;text-weight:bold;">' + '<img src="../assets/battery.png" style="width:16px"> Device Status&nbsp;:&nbsp;' + deviceStatus + '</span></b></div></div></div>'
          });
          // console.log(infowindow);
          infowindow.open(map, marker);
         }
          });

        });
        marker.addListener('mouseout', function() {
          infowindow.close(map, marker);
        });
        marker.addListener(map, "click", function(event) {
          infowindow.close(map, marker);
        });
        marker.addListener('click', function () {
          // var latlong1 = new google.maps.LatLng(lat, long);
          geocoder.geocode({ 'location': latlong }, function (res, status) {
            if (status == 'OK') {
              // var currentLocation = res[0].address_components[0].long_name + ',' + res[0].address_components[1].short_name + ',' + res[0].address_components[6].long_name;
              var currentLocation = res[0].formatted_address;
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
              // alert('Geocode was not successful for the following reason: ' + status);
            }
          });
        });
      }
      this.UpdateMarker(this.map, this.marker, infowindow);
      setInterval(() => {
        this.UpdateMarker(this.map, this.marker, infowindow);
      }, 5000);
    });
  }

  loadmap() {
    var mapOptions = {
      center: new google.maps.LatLng(35.66, -80.50),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(document.getElementById("map"),
  mapOptions);

  // add the markers to the map if they have been loaded already.
  if (this.gmarkers.length > 0) {
      for (var i = 0; i < this.gmarkers.length; i++) {
          this.gmarkers[i].setMap(this.map);
      }
  }
  }

  updatemarkersdata() {
    var body = {
      "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getVehicleLocations(body).subscribe(res => {
      var data = res['data']['locations'];
      var mapdata = data;
      this.mapdata = data;
      this.updatemarkers();
    });
  }

  updatemarkers() {
    var bounds = new google.maps.LatLngBounds();

    // delete all existing markers first
    for (var i = 0; i < this.gmarkers.length; i++) {
        this.gmarkers[i].setMap(null);
    }
    this.gmarkers = [];

    // add new markers from the JSON data
    for (var i = 0;  i < this.mapdata.length; i++) {
       var latLng = new google.maps.LatLng(this.mapdata[i].latitude, this.mapdata[i].longitude);
        bounds.extend(latLng);
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            // title: data[i].title
        });
        var infoWindow = new google.maps.InfoWindow();
        // google.maps.event.addListener(marker, "click", function (e) {
        //     infoWindow.setContent(data.description+"<br>"+marker.getPosition().toUrlValue(6));
        //     infoWindow.open(map, marker);
        // });
        // (function (marker, data) {
        //     google.maps.event.addListener(marker, "click", function (e) {
        //         infoWindow.setContent(data.description+"<br>"+marker.getPosition().toUrlValue(6));
        //         infoWindow.open(map, marker);
        //     });
        // })(marker, data[i]);
        this.gmarkers.push(marker);
    }

    // zoom the map to show all the markers, may not be desirable.
    this.map.fitBounds(bounds);
  }

  UpdateMarker(map, marker, infowindow) {
    var body = {
      "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getVehicleLocations(body).subscribe(res => {
      var data = res['data']['locations'];
      var mapdata = data;
      this.mapdata = data;
      this.vehicleTracker();
      for (let item of data) {
        var icon;
        var size;
        var infowindow = new google.maps.InfoWindow();
        // this.showVehicle(item,map);
        //  map.setCenter(new google.maps.LatLng(item.latitude, item.longitude));
        marker.setPosition(new google.maps.LatLng(item.latitude, item.longitude));
        if(item['speed'] == '0') {
          icon = '../../assets/truck-stop.png';
          size = new google.maps.Size(15, 15);
        }else{
          icon = '../../assets/truck-dir.png';
          size = new google.maps.Size(15, 15);
        }
        var image = {
          url: icon,
          scaledSize: size,
        };
        this.marker.setIcon(image);
        // attachMessage(marker, item['personName'], item['fuelLevel'], item['battery'], item['speed'] )
      }
    });
  }

  vehicleTracker() {
    this.vehicleTrackerInfo = [];
    for(let item of this.mapdata) {
      var icon;
      var status;
      if(this.username == 'melrosepark') {
        if(item['fleetId'] == 129900) {
          if(item['speed'] == '0') {
            status = 'Stopped';
            icon = '../../assets/truck-stop.png';
          }else{
            status = 'Running';
            icon = '../../assets/truck-dir.png';
          }
            this.vehicleTrackerInfo.push({'Driver': item['personName'], 'VIN': item['vin'], 'Speed': item['speed'] ,'Status': status, 'icon': icon});
       
        }
      }else {
        if(item['speed'] == '0') {
          status = 'Stopped';
          icon = '../../assets/truck-stop.png';
        }else{
          status = 'Running';
          icon = '../../assets/truck-dir.png';
        }
          this.vehicleTrackerInfo.push({'Driver': item['personName'], 'VIN': item['vin'], 'Speed': item['speed'] ,'Status': status, 'icon': icon});
     
      }
      // if(item['speed'] == '0') {
      //   status = 'Stopped';
      //   icon = '../../assets/truck-stop.png';
      // }else{
      //   status = 'Running';
      //   icon = '../../assets/truck-dir.png';
      // }
      //   this.vehicleTrackerInfo.push({'Driver': item['personName'], 'VIN': item['vin'], 'Speed': item['speed'] ,'Status': status, 'icon': icon});
    }
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
      // if (stops[item]['stopType'] == 'Engine Off') {
      //   this.stoptime = this.stoptime + stops[item]['duration'];
      // }
      if(this.username == 'melrosepark') {
        if(stops[item]['lastName'] == 'PW') {
          if (stops[item]['stopType'] == 'Idling') {
            this.idlingtime = this.idlingtime + 1;
            // console.log(this.idlingtime);
          }
        }
      }else {
        this.idlingtime = this.idlingtime + 1;
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
      if(this.username == 'melrosepark') {
         if(item['driverName'] == 'MP3 PW' || item['driverName'] == 'MP4 PW' || item['driverName'] == 'MP5 PW' || item['driverName'] == 'MP6 PW' ||item['driverName'] == 'MP7 PW') {
          drivetime = drivetime + item['durationMinutes'];
          this.distance = this.distance + item['distanceMiles'];
          // console.log('drive time inside');
         }
      }else {
        // console.log('drive time else');
        drivetime = drivetime + item['durationMinutes'];
        this.distance = this.distance + item['distanceMiles'];
      }
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
        if(this.username == 'melrosepark') {
           if(item['lastName'] == 'PW') {
              // console.log('inside pw');
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
        }else {
          // console.log('inside else');
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
    this.loadVehicles(this.searchfromdate, this.searchtodate);
    // console.log(this.searchfromdate, this.searchtodate);
    this.searchInterval = setInterval(() => {
      // console.log(this.searchfromdate, this.searchtodate);
      this.getAlerts();
      this.getIdlingAllDevices();
      this.gettripevent();
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

  vehicleDDChange(event) {
    // console.log(event.currentTarget.value)
  }
  /*getvehicleLocations() {
    this.databotService.getVehicleLocations(this.getuserParams()).subscribe(data => {
      console.log(data);
    });
  }*/
}

