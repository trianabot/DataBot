import { DatabotService } from './../../core/databot.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Highcharts } from 'angular-highcharts';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-hrms-usecase1',
  templateUrl: './hrms-usecase1.component.html',
  styleUrls: ['./hrms-usecase1.component.css']
})
export class HrmsUsecase1Component implements OnInit {
  stockchartcategories: any;
  negativStack: any;
  stockagingchart: any;
  options: any;
  hrdashboardData: any;
  employeecount: any;
  fulltimeemployee: any = [];
  traineeemployee: any = [];
  contractemployee: any = [];
  femaleemployee: any = [];
  maleemployee: any = [];
  oneBandemployee: any = [];
  twoBandemployee: any = [];
  threeBandemployee: any = [];
  fourBandemployee: any = [];
  fiveBandemployee: any = [];
  sixBandemployee: any = [];
  sevenBandemployee: any = [];
  fulltimeemployeeCount: any;
  traineeemployeeCount: any;
  contractemployeeCount: any;
  femaleemployeeCount: any;
  maleemployeeCount: any;
  averageSalary: any;
  averageExperience: any;
  averageattritionRate: any;
  averageSatisfaction: any;
  category:any;
  cardSelected: any;
  tableAttritionHeaders = [];
  attritionData:any;
  ethnicityData:any;
  /**Age group */
  eighteentwentyfive:any;
  twentyfivethirty:any;
  thirtyonetothirtyfive:any;
  thirtysixtofourty:any;
  greaterfoutry:any;

  grad:any;
  postgra:any;
  undergrad:any;




 /**Age group */


  constructor(public databotService: DatabotService, public router: Router,public http: HttpClient) {

    this.hiredChart();
  }

  ngOnInit() {
    this.cardSelected = 1;
    this.loadJsonData();
    this.loadAttritionRate();
    this.loadEthnicityData();
    this.eighteentwentyfive =409;
    this.twentyfivethirty = 356;
    this.thirtyonetothirtyfive =175;
    this.thirtysixtofourty =48;
    this.greaterfoutry =12;
    this.grad = 700;
    this.postgra=168;
    this.undergrad =132;


  }

  loadJsonData() {
    this.databotService.loadHrdashboard1().subscribe(data => {
      console.log(data);
      this.hrdashboardData = data;
      this.employeecount = this.hrdashboardData.length;
      this.filterData(data);
      this.filterBandData(data);
      this.filterAverageData(data);
      this.departmentChart(data);
    });

  }


 loadAttritionRate(){
    this.databotService.loadAttritionData().subscribe(data => {
      this.attritionData = data;
     
      let responseData = data[0];
      for (var key in responseData) {
        if (responseData.hasOwnProperty(key)) {
            this.tableAttritionHeaders.push(key);
        }
      }
    })
  }

  loadEthnicityData(){
    this.http.get('../../assets/data/ethnicity.json').subscribe(data => {
      this.ethnicityData = data;
      // alert(JSON.stringify(this.ethnicityData))
    });
 

  }



  filterBandData(banddata) {
    for (var i = 0; i < banddata.length; i++) {
      if (banddata[i]['Employee Band'] == 1) {
        this.oneBandemployee.push(banddata[i]['Employee Band']);
      } else if (banddata[i]['Employee Band'] == 2) {
        this.twoBandemployee.push(banddata[i]['Employee Band']);
      } else if (banddata[i]['Employee Band'] == 3) {
        this.threeBandemployee.push(banddata[i]['Employee Band']);
      } else if (banddata[i]['Employee Band'] == 4) {
        this.fourBandemployee.push(banddata[i]['Employee Band']);
      } else if (banddata[i]['Employee Band'] == 5) {
        this.fiveBandemployee.push(banddata[i]['Employee Band']);
      } else if (banddata[i]['Employee Band'] == 6) {
        this.sixBandemployee.push(banddata[i]['Employee Band']);
      } else if (banddata[i]['Employee Band'] == 7) {
        this.sevenBandemployee.push(banddata[i]['Employee Band']);
      }
    }

    this.bandChart(this.oneBandemployee, this.twoBandemployee, this.threeBandemployee, this.fourBandemployee, this.fiveBandemployee, this.sixBandemployee, this.sevenBandemployee);
  }

  filterData(hrdata) {
    for (var i = 0; i < hrdata.length; i++) {
      if (hrdata[i]['Employement'] == 'Full Time') {
        this.fulltimeemployee.push(hrdata[i]['Employement']);
      }
      if (hrdata[i]['Employement'] == 'Trainee') {
        this.traineeemployee.push(hrdata[i]['Employement']);
      }
      if (this.hrdashboardData[i]['Employement'] == 'Contract') {
        this.contractemployee.push(hrdata[i]['Employement']);
      }
      if (hrdata[i]['Gender'] == 'Male') {
        this.maleemployee.push(hrdata[i]['Gender']);
      }
      if (hrdata[i]['Gender'] == 'Female') {
        this.femaleemployee.push(hrdata[i]['Gender']);
      }
    }
    this.traineeemployeeCount = this.traineeemployee.length;
    this.fulltimeemployeeCount = this.fulltimeemployee.length;
    this.contractemployeeCount = this.contractemployee.length;
    this.femaleemployeeCount = this.femaleemployee.length;
    this.maleemployeeCount = this.maleemployee.length;
  }

  filterAverageData(avgdata) {
    var averageSal = 0;
    var averageExp = 0;
    var attrRate = 0;
    var satisRate = 0;
    for (var i = 0; i < avgdata.length; i++) {
      averageSal += avgdata[i]['Salary'];
      averageExp += avgdata[i]['Experience'];
      attrRate += avgdata[i]['Attrition rate'];
      satisRate += avgdata[i]['Satisfaction Index'];
    }

    this.averageSalary = averageSal / this.employeecount;
    this.averageExperience = averageExp / this.employeecount;
    this.averageattritionRate = attrRate / this.employeecount;
    this.averageSatisfaction = satisRate / this.employeecount;

  }

  bandChart(oneband, twoband, threeband, fourband, fiveband, sixband, sevenband) {
    var $this = this;
    this.options = {
      chart: {
        type: 'pie',
        height: 200,
        options3d: {
          enabled: true,
          alpha: 45,

        },
        style: {
          fontFamily: 'Ubuntu,sans-serif'
        }

      },
      title: {
        text: ''
      },
      credits: {
        enabled: null
      },

      plotOptions: {
        pie: {
          innerSize: 40,
          depth: 20,
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          point: {
            events: {
              click: function (): any {
                $this.getPieAvgData(this.name, this.y);
              },
            }
          }
        }
      },


      series: [{
        name: "",
        data: [
          { name: '1', y: oneband.length, color: '#3d7baa' },
          { name: '2', y: twoband.length, color: '#ea1651' },
          { name: '3', y: threeband.length, color: '#f7c13b' },
          { name: '4', y: fourband.length, color: '#fe0000' },
          { name: '5', y: fiveband.length, color: '#40c5d6' },
          { name: '6', y: sixband.length, color: '#e932ff' },
          { name: '7', y: sevenband.length, color: '#40ec58' },

          // ['Year',5, ],
          // ['one month', 2],
          // ['Six Month', 7],
          // ['One Year', 9],

        ]
      }]



    };
    this.stockagingchart = new Chart(this.options);
  }
  departmentChart(itbandone) {
    var $this = this;
    var UNDEFINED;
    this.options = {
      chart: {
          type: 'column',
          height:200
      },
      title: {
          text: '',

      },
      xAxis: {
          categories:["Admin","Accounting","IT","Marketing","Sales","Legal"]
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: 'gray'
              }
          },
          gridLineColor: 'transparent',
          labels:{
              enabled:false
           },


      },

      credits: {
        enabled: false
    },
      legend: {
         enabled:false
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: false,
                  color: 'black'
              }
          }
      },
      series: [
        {
          name: 'Band 1',
          data: [31,42,52,43,16,28],
          color: '#3D7BAA'
        },
        {
          name: 'Band 2',
          data: [37,31,52,23,30,24],
          color: '#42506D'
        },
        {
          name: 'Band 3',
          data: [31,31,75,44,19,35],
          color: '#F7C13B'
        },
        {
          name: 'Band 4',
          data: [29,29,35,26,10,25],
          color: '#EA1651'
        },
        {
          name: 'Band 5',
          data: [0,18,33,15,16,13],
          color: '#E932FF'
        },
        {
          name: 'Band 6',
          data: [0,10,27,10,7,10],
          color: '#2CAFC4'
        },
        {
          name: 'Band 7',
          data: [0,6,22,5,6,4],
          color: '#3D7BAA'
    }
  ]
  };
    this.stockchartcategories = new Chart(this.options);
  }

  ethinicityChart(itbandone) {
    var $this = this;
    var UNDEFINED;
    this.options = {
      chart: {
          type: 'column',
          height:200
      },
      title: {
          text: '',

      },
      xAxis: {
          categories:["Admin","Accounting","IT","Marketing","Sales","Legal"]
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: 'gray'
              }
          },
          gridLineColor: 'transparent',
          labels:{
              enabled:false
           },


      },

      credits: {
        enabled: false
    },
      legend: {
         enabled:false
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: false,
                  color: 'black'
              }
          }
      },
      series: [
        {
          name: 'White',
          data: [23,35,58,40,21,27],
          color: '#3D7BAA'
        },
        {
          name: 'Africian Americian',
          data: [60,28,52,31,14,25],
          color: '#42506D'
        },
        {
          name: 'Latin Americian',
          data: [32,40,62,39,26,33],
          color: '#F7C13B'
        },
        {
          name: 'Asian',
          data: [27,35,57,30,18,30],
          color: '#EA1651'
        },
        {
          name: 'Other',
          data: [30,29,67,26,25,25],
          color: '#E932FF'
        },
      
  ]
  };
    this.stockchartcategories = new Chart(this.options);
  }


  ageGroupChart(itbandone) {
    var $this = this;
    var UNDEFINED;
    this.options = {
      chart: {
          type: 'column',
          height:200
      },
      title: {
          text: '',

      },
      xAxis: {
          categories:["Admin","Accounting","IT","Marketing","Sales","Legal"]
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: 'gray'
              }
          },
          gridLineColor: 'transparent',
          labels:{
              enabled:false
           },


      },

      credits: {
        enabled: false
    },
      legend: {
         enabled:false
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: false,
                  color: 'black'
              }
          }
      },
      series: [
        {
          name: '18-25',
          data: [68,73,104,66,46,52],
          color: '#3D7BAA'
        },
        {
          name: '26-30',
          data: [51,55,103,67,27,53],
          color: '#42506D'
        },
        {
          name: '31-35',
          data: [9,31,57,24,24,30],
          color: '#F7C13B'
        },
        {
          name: '35-40',
          data: [0,7,22,7,3,4],
          color: '#EA1651'
        },
        {
          name: 'Above 40',
          data: [0,1,7,2,2,0],
          color: '#E932FF'
        },
      
  ]
  };
    this.stockchartcategories = new Chart(this.options);
  }








  hiredChart() {
    var categories = [
      "IT",

      "Accounting",

      "Marketing",

      "Sales",

      "Admin",

      "Legal"
    ];
    this.options = {

      chart: {
        type: "bar",
        height: 375
      },
      title: {
        text: ""
      },
      subtitle: {
        text:
          ''
      },
      xAxis: [
        {
          categories: categories,
          reversed: false,



          labels: {
            step: 1
          },

        },

        {
          // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: categories,
          linkedTo: 0,
          labels: {
            step: 1
          }
        }
      ],
      yAxis: {

        title: {
          text: null
        },
        labels: {
          formatter: function () {
            return Math.abs(this.value) + "%";
          }
        }
      },
      credits: {
        enabled: false
    },

      plotOptions: {
        series: {
          stacking: "normal",
          pointWidth: 20,


        }
      },

      tooltip: {
        formatter: function () {
          return (
            "<b>" +
            this.series.name +
            ", age " +
            this.point.category +
            "</b><br/>" +
            "Population: " +
            Highcharts.numberFormat(Math.abs(this.point.y), 0)
          );
        }
      },

      series: [
        {
          name: "Employees left",
          data: [
            -2.9,
            -3.5,
            -4.4,
            -4.1,
            -3.4,
            -2.7,
          ],
          color: "#ea2537",
        },
        {
          name: "Employees hired",
          data: [
            4.3,
            4.0,
            3.5,
            2.9,
            2.5,
            2.7,
          ],
          color: "#7282a7",

        }
      ]
    };
    this.negativStack = new Chart(this.options);
    // Data gathered from http://populationpyramid.net/germany/2015/

    // Age categories
  }

  getAverageData(dep, count) {
    var index: any
    this.category = dep;
    this.averageSalary = 0;
    this.averageExperience = 0;
    this.averageattritionRate = 0;
    this.averageSatisfaction = 0;
    for (index in this.hrdashboardData) {
      if (this.hrdashboardData[index]['Department'] == dep) {
        this.averageSalary += this.hrdashboardData[index]['Salary'] / count;
        this.averageExperience += this.hrdashboardData[index]['Experience'] / count;
        this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / count;
        this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / count;
      }
    }
  }

  getPieAvgData(band, count) {
    // console.log(band + "" + count);
    this.category = band;
    var index: any
    this.averageSalary = 0;
    this.averageExperience = 0;
    this.averageattritionRate = 0;
    this.averageSatisfaction = 0;
    for (index in this.hrdashboardData) {
      if (this.hrdashboardData[index]['Employee Band'] == band) {
        this.averageSalary += this.hrdashboardData[index]['Salary'] / count;
        this.averageExperience += this.hrdashboardData[index]['Experience'] / count;
        this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / count;
        this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / count;
      }
    }
  }

  getMaleEmployeeAvg(){
    var index: any
    this.category = "Male";
    this.averageSalary = 0;
    this.averageExperience = 0;
    this.averageattritionRate = 0;
    this.averageSatisfaction = 0;
    for (index in this.hrdashboardData) {
      if (this.hrdashboardData[index]['Gender'] == "Male") {
        this.averageSalary += this.hrdashboardData[index]['Salary'] / this.maleemployeeCount;
        this.averageExperience += this.hrdashboardData[index]['Experience'] / this.maleemployeeCount;
        this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / this.maleemployeeCount;
        this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / this.maleemployeeCount;
      }
    }
  }

  getFemaleEmployeeAvg(){
    this.category = "Female";
    var index: any
    this.averageSalary = 0;
    this.averageExperience = 0;
    this.averageattritionRate = 0;
    this.averageSatisfaction = 0;
    for (index in this.hrdashboardData) {
      if (this.hrdashboardData[index]['Gender'] == "Female") {
        this.averageSalary += this.hrdashboardData[index]['Salary'] / this.femaleemployeeCount;
        this.averageExperience += this.hrdashboardData[index]['Experience'] / this.femaleemployeeCount;
        this.averageattritionRate += this.hrdashboardData[index]['Attrition rate'] / this.femaleemployeeCount;
        this.averageSatisfaction += this.hrdashboardData[index]['Satisfaction Index'] / this.femaleemployeeCount;
      }
    }
  }

  goToHrmsUsecase2(){
    this.router.navigate(['/hrms-usecase-2']);
  }

  isCardActive(item: any) {
    return this.cardSelected === item;
  }


  setDepatmentActive(item:any){
    this.cardSelected = item;
    this.departmentChart(item);
  }

  setDemographicActive(item:any){
    this.cardSelected = item;
    this.ethinicityChart(item);
  }

  setAgeActive(item:any){
    this.cardSelected = item;
    this.ageGroupChart(item);
  }

  openAttritionTable(){
    $('#myModal').modal('show');
  }

}
