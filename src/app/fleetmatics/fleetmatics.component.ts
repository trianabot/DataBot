import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DatabotService } from './../core/databot.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
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
  driver: any;
  location: any;

  private hourschart = new Chart({
    
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
    series: [{
      // name: "Speed",
      // showInLegend: false,
      // borderColor: null,
      data: [20],
      color: '#8ba9ff',
      pointWidth: 15
    },
    {
      // name: "Speed",
      // showInLegend: false,
      // borderColor: null,
      data: [15],
      color: '#4f76ad',
      pointWidth: 15
    },
    {
      // name: "Speed",
      // showInLegend: false,
      // borderColor: null,
      data: [15],
      color: '#4f76ad',
      pointWidth: 15
    },
    {
      // name: "Speed",
      // showInLegend: false,
      // borderColor: null,
      data: [15],
      color: '#4f76ad',
      pointWidth: 15
    }
    ],
    tooltip: {
      valueSuffix: 'Hrs'
    }
  });

  constructor(public databotService: DatabotService, private route: ActivatedRoute) {
    if (localStorage.getItem('username') == 'melrosepark' || localStorage.getItem('username') == 'Melrosepark') {
      this.tenantOverview = true;
      this.Overview = false;
    } else {
      this.tenantOverview = false;
      this.Overview = true;
    }
  }

  ngOnInit() {
    const jsonString: string = this.route.snapshot.queryParamMap.get('vehicle');
    const drivername = this.route.snapshot.queryParamMap.get('drivername');
    const location = this.route.snapshot.queryParamMap.get('location');
    this.selected = 1;
    if(jsonString) {
      this.imei = JSON.parse(jsonString);
      this.drivername = JSON.parse(drivername);
      this.driver = JSON.parse(drivername);
      this.location = JSON.parse(location);
      console.log(this.location);
      this.getDeviceEvents(this.imei);
      this.HarshEvents();
      this.HoursChart();
      this.Speeding();
      this.MilesChart();
      this.loadmapdata();
      // this.getIdlingAllDevices();
      this.gettripevent();
    }else {
      this.HarshEvents();
      this.HoursChart();
      this.Speeding();
      this.MilesChart();
      this.loadmapdata();
      this.getIdlingAllDevices();
      this.gettripevent();

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

  HarshEvents() {
    this.options = {
      chart: {
        backgroundColor: '#f9f9f8',
        height: 200,
        // width: 373,
        type: 'column',
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
        text: '45',
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
        name: 'Browser share',
        innerSize: '90%',
        borderColor: null,
        data: [
          ['Chrome', 58.9],
          ['Firefox', 13.29]
        ]
      }],
      tooltip: {
        valueSuffix: '°F'
      }
    };
    this.harshevents = new Chart(this.options);
  }

  HoursChart() {
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
      series: [{
        // name: "Speed",
        showInLegend: false,
        borderColor: null,
        data: [20],
        color: '#8ba9ff',
        pointWidth: 15
      },
      {
        // name: "Speed",
        showInLegend: false,
        borderColor: null,
        data: [15],
        color: '#4f76ad',
        pointWidth: 15
      },
      {
        // name: "Speed",
        showInLegend: false,
        borderColor: null,
        data: [15],
        color: '#4f76ad',
        pointWidth: 15
      },
      {
        // name: "Speed",
        showInLegend: false,
        borderColor: null,
        data: [15],
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


  Speeding() {
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
        // text: '45',
        align: 'center',
        verticalAlign: 'middle',
        // y: 3,
        style: {
          color: '#a4a0a0',
          // fontSize: '12px',
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          }
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
        name: 'Speeding',
        colorByPoint: true,
        data: [{
          name: 'CAT1',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'CAT2',
          y: 11.84
        }, {
          name: 'CAT3',
          y: 10.85
        }]
      }],
      tooltip: {
        valueSuffix: '°F'
      }
    };
    this.speedingchart = new Chart(this.options);
  }

  MilesChart() {
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
      series: [{
        // name: "Speed",
        showInLegend: false,
        borderColor: null,
        data: [20],
        color: '#8ba9ff',
        pointWidth: 15
      },
      {
        // name: "Speed",
        showInLegend: false,
        borderColor: null,
        data: [15],
        color: '#4f76ad',
        pointWidth: 15
      },
      {
        // name: "Speed",
        showInLegend: false,
        borderColor: null,
        data: [15],
        color: '#4f76ad',
        pointWidth: 15
      },
      {
        // name: "Speed",
        showInLegend: false,
        borderColor: null,
        data: [15],
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
      // this.loadmap(mapdata);
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
    // this.hourschart.series[0].setData([100]);
     console.log(event.currentTarget.value);
     this.imei = event.currentTarget.value;
     this.loadData();
    //  this.getDeviceEvents(this.imei);
    // var today = Date.now();
    // var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 2;   // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
    // console.log(today, yesterday);
    // var yest = new Date(yesterday);
    // // console.log(yest+""+yesterday);​
    // let body = {
    //   "username":"info@dataagile.com",
    //   "password":"conquest",
    //   "imei":this.imei,
    //   "fromDate": yesterday,
    //   "toDate":today
    // }
    // this.databotService.getVehicleHistory(body).subscribe(result => {
    //   console.log(result);
    //   var positions  = result['data']['positions'];
    //   var stops = result['data']['stops'];
    //   this.drivername = result['data']['positions'][0]['personName'];
    //   this.getBrakingIdlingEvents(positions);
    //   this.getIdlingEvents(stops);
    //   this.getTotalDriveTime(this.trips);
    // });
  }
  
loadData() {
  this.getDeviceEvents(this.imei);
  // this.gettripevent();
}

  

  getDeviceEvents(number){
    var $this = this;
    $this.todayAcceleration = 0;
    $this.todayBraking = 0;
    // console.log(moment(1564337311686).format('MMM DD, YYYY') == moment(1564165457000).format('MMM DD, YYYY'));
    var today = Date.now();
    var yesterday = Date.now() - 1000 * 60 * 60 * 24 * 2;   // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
    console.log(today, yesterday);
    var yest = new Date(yesterday);
    // console.log(yest+""+yesterday);​
    let body = {
      "username":"info@dataagile.com",
      "password":"conquest",
      "imei":this.imei,
      "fromDate": yesterday,
      "toDate":today
    }
    this.databotService.getVehicleHistory(body).subscribe(result => {
      console.log(result);
      var positions  = result['data']['positions'];
      var stops = result['data']['stops'];
      this.driver = result['data']['positions'][0]['personName'];
      console.log(this.driver);
      this.gettripevent();
      this.getIdlingEvents(stops);
      for(let item of positions) {
        let today = moment(Date.now()).format('MMM DD, YYYY');
        let todayfromdata = moment([item]['date']).format('MMM DD, YYYY');
        var dateString = moment().subtract(1, 'days').toString();
        var dateObj = new Date(dateString);
        var momentObj = moment(dateObj);
        var momentString = momentObj.format('MMM DD, YYYY');
        if(item['behaviorCd'] == 'HAC' && (today == todayfromdata)) {
          $this.todayAcceleration = $this.todayAcceleration + 1;
          console.log($this.todayAcceleration);
        }
        if(item['behaviorCd'] == 'HBR' && (today == todayfromdata)) {
          $this.todayBraking = $this.todayBraking + 1;
          console.log($this.todayBraking);
        }
      }
      // this.drivername = result['data']['positions'][0]['personName'];
      // this.getBrakingIdlingEvents(positions);
      // this.getIdlingEvents(stops);
      // this.getTotalDriveTime(this.trips);
    });
  }


  
  getBrakingIdlingEvents(positions){
    console.log(positions);
    // this.weekAcceleration = 0;
    // this.weekBraking = 0;
    // this.todayAcceleration = 0;
    // this.todayBraking = 0;
    // this.lastDayAcceleration = 0;
    // this.lastDayBraking = 0;
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
    let $this = this;
    $this.todayIdling = 0;
    $this.lastDayIdling = 0;
    $this.weekIdling = 0;
    $this.stoptime = 0
    $this.idlingtime = 0;
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
      if(stops[item]['deviceNbr'] == this.imei && (stops[item]['stopType'] == 'Engine Off') && (today == todayfromdata)) {
             $this.stoptime = $this.stoptime + stops[item]['duration'];
             console.log($this.stoptime);
      }
      if(stops[item]['deviceNbr'] == this.imei && (stops[item]['stopType'] == 'Idling') && (today == todayfromdata)) {
        $this.idlingtime = $this.idlingtime + stops[item]['duration'];
        console.log($this.idlingtime);
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
      // console.log(item);
      if(item['driverName'] == this.driver) {
          this.drivetime = this.drivetime + item['durationMinutes'];
          console.log(this.drivetime)
      }
    }
}

}
