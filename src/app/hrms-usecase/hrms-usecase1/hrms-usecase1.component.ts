import { DatabotService } from './../../core/databot.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Highcharts } from 'angular-highcharts';
import { Router } from '@angular/router';

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

  constructor(public databotService: DatabotService, public router: Router) {

    this.hiredChart();
  }

  ngOnInit() {
    this.loadJsonData();
  }

  loadJsonData() {
    this.databotService.loadHrdashboard1().subscribe(data => {
      console.log(data);
      this.hrdashboardData = data;
      this.employeecount = this.hrdashboardData.length;
      this.filterData(data);
      this.filterBandData(data);
      this.filterAverageData(data);
      this.filterChartData(data);
    });
  }

  filterChartData(jsondata) {
    var itbandone = 0;
    for (var i = 0; i < jsondata.length; i++) {
      if (jsondata[i]['Department'] == 'IT' && jsondata[i]['Employee Band'] == 1) {
        itbandone += 1;
      }
    }
    console.log(itbandone);
    this.departmentChart(itbandone);
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
        height: 205,
        style: {
          fontFamily: 'Ubuntu,sans-serif'
        }

      },
      title: {
        text: ''
      },
      xAxis: {
        type: 'category',
        labels: {
          enabled: true
        }
      },
      yAxis: {
        title: { text: '' },

        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'red'
          }
        },
        gridLineColor: 'transparent',
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}'
          },
          point: {
            events: {
              click: function (): any {
                if (this.x != UNDEFINED) {
                  $this.getAverageData(this.name, this.y);
                  for (var i = 0; i < this.series.data.length; i++) {
                    this.series.data[i].update({ color: '#5871b2' }, true, false);
                  }
                  this.update({ color: '#1c2337' }, true, false);
                  //   $this.router.navigate(['./driver-overview']);

                }

              },


            }
          }
        }
      },
      series: [
        {
          name: 'Categories',
          data: [
            {
              name: 'IT',
              y: 296,
              color: '#7282a7'
            },
            {
              name: 'Accounting',
              y: 167,
              color: '#7282a7'
            },
            {
              name: 'Marketing',
              y: 166,
              color: '#7282a7'
            },
            {
              name: 'Sales',
              y: 104,
              color: '#7282a7'
            },
            {
              name: 'Admin',
              y: 128,
              color: '#7282a7'
            },
            {
              name: 'Legal',
              y: 139,
              color: '#7282a7'
            }
          ]
        }
      ],
      credits: {
        enabled: null
      }
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

}
