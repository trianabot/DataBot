import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { chart, SolidGaugeChart } from 'highcharts';
declare const google: any;
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import * as solidGauge from 'highcharts/modules/solid-gauge.src';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-vehiclelive-metric',
  templateUrl: './vehiclelive-metric.component.html',
  styleUrls: ['./vehiclelive-metric.component.css']
})
export class VehicleliveMetricComponent implements OnInit {
  returnchart: any;
  chartSpeed: any;
  chartRpm: any;
  map: any;
  options: any;

  /**Drop down */
  jsondata: any;
  categories: any = [];
  state: any = [];
  region: any = [];
  driverrating: any = [];

  categoryname: any;
  vehicleidno: any = [];
  trucknumber: any[]
  statename: any;
  regionname: any;
  performanc: any;
  vehiclename: any;
  vehicleid: any;
  truckidno: any;
  driverinformation: any = []

  /**JSON BINDING */
  drivername: any
  trip: any;
  deliveries: any;
  tripduration: any;
  tripmileage: any;
  engineoffline: any
  engineedletime: any;
  totalmilesrun: any;
  lastservicedate: any;
  milesrunssinceservice: any;
  flattireevents: any;
  lastbreakdown: any;
  planneddeliveries: any;
  deliverescompleted: any;
  licenceno: any;
  rating: any;
  rapidacceleration: any;
  address: any[];
  /**Map */
  location: any = []
  /**Default Name*/

  regiondefaultname: any;
  statedefaultname: any;
  categorydefaultname: any;
  ratingdefaultvalue: any;
  vehicledefaultname: any;

  /**Chart*/
  speed: any;
  rpm: any;


  constructor(public http: HttpClient) { }
  ngAfterViewInit() {

  }

  ngOnInit() {
    this.regiondefaultname = 'Midwest'; this.statedefaultname = 'Ohio'; this.categorydefaultname = '91-100', this.ratingdefaultvalue = 4;
    this.vehicledefaultname = 'CAT6257'
    this.http.get('../../assets/data/vehiclemetric.json').subscribe(data => {
      this.jsondata = data;
      var index: any;
      for (index in this.jsondata) {
        if (this.region.indexOf(this.jsondata[index].Region) < 0) {
          this.region.push(this.jsondata[index].Region);
        }

      }
      this.loadDefaultRegion(this.region, this.jsondata)
      // this.distributors = data['LOCATIONS'];
    });


    // this.routeMap();
  }

  loadDefaultRegion(region, jsondata) {
    var index: any;
    this.state = [];
    this.categories = [];
    this.driverrating = [];
    this.vehicleidno = [];
    for (index in jsondata) {
      if (jsondata[index].Region === this.regiondefaultname) {

        if (this.state.indexOf(jsondata[index].State) < 0) {
          this.state.push(jsondata[index].State);
        }
      }
    }
    this.loadDefaultCategory(this.regiondefaultname, this.statedefaultname, this.jsondata)
  }

  loadDefaultCategory(regiondefaultname, statedefaultname, jsondata) {
    var index: any;
    this.categories = [];
    this.driverrating = [];
    this.vehicleidno = [];
    for (index in this.jsondata) {
      if (jsondata[index].Region === regiondefaultname && this.jsondata[index].State === statedefaultname) {
        if (this.categories.indexOf(jsondata[index].Category) < 0) {
          this.categories.push(jsondata[index].Category);
          // alert(this.categories)
        }
      }

    }
    this.loadDefaultRating(this.regiondefaultname, this.statedefaultname, this.categorydefaultname, jsondata)

  }
  loadDefaultRating(regiondefaultname, statedefaultname, categorydefaultname, jsondata) {
    this.driverrating = [];
    this.vehicleidno = [];
    var index: any;
    for (index in this.jsondata) {
      if (jsondata[index].Region === regiondefaultname && jsondata[index].State === statedefaultname &&
        this.jsondata[index].Category === categorydefaultname) {
        if (this.driverrating.indexOf(this.jsondata[index].Rating) < 0) {
          this.driverrating.push(this.jsondata[index].Rating);
        }
      }
    }
    this.loadDefaultVehicle(this.regiondefaultname, this.statedefaultname, this.categorydefaultname, jsondata, this.ratingdefaultvalue)
  }
  loadDefaultVehicle(regiondefaultname, statedefaultname, categorydefaultname, jsondata, ratingdefaultvalue) {
    var index: any
    for (index in jsondata) {
      if (jsondata[index].Region === regiondefaultname && jsondata[index].State === statedefaultname &&
        jsondata[index].Category === categorydefaultname && jsondata[index].Rating == ratingdefaultvalue) {
        if (this.vehicleidno.indexOf(jsondata[index]['Truck ID']) < 0) {
          this.vehicleidno.push(jsondata[index]['Truck ID']);
          console.log(this.vehicledefaultname);
        }

      }

    }
    this.loadDefaultDriverData(this.regiondefaultname, this.statedefaultname, this.categorydefaultname, jsondata, this.ratingdefaultvalue, this.vehicledefaultname)
  }


  loadDefaultDriverData(regiondefaultname, statedefaultname, categorydefaultname, jsondata, ratingdefaultvalue, vehicledefaultname) {
    var index: any;
    for (index in this.jsondata) {
      if (jsondata[index].Region === regiondefaultname && jsondata[index].State === statedefaultname &&
        this.jsondata[index].Category === categorydefaultname && this.jsondata[index].Rating == ratingdefaultvalue && this.jsondata[index]['Truck ID'] === vehicledefaultname) {

        this.drivername = this.jsondata[index]['Name']
        this.licenceno = this.jsondata[index]['Vehicle Licence ID']
        this.rating = this.jsondata[index]['Rating']
        this.trip = this.jsondata[index]['Trip Miles']
        this.deliveries = this.jsondata[index]['Deliveries Completed']
        this.tripduration = this.jsondata[index]['Trip Duration']
        this.tripmileage = this.jsondata[index]['Trip Mileage']
        this.engineoffline = this.jsondata[index]['Engine Offline']
        this.engineedletime = this.jsondata[index]['Engine Idle Time']
        this.totalmilesrun = this.jsondata[index]['Total Miles Run']
        this.lastservicedate = this.jsondata[index]['Last Service Date']
        this.milesrunssinceservice = this.jsondata[index]['Miles Run since Serviced']
        this.flattireevents = this.jsondata[index]['Flat Tire Events']
        this.lastbreakdown = this.jsondata[index]['Last Breakdown On']
        this.planneddeliveries = this.jsondata[index]['Planned Deliveries']
        this.deliverescompleted = this.jsondata[index]['Deliveries Completed']
        this.rapidacceleration = this.jsondata[index]['Rapid Acceleration']
        this.address = this.jsondata[index].Address
        this.location = this.jsondata[index].Locations
        this.speed = this.jsondata[index].Speed
        this.rpm = this.jsondata[index].Rpm
        this.loadMap()
        this.loadGuage(this.speed)
        this.loadGaugerpm(this.rpm)

      }
    }


  }



  loadMap() {
    this.http.get('../../assets/data/location.json').subscribe(res => {
      var newmapdata = res;
      console.log(newmapdata)
      this.routeMap(newmapdata);
    });
  }

  routeMap(newmapdata) {

    var lat_lng = new Array();
    // let that;
    for (var i = 0; i < newmapdata.length; i++) {
      var lat = newmapdata[i].Latitude;
      var long = newmapdata[i].Longitude;
      var myLatlng = new google.maps.LatLng(lat, long);
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        fullscreenControl: true,
        fullscreenControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
        }

      });
      lat_lng.push(myLatlng);
      var image = {
        url: '../../assets/images/warehouse.png',
        // This marker is 50 pixels wide by 50 pixels high.
        scaledSize: new google.maps.Size(50, 50),
        // The origin for this image is (0, 0).
      };

      var imagetruck = {
        url: '../../assets/images/truck_top.png',
        // This marker is 50 pixels wide by 50 pixels high.
        scaledSize: new google.maps.Size(30, 30),
        // The origin for this image is (0, 0).
      };


      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        map: map,
        icon: imagetruck,
      });
      var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(32.542, -93.604),
        map: map,
        icon: image,
      });

      // var infowindow = new google.maps.InfoWindow({
      //   content: '<b><p style="color:red;text-weight:bold">Tire Position:' + JSON.stringify(tirepos) + '</p></b>' +
      //     '<b><p style="color:red;text-weight:bold">Tire Pressure:' + JSON.stringify(tirepsi) + '</p></b>'


      // });
      // var infowindow1 = new google.maps.InfoWindow({
      //   // content: '<b><p style="color:black">1</p>'


      // });
      // // infowindow.open(map, marker);
      // infowindow1.open(map, marker1);

      setInterval(function () {
        map.panTo(marker.getPosition());
      }, 5000);
    }

    var service = new google.maps.DirectionsService();
    var delayFactor = 0;

    function m_get_directions_route(request, latlong) {
      service.route(request, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          //Process you route here
          var path = new google.maps.MVCArray();

          var polylineoptns = {
            strokeOpacity: 0.8,
            strokeWeight: 3,
            strokeColor: "blue",
            map: map,
          };


          var poly = new google.maps.Polyline(polylineoptns);
          poly.setPath(path);

          var infowindow_polygon_1 = new google.maps.InfoWindow({ content: 'Stock' });
          google.maps.event.addListener(poly, "mouseover", function (event) {
            this.setOptions({ fillColor: "#00FF00" });
            infowindow_polygon_1.setPosition(event.latLng);
            infowindow_polygon_1.open(map);
          });
          google.maps.event.addListener(poly, "mouseout", function (event) {
            this.setOptions({ fillColor: "#00FF00" });
            //infowindow_polygon_1.setPosition(event.latLng);
            infowindow_polygon_1.close(map);
          });

          for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
            path.push(result.routes[0].overview_path[i]);
            marker.setPosition(result.routes[0].overview_path[i]);
          }
        } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
          delayFactor++;
          setTimeout(function () {
            m_get_directions_route(request, latlong);
          }, delayFactor * 1000);
        } else {
          //console.log("Route: " + status);
        }
      });
    }


    for (i = 0; i < lat_lng.length; i++) {
      if ((i + 1) < lat_lng.length) {
        var src = lat_lng[i];
        var des = lat_lng[i + 1];
        var request = {
          origin: src,
          destination: des,
          travelMode: google.maps.DirectionsTravelMode.DRIVING
        };


        m_get_directions_route(request, lat_lng);

      }
    }



  }
  loadGuage(speed) {
    let $this = this;
    this.options = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        // spacing: [0, 0, 0, 0],
        backgroundColor: null,


      },
      credits: {
        enabled: false
      },

      title: {
        text: ''
      },



      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#FFF'],
              [1, '#333']
            ]
          },
          borderWidth: 0,
          outerRadius: '109%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#333'],
              [1, '#FFF']
            ]
          },
          borderWidth: 1,
          outerRadius: '107%'
        }, {
          // default background
        }, {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 180,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: 'km/h'
        },
        plotBands: [{
          from: 0,
          to: 120,
          color: '#55BF3B' // green
        }, {
          from: 120,
          to: 160,
          color: '#DDDF0D' // yellow
        }, {
          from: 160,
          to: 200,
          color: '#DF5353' // red
        }]
      },

      series: [{
        name: 'Speed',
        data: [60],
        tooltip: {
          valueSuffix: ' km/h'
        }
      }]

    };
    $this.chartSpeed = new Chart(this.options);
    setInterval(function () {
      // Speed
      var point,
        newVal,
        inc;

      if ($this.chartSpeed) {
        point = $this.chartSpeed.ref.series[0].points[0];
        inc = Math.round((Math.random() - 0.5) * 100);
        newVal = point.y + inc;

        if (newVal < 0 || newVal > 180) {
          newVal = point.y - inc;
        }

        point.update(newVal);
      }

      // RPM
      if ($this.chartRpm) {
        point = $this.chartRpm.ref.series[0].points[0];
        inc = (Math.random() - 0.5);
        newVal = point.y + inc;

        if (newVal < 0 || newVal > 5) {
          newVal = point.y - inc;
        }

        point.update(newVal);
      }
    }, 2000);
  }

  loadGaugerpm(rpm) {
    this.options = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        // spacing: [50, 50, 50, 50],
        backgroundColor: null,

      },
      credits: {
        enabled: false
      },

      title: {
        text: ''
      },

      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#FFF'],
              [1, '#333']
            ]
          },
          borderWidth: 0,
          outerRadius: '109%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#333'],
              [1, '#FFF']
            ]
          },
          borderWidth: 1,
          outerRadius: '107%'
        }, {
          // default background
        }, {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 12,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: 'r/min'
        },
        plotBands: [{
          from: 0,
          to: 4,
          color: '#55BF3B' // green
        }, {
          from: 4,
          to: 8,
          color: '#DDDF0D' // yellow
        }, {
          from: 8,
          to: 12,
          color: '#DF5353' // red
        }]
      },

      series: [{
        name: 'Rpm',
        data: [4],
        tooltip: {
          valueSuffix: ' km/h'
        }
      }]

    };
    this.chartRpm = new Chart(this.options);
  }
  /**Drop down */
  changeRegion(region) {
    this.regionname = this.regiondefaultname = region.currentTarget.value;
    var index: any;
    this.state = [];
    this.categories = [];
    this.driverrating = [];
    this.vehicleidno = [];
    for (index in this.jsondata) {
      if (this.jsondata[index].Region === this.regionname) {

        if (this.state.indexOf(this.jsondata[index].State) < 0) {
          this.state.push(this.jsondata[index].State);
        }
      }
    }
  }

  changeState(state) {
    this.statename = this.statedefaultname = state.currentTarget.value
    // console.log(this.categories);
    var index: any;
    this.categories = [];
    this.driverrating = [];
    this.vehicleidno = [];
    for (index in this.jsondata) {
      if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statename) {
        if (this.categories.indexOf(this.jsondata[index].Category) < 0) {
          this.categories.push(this.jsondata[index].Category);
          // alert(this.categories)
          // console.log(this.categories+"ihhi");
        }
      }
    }
  }


  changeCategory(category) {
    this.categoryname = this.categorydefaultname = category.currentTarget.value;
    this.driverrating = [];
    this.vehicleidno = [];
    var index: any;
    for (index in this.jsondata) {
      if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statedefaultname && this.jsondata[index].Category === this.categoryname) {
        if (this.driverrating.indexOf(this.jsondata[index].Rating) < 0) {
          this.driverrating.push(this.jsondata[index].Rating);
        }
      }
    }
  }

  changeRating(rating) {
    this.performanc = this.ratingdefaultvalue = rating.currentTarget.value;
    this.vehicleidno = [];
    var index: any;
    for (index in this.jsondata) {
      if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statedefaultname &&
        this.jsondata[index].Category === this.categorydefaultname && this.jsondata[index].Rating == this.performanc) {
        if (this.vehicleidno.indexOf(this.jsondata[index]['Truck ID']) < 0) {
          this.vehicleidno.push(this.jsondata[index]['Truck ID']);
        }
      }
    }
  }



  changeVehicle(name) {
    this.vehiclename = this.vehicledefaultname = name.currentTarget.value;
    var index: any;
    for (index in this.jsondata) {
      if (this.jsondata[index].Region === this.regiondefaultname && this.jsondata[index].State === this.statedefaultname &&
        this.jsondata[index].Category === this.categorydefaultname && this.jsondata[index].Rating == this.ratingdefaultvalue && this.jsondata[index]['Truck ID'] === this.vehiclename) {

        this.drivername = this.jsondata[index]['Name']
        this.licenceno = this.jsondata[index]['Vehicle Licence ID']
        this.rating = this.jsondata[index]['Rating']
        this.trip = this.jsondata[index]['Trip Miles']
        this.deliveries = this.jsondata[index]['Deliveries Completed']
        this.tripduration = this.jsondata[index]['Trip Duration']
        this.tripmileage = this.jsondata[index]['Trip Mileage']
        this.engineoffline = this.jsondata[index]['Engine Offline']
        this.engineedletime = this.jsondata[index]['Engine Idle Time']
        this.totalmilesrun = this.jsondata[index]['Total Miles Run']
        this.lastservicedate = this.jsondata[index]['Last Service Date']
        this.milesrunssinceservice = this.jsondata[index]['Miles Run since Serviced']
        this.flattireevents = this.jsondata[index]['Flat Tire Events']
        this.lastbreakdown = this.jsondata[index]['Last Breakdown On']
        this.planneddeliveries = this.jsondata[index]['Planned Deliveries']
        this.deliverescompleted = this.jsondata[index]['Deliveries Completed']
        this.rapidacceleration = this.jsondata[index]['Rapid Acceleration']
        this.address = this.jsondata[index].Address
        this.location = this.jsondata[index].Locations
        this.speed = this.jsondata[index].Speed
        this.rpm = this.jsondata[index].Rpm
        this.loadMap()
        this.loadGuage(this.speed)
        this.loadGaugerpm(this.rpm)
        // this.routeMap(this.location)


      }
    }
  }

}
