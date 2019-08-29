import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DatabotService } from './../core/databot.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
declare const google: any;
@Component({
  selector: 'app-fleetmatics',
  templateUrl: './fleetmatics.component.html',
  styleUrls: ['./fleetmatics.component.css']
})
export class FleetmaticsComponent implements OnInit {


  selected: any;
  fleetOverview = true;
  driverProfile: any;
  trackOrder: any;
  custFeed: any;
  tenantOverview: boolean;
  Overview: boolean;
  options: any;
  harshevents: any;
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
  driver: any;
  location: any;
  hourschart: any;
  accOptions: any;
  // private hoursAccChart = new Chart({

  //   chart: {
  //     backgroundColor: '#f9f9f8',
  //     height: 200,
  //     // width: 373,
  //     type: 'column',
  //     style: {
  //       color: 'white',
  //     },
  //   },
  //   legend: {
  //     itemStyle: {
  //       color: 'black'
  //     },
  //     align: 'center',
  //     verticalAlign: 'top',
  //     floating: false,
  //     style: {
  //       color: '#fff'
  //     }
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   title: {
  //     text: null,
  //     style: {
  //       color: '#fff'
  //     }
  //   },
  //   xAxis: {
  //     tickInterval: 1,
  //     // type: 'datetime',
  //     // categories: time,
  //     labels: {
  //       style: {
  //         color: 'fff'
  //       },
  //       format: '{value}',
  //     },
  //   },
  //   yAxis: {
  //     gridLineColor: 'transparent',
  //     labels: {
  //       format: '{value}',
  //       style: {
  //         color: 'fff'
  //       }
  //     },
  //     title: {
  //       text: null,
  //     },
  //   },
  //   series: [
  //   //   {
  //   //   // name: "Speed",
  //   //   // showInLegend: false,
  //   //   // borderColor: null,
  //   //   data: [20],
  //   //   color: '#8ba9ff',
  //   //   pointWidth: 15
  //   // },
  //   {
  //     name: "Acceleration",
  //     // showInLegend: false,
  //     // borderColor: null,
  //     data: [15],
  //     color: '#4f76ad',
  //     pointWidth: 15
  //   }
  //   ],
  //   tooltip: {
  //     valueSuffix: 'Hrs'
  //   }
  // });
  option: any;
  miles: number;
  totaltrips: any;
  unauthorizedMiles: any;
  map: any;
  driverid: any;
  startLat: any;
  startLong: any;
  endLat: any;
  endLong: any;
  searchtodata: number;
  searchfromdata: number;
  hrsAcc: any = [];
  hoursAccChart: any;
  hrsBraking: any = [];
  hrs: any = [];
  getUpdateVehicleInterval: any;
  hoursBrakingChart: any;
  brakingOptions: any;
  highSpeed: number;
  hoursSpeedChart: any;
  speedOptions: any;
  hrsSpeed: any = [];

  driveChart: any;
  driveOptions: any;
  drivemins: any = [];

  idleChart: any;
  idleOptions: any;
  idlemins: any = [];

  stopChart: any;
  stopOptions: any;
  stopmins: any = [];

  mileChart: any;
  mileOptions: any;
  mile: any = [];

  unauthorizedMileChart: any;
  unauthorizedMileOptions: any;
  unauthorizedMile: any = [];

  tripChart: any;
  tripOptions: any;
  trip: any = [];

  constructor(public databotService: DatabotService, private route: ActivatedRoute) {
    if (localStorage.getItem('username') == 'melrosepark' || localStorage.getItem('username') == 'Melrosepark') {
      this.tenantOverview = true;
      this.Overview = false;
    } else {
      this.tenantOverview = false;
      this.Overview = true;
    }
    this.searchtodata = Date.now();
    this.searchfromdata = Date.now() - 1000 * 60 * 60 * 24 * 2;
  }

  ngOnInit() {
    const jsonString: string = this.route.snapshot.queryParamMap.get('vehicle');
    const drivername = this.route.snapshot.queryParamMap.get('drivername');
    const location = this.route.snapshot.queryParamMap.get('location');
    const driverid = this.route.snapshot.queryParamMap.get('driverid');
    this.selected = 1;
    if (jsonString) {
      this.imei = JSON.parse(jsonString);
      this.drivername = JSON.parse(drivername);
      this.driver = JSON.parse(drivername);
      this.location = JSON.parse(location);
      this.driverid = JSON.parse(driverid);
      this.getvehicleAlerts();
      this.getDeviceEvents(this.imei);
      this.HarshEvents('', '','');
      this.HoursChart('', '', '');
      this.hrsSpeedChart('');
      this.MilesChart('', '', '');
      this.loadmap();
      this.loadmapdata();
      this.getIdlingAllDevices();
      this.gettripevent();
      this.loadData();
    } else {
      // this.HarshEvents();
      // this.HoursChart();
      // this.Speeding();
      // this.MilesChart();
      // this.loadmapdata();
      // this.getIdlingAllDevices();
      // this.gettripevent();

    }

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

  HarshEvents(acc, braking, speed) {
    console.log(acc);
    console.log(braking);
    console.log(speed);
    this.options = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'pie',
        style: {
          color: 'white',

        },
      },
      legend: {
        itemStyle: {
          color: '#fff'
        },
        align: 'center',

        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },

      credits: {
        enabled: false
      },
      title: {
        text: null,
        align: 'center',
        verticalAlign: 'middle',
        y: 3,
        style: {
          color: '#a4a0a0',
          fontSize: '12px',
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -180,
          endAngle: 180,
          center: ['50%', '50%'],
          size: '100%'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          style: {
            color: 'fff'
          },
          format: '{value}',
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },

        title: {
          text: null,
        },
      },
      series: [{
        type: 'pie',
        showInLegend: false,
        innerSize: '90%',
        borderColor: null,
        data: [
          ['Acceleration', acc],
          ['Braking', braking],
          ['Speed', speed]
        ]
      }],
      tooltip: {
        // valueSuffix: '°F'
      }
    };
    this.harshevents = new Chart(this.options);
  }

  HoursChart(drivetime, idletime, stoptime) {
    this.options = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'bar',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: null,
        style: {
          color: '#fff'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          style: {
            color: 'fff'
          },
          format: '{value}',
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [{
        name: "Drive Time",
        showInLegend: false,
        // borderColor: null,
        data: [drivetime],
        color: '#8ba9ff',
        pointWidth: 15
      },
      {
        name: "Idle Time",
        showInLegend: false,
        // borderColor: null,
        data: [idletime],
        color: '#4f76ad',
        pointWidth: 15
      },
      {
        name: "Stop Time",
        showInLegend: false,
        // borderColor: null,
        data: [stoptime],
        color: '#4f76ad',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: 'Hrs'
      }
    };
    this.hourschart = new Chart(this.options);
  }

  MilesChart(miles, totaltrips, unauthorizedMiles) {
    this.options = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'bar',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: '#fff'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: null,
        style: {
          color: '#fff'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          style: {
            color: 'fff'
          },
          format: '{value}',
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [
        {
          name: "Miles",
          showInLegend: false,
          borderColor: null,
          data: [miles],
          color: '#4f76ad',
          pointWidth: 15
        },
        {
          name: "Unauthorized Miles",
          showInLegend: false,
          borderColor: null,
          data: [unauthorizedMiles],
          color: '#8ba9ff',
          pointWidth: 15
        },
        {
          name: "Total Trips",
          showInLegend: false,
          borderColor: null,
          data: [totaltrips],
          color: '#4f76ad',
          pointWidth: 15
        }
      ],
      tooltip: {
        valueSuffix: 'Hrs'
      }
    };
    this.mileschart = new Chart(this.options);
  }

  hrsAccChart(hrsAcc) {
    
    this.accOptions = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'line',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: "Acceleration",
        style: {
          color: 'black'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          enabled: true,
          style: {
            color: 'black'
          },
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [{
        name: "Acceleration",
        showInLegend: false,
        // borderColor: null,
        data: [],
        color: '#8ba9ff',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: 'Acc'
      }
    };
    this.hoursAccChart = new Chart(this.options);
  }

  hrsBrakingChart(hrsAcc) {
    
    this.brakingOptions = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'line',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: "Braking",
        style: {
          color: 'black'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          enabled: true,
          style: {
            color: 'black'
          },
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [
      {
        name: "Braking",
        showInLegend: false,
        // borderColor: null,
        data: [],
        color: '#8ba9f8',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: ''
      }
    };
    this.hoursBrakingChart = new Chart(this.options);
  }

  hrsSpeedChart(hrsAcc) {
    
    this.speedOptions = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'line',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: "Speed",
        style: {
          color: 'black'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          enabled: true,
          style: {
            color: 'black'
          },
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [
      {
        name: "Speeding",
        showInLegend: false,
        // borderColor: null,
        data: [],
        color: '#8ba9f8',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: 'Mph'
      }
    };
    this.hoursSpeedChart = new Chart(this.speedOptions);
  }

  DriveChart(drivemins) {
    console.log(drivemins);
    this.driveOptions = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'line',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Drive Time',
        style: {
          color: 'black'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          enabled: true,
          style: {
            color: 'black'
          },
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [
      {
        name: "Drive Time",
        showInLegend: false,
        // borderColor: null,
        data: [10, 20 , 5],
        color: '#8ba9f8',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: 'Mins'
      }
    };
    this.driveChart = new Chart(this.driveOptions);
  }

  IdleChart() {
    this.idleOptions = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'line',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Idle Time',
        style: {
          color: 'black'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          enabled: true,
          style: {
            color: 'black'
          },
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [
      {
        name: "Idle Time",
        showInLegend: false,
        // borderColor: null,
        data: [10, 20 , 5],
        color: '#8ba9f8',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: 'Mins'
      }
    };
    this.idleChart = new Chart(this.idleOptions);
  }
  StopChart() {
    this.stopOptions = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'line',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Stop Time',
        style: {
          color: 'black'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          enabled: true,
          style: {
            color: 'black'
          },
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [
      {
        name: "Stop Time",
        showInLegend: false,
        // borderColor: null,
        data: [10, 20 , 5],
        color: '#8ba9f8',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: 'Mins'
      }
    };
    this.stopChart = new Chart(this.stopOptions);
  }

  MileChart() {
    this.mileOptions = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'line',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Miles',
        style: {
          color: 'black'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          enabled: true,
          style: {
            color: 'black'
          },
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [
      {
        name: "Miles",
        showInLegend: false,
        // borderColor: null,
        data: [10, 20 , 5],
        color: '#8ba9f8',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: 'Miles'
      }
    };
    this.mileChart = new Chart(this.mileOptions);
  }

  UnauthorizedMileChart() {
    this.unauthorizedMileOptions = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'line',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Unauthorized Miles',
        style: {
          color: 'black'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          enabled: true,
          style: {
            color: 'black'
          },
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [
      {
        name: "Unauthorized Miles",
        showInLegend: false,
        // borderColor: null,
        data: [10, 20 , 5],
        color: '#8ba9f8',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: 'Miles'
      }
    };
    this.unauthorizedMileChart = new Chart(this.unauthorizedMileOptions);
  }

  TripChart() {
    this.tripOptions = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'line',
        style: {
          color: 'white',
        },
      },
      legend: {
        itemStyle: {
          color: 'black'
        },
        align: 'center',
        verticalAlign: 'top',
        floating: false,
        style: {
          color: '#fff'
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Trips',
        style: {
          color: 'black'
        }
      },
      xAxis: {
        tickInterval: 1,
        // type: 'datetime',
        // categories: time,
        labels: {
          enabled: true,
          style: {
            color: 'black'
          },
        },
      },
      yAxis: {
        gridLineColor: 'transparent',
        labels: {
          format: '{value}',
          style: {
            color: 'fff'
          }
        },
        title: {
          text: null,
        },
      },
      series: [
      {
        name: "Trips",
        showInLegend: false,
        // borderColor: null,
        data: [10, 20 , 5],
        color: '#8ba9f8',
        pointWidth: 15
      }
      ],
      tooltip: {
        valueSuffix: 'Miles'
      }
    };
    this.tripChart = new Chart(this.tripOptions);
  }

  getParams() {
    var today = this.searchtodata;
    var yesterday = this.searchfromdata;
    let body = {
      "username":"info@dataagile.com",
      "password":"conquest",
      "fromDate": yesterday,
      "toDate":today
    };
    return body;
  }

  loadmapdata() {
    this.getUpdateVehicleInterval = setInterval(() => {
      var body = {
        "username": "info@dataagile.com",
        "password": "conquest"
      }
      this.databotService.getVehicleLocations(this.getParams()).subscribe(res => {
        var data = res['data']['locations'];
        for(let item of data) {
          if(item['personName'] == this.driver) {
            this.showVehicle(item);
          }
        }
      });
    },5000);
    
  }
  
  loadmap() {
    var body = {
      "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getVehicleLocations(this.getParams()).subscribe(res => {
      var data = res['data']['locations'];
      for(let item of data) {
        if(item['personName'] == this.driver) {
          // this.showVehicle(item);
          this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: new google.maps.LatLng(item.latitude, item.longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false
          });
        }
      }
    });
  }

  showVehicle(vehicle) {
    var startmarker;
    var endmarker;
    var i;
    var image = {
      url: '../../assets/images/warehouse.png',
      scaledSize: new google.maps.Size(50, 50),
    };
    var infowindow = new google.maps.InfoWindow();
    startmarker = new google.maps.Marker({
      position: new google.maps.LatLng(vehicle.latitude, vehicle.longitude),
      map: this.map,
      icon:image
    });
    this.map.panTo(startmarker.getPosition());
    startmarker.addListener('mouseover', function () {
      infowindow = new google.maps.InfoWindow({
          content:'<b><p style="color:#0472b0;text-weight:bold">' + 'Driver Name:' + vehicle.personName + '</p></b>'
          +'<b><p style="color:#0472b0;text-weight:bold">' + 'Fuel:' + vehicle.fuelLevel + '</p></b>'
          +'<b><p style="color:#0472b0;text-weight:bold">' + 'Battery:' + vehicle.battery + '</p></b>'
          +'<b><p style="color:#0472b0;text-weight:bold">' + 'Speed:' + vehicle.speed + '</p></b>'
      });
      infowindow.open(this.map, startmarker);
    });
    startmarker.addListener('mouseout', function() {
      infowindow.close(startmarker.get('map'), startmarker);
    });
  }

  getvehicleAlerts() {
    this.highSpeed = 0;
    this.hrsSpeed = [];
    this.databotService.getVehicleAlerts(this.getParams()).subscribe(data => {
      console.log(data);
      for(let item of data['data']['alerts']) {
        if(item['alertCode'] == 'HIGH_SPEED') {
             console.log(item);
             this.hrsSpeedChart(this.hrsSpeed);
             this.highSpeed = this.highSpeed + 1;
             let highspeed = 1;
             this.hrsSpeed.push(highspeed);
        }
      }
      let speed = this.hrsSpeed;
      this.HarshEvents('','',this.highSpeed);
      this.speedOptions.series[0].data = speed;
      this.hoursSpeedChart = new Chart(this.speedOptions);
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
      "fromDate": yesterday,
      "toDate": today
    }
    this.databotService.getVehicleStops(body).subscribe(res => {
      var stops = res['data']['stops'];
      this.getIdlingEvents(stops);
    });
  }

  vehicleDDChange(event) {
    //  let data = [50];
    //   this.options.series[0].data = data;
    //   this.hourschart = new Chart(this.options);
    // this.hourschart.addPoint(100);
    this.imei = event.currentTarget.value;
    this.getDeviceEvents(this.imei);
    clearInterval(this.getUpdateVehicleInterval);
  }

  loadData() {
    // this.getDeviceEvents(this.imei);
    // this.gettripevent();var body = {
    var body = { "username": "info@dataagile.com",
      "password": "conquest"
    }
    this.databotService.getCurrentPostition(body).subscribe(data =>{
      var mapdata = data['data']['positions'];
      this.mapdata = mapdata;
    });
  }

  getDeviceEvents(number) {
    console.log(new Date().getTime());
    this.hrs = [];
    this.hrsAcc = [];
    var $this = this;
    $this.todayAcceleration = 0;
    $this.todayBraking = 0;
    // console.log(moment(1564337311686).format('MMM DD, YYYY') == moment(1564165457000).format('MMM DD, YYYY'));
    var today = Date.now();
    var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 2;
    var yest = new Date(yesterday);
    let body = {
      "username": "info@dataagile.com",
      "password": "conquest",
      "imei": this.imei,
      "fromDate": yesterday,
      "toDate": today
    }
    this.databotService.getVehicleHistory(body).subscribe(result => {
      var positions = result['data']['positions'];
      var stops = result['data']['stops'];
      this.driver = result['data']['positions'][0]['personName'];
      this.gettripevent();
      this.getIdlingEvents(stops);
      this.loadmapdata();
      // this.getvehicleAlerts();
      for (let item of positions) {
        let today = moment(Date.now()).format('MMM DD, YYYY');
        let todayfromdata = moment([item]['date']).format('MMM DD, YYYY');
        var dateString = moment().subtract(1, 'days').toString();
        var dateObj = new Date(dateString);
        var momentObj = moment(dateObj);
        var momentString = momentObj.format('MMM DD, YYYY');
        if (item['behaviorCd'] == 'HAC' && (today == todayfromdata)) {
          this.hrsAccChart(this.hrsAcc);
          let acceleration = 1;
          let hoursAccTrack = moment([item]['date']).format('H:mm:ss');
          $this.todayAcceleration = $this.todayAcceleration + 1;
          this.hrsAcc.push(acceleration);
          this.hrs.push(hoursAccTrack);

        }
        if (item['behaviorCd'] == 'HBR' && (today == todayfromdata)) {
          let braking = 1;
          $this.todayBraking = $this.todayBraking + 1;
          this.hrsBraking.push(braking);
          let hoursAccTrack = moment([item]['date']).format('H:mm:ss');
          this.hrs.push(hoursAccTrack);
          this.hrsBrakingChart(this.hrsBraking);

        }
      }
      let accelerationData = this.hrsAcc;
      let brakingData = this.hrsBraking;
      let hrs = this.hrs;
      if (this.accOptions) {
        this.accOptions.xAxis.categories = hrs;
        this.accOptions.series[0].data = accelerationData;
      }
      this.brakingOptions.xAxis.categories = hrs;
      this.brakingOptions.series[0].data = brakingData;
      this.hoursAccChart = new Chart(this.accOptions);
      this.hoursBrakingChart = new Chart(this.brakingOptions);
      // this.options.series[0].data = data;
      // this.hoursAccChart = new Chart(this.options);
      this.HarshEvents(this.todayAcceleration, this.todayBraking, this.highSpeed);
    });
    console.log(new Date().getTime());
  }
f
  /**Get engine idling events */
  getIdlingEvents(stops) {
    let $this = this;
    $this.todayIdling = 0;
    $this.lastDayIdling = 0;
    $this.weekIdling = 0;
    $this.stoptime = 0
    $this.idlingtime = 0;
    this.stopmins = [];
    this.idlemins = [];
    // tslint:disable-next-line: forin
    for (var item in stops) {
      let today = moment(Date.now()).format('MMM DD, YYYY');
      let todayfromdata = moment(stops[item]['beginDate']).format('MMM DD, YYYY');
      let endfromdate = moment(stops[item]['endDate']).format('MMM DD, YYYY');
      var dateString = moment().subtract(1, 'days').toString();
      var dateObj = new Date(dateString);
      var momentObj = moment(dateObj);
      var momentString = momentObj.format('MMM DD, YYYY');
      if (stops[item]['deviceNbr'] == this.imei && (stops[item]['stopType'] == 'Engine Off') && (today == todayfromdata)) {
        $this.stoptime = $this.stoptime + stops[item]['duration'];
        this.stopmins.push(stops[item]['duration']);
        this.StopChart();
      }
      if (stops[item]['deviceNbr'] == this.imei && (stops[item]['stopType'] == 'Idling') && (today == todayfromdata)) {
        $this.idlingtime = $this.idlingtime + stops[item]['duration'];
        this.idlemins.push(stops[item]['duration']);
        this.IdleChart();
      }
    }
    let idlemins = this.idlemins;
    let stopmins = this.stopmins;
    if(this.idleOptions) {
      this.idleOptions.series[0].data = idlemins;
      this.idleChart = new Chart(this.idleOptions);
    }
    if(this.stopOptions) {
      this.stopOptions.series[0].data = stopmins;
      this.stopChart = new Chart(this.stopOptions);
    }
  }

  gettripevent() {
    var today = Date.now();
    var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 2;
    let body = {
      "username": "info@dataagile.com",
      "password": "conquest",
      "fromDate": yesterday,
      "toDate": today
    }
    this.databotService.getVehicleTrips(body).subscribe(result => {
      this.trips = result['data']['trips'];
      this.getTotalDriveTime(this.trips);
    });
  }

  getTotalDriveTime(trips) {
    this.drivetime = 0;
    this.miles = 0;
    this.totaltrips = 0;
    this.unauthorizedMiles = 0;
    this.drivemins = [];
    this.mile = [];
    this.unauthorizedMile = [];
    this.trip = [];
    for (let item of trips) {
      if (item['driverName'] == this.driver) {
        this.DriveChart('');
        this.MileChart();
        this.UnauthorizedMileChart();
        this.TripChart();
        this.miles = this.miles + item['authorizedMiles'];
        this.unauthorizedMiles = this.unauthorizedMiles + item['unauthorizedMiles'];
        this.drivetime = this.drivetime + item['durationMinutes'];
        this.totaltrips = this.totaltrips + 1;
        this.startLat = item['startLatitude'];
        this.startLong = item['startLongitude'];
        this.endLat = item['endLatitude'];
        this.endLong = item['endLongitude'];
        this.drivemins.push(item['durationMinutes']);
        this.mile.push(item['authorizedMiles']);
        this.unauthorizedMile.push(item['unauthorizedMiles']);
        this.trip.push(this.totaltrips);
      }
    }
    // this.driveOptions.xAxis.categories = drivetime;
    let drivemins = this.drivemins;
    let mile = this.mile;
    let unauthorizedMile = this.unauthorizedMile;
    let trip = this.trip;
    if(this.driveOptions) {
      this.driveOptions.series[0].data = drivemins;
      this.driveChart = new Chart(this.driveOptions);
    }
    if(this.mileOptions) {
      this.mileOptions.series[0].data = mile;
      this.mileChart = new Chart(this.mileOptions);
    }
    if(this.unauthorizedMileOptions) {
      this.unauthorizedMileOptions.series[0].data = unauthorizedMile;
      this.unauthorizedMileChart = new Chart(this.unauthorizedMileOptions);
    }
    if(this.tripOptions) {
      this.tripOptions.series[0].data = trip;
      this.tripChart = new Chart(this.tripOptions);
    }
    this.HoursChart(this.drivetime, this.idlingtime, this.stoptime);
    this.MilesChart(this.miles, this.totaltrips, this.unauthorizedMiles);
    //  this.updateHarshEventsChart();
  }

  loadRoute() {
    //console.log(mapdata);
    var $this = this;
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(this.startLat, this.startLong),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false
    });

    var infowindow = new google.maps.InfoWindow();
    var startmarker;
    var endmarker;
    var i;
    var image = {
      url: '../../assets/images/warehouse.png',
      scaledSize: new google.maps.Size(50, 50),
    };
    startmarker = new google.maps.Marker({
      position: new google.maps.LatLng(this.startLat, this.startLong),
      map: this.map,
      icon:image
    });
    endmarker = new google.maps.Marker({
      position: new google.maps.LatLng(this.endLat, this.endLong),
      map: this.map,
      icon:image
    });
    
    var service = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var src = new google.maps.LatLng(this.startLat, this.startLong);
    var des = new google.maps.LatLng(this.endLat, this.endLong);
    var request = {
      origin: src,
      destination: des,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    service.route(request, function(response, status) {
      if (status == 'OK') {
        // var lineSymbol = {
        //   path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
        // };
        // var line = new google.maps.Polyline({
        //   path: [src,des],
        //   icons: [{
        //     icon: lineSymbol,
        //     offset: '100%'
        //   }],
        //   map: this.map
        // });
        // directionsDisplay.setDirections(response);
        // tslint:disable-next-line: no-unused-expression
        new google.maps.DirectionsRenderer({
          map: this.map,
          directions: response
        });
      }else{
        // alert('something went wrong');
      }
    });
  }

}
