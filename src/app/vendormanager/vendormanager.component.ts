import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import * as Highcharts from 'highcharts';
declare const google: any;
import { from } from 'rxjs';
@Component({
  selector: 'app-vendormanager',
  templateUrl: './vendormanager.component.html',
  styleUrls: ['./vendormanager.component.css']
})
// export class User {
//   ContractNumber: any;
//   Vendor: string;
//   ASGRole: string;
//   ASGrate: number;
//   ContractRate: any;
//   Competetor: string;
//   CompetetorRate: number;
//   CompetetorDetails: number;
//   example: string;
//   example1: string;
//   example2: string;
//   example3: string;
//   example4: string;

// }
export class VendormanagerComponent implements OnInit {



  // my: [];
  // pie: [];
  // userList: User[];
  // Chart: [];
  barChart: any;
  barChartOptions: any;
  constructor() {
    // this.userList = [
    //   { ContractNumber: 0, Vendor: "Accenture", ASGRole: "Arichitect", ASGrate: 126.07, ContractRate: 105.36, Competetor: "INC", CompetetorRate: 73.52, CompetetorDetails: 0, example: "yes", example1: "yes", example2: "yes", example3: "yes", example4: "yes" },
    //   { ContractNumber: 0, Vendor: "IBM", ASGRole: "Arichitect", ASGrate: 163.13, ContractRate: 52.86, Competetor: "ACCENTURE", CompetetorRate: 112.72, CompetetorDetails: -1, example: "yes", example1: "yes", example2: "yes", example3: "yes", example4: "yes" },
    //   { ContractNumber: 0, Vendor: "IBM", ASGRole: "Arichitect", ASGrate: 172.51, ContractRate: 86.96, Competetor: "PERFICIENT", CompetetorRate: 210.12, CompetetorDetails: -1, example: "yes", example1: "yes", example2: "yes", example3: "yes", example4: "yes" },
    //   { ContractNumber: 110668, Vendor: "Microsoft", ASGRole: "Arichitect", ASGrate: 116.02, ContractRate: 170.09, Competetor: "PINFOVERITY", CompetetorRate: 176.98, CompetetorDetails: 0, example: "yes", example1: "yes", example2: "yes", example3: "yes", example4: "yes" },
    //   { ContractNumber: 29009100, Vendor: "Accenture", ASGRole: "Arichitect", ASGrate: 170.15, ContractRate: 127.06, Competetor: "BELCAN ENGINEERING COLLEGE", CompetetorRate: 80.23, CompetetorDetails: 0, example: "yes", example1: "yes", example2: "yes", example3: "yes", example4: "yes" },
    //   { ContractNumber: 29009100, Vendor: "IBM", ASGRole: "Arichitect", ASGrate: 157.03, ContractRate: 155.54, Competetor: "BELCAN ENGINEERING COLLEGE", CompetetorRate: 113.46, CompetetorDetails: 0, example: "yes", example1: "yes", example2: "yes", example3: "yes", example4: "yes" },

    // ]
  }

  ngOnInit() {
    this.loadMap();
    this.loadBarChart();
    // this.loadPieChart();
    // this.loadPieChart1();

  }
  loadMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
  loadBarChart() {
    // var my = Highcharts.chart('barChart', {
      this.barChartOptions = {
      chart: {
        type: 'bar'
      },
      xAxis: {
        categories: ['Microsoft', 'Amazon', 'Accenture','Tcs','IBM','Delloite']
      },
      yAxis: {
        min:1,
        max:10,
      },
      series: [{
        name: 'Contract Rate',
        data: [1, 5, 4, 3, 2, 6],
        type: undefined
      }, {
        name: 'ASG Rate',
        data: [5, 7, 3, 8, 7, 2],
        type: undefined
      }, {
        name: 'Competitor Rate',
        data: [2, 5, 7, 5, 6, 4],
        type: undefined
      }
      ]
    },
    this.barChart = new Chart(this.barChartOptions);
  }
  // loadPieChart() {
  //   //  var pie = Highcharts.chart('pieChart', {
  //   //     chart: {
  //   //       type: 'pie',
  //   //       // options3d: {
  //   //       //   enabled: true,
  //   //       //   alpha: 45
  //   //       // }
  //   //     },
  //   //     plotOptions: {
  //   //       pie: {
  //   //         innerSize: 50,
  //   //         depth: 20
  //   //       }
  //   //     },
  //   //     series: [{
  //   //       name: 'Delivered amount',
  //   //       data: [
  //   //         ['Arichitect', 8],
  //   //         ['Database Analyst', 3],
  //   //         ['Bussiness Analyst', 1],
  //   //         ['IT Analyst', 6],
  //   //         ['Tech-Lead', 8],
  //   //         ['Testing Analyst', 4],
  //   //         ['Software Engineer', 4],
  //   //         ['Support Analyst', 1],
  //   //         ['Network Engineer', 1]
  //   //       ],
  //   //       type: undefined
  //   //     }]
  //   //   });
  //   var pie = Highcharts.chart('pieChart', {
  //     chart: {
  //       plotBackgroundColor: null,
  //       plotBorderWidth: null,
  //       plotShadow: false,
  //       type: 'pie'
  //     },
  //     tooltip: {
  //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //     },
  //     plotOptions: {
  //       pie: {
  //         allowPointSelect: true,
  //         cursor: 'pointer',
  //         dataLabels: {
  //           enabled: false
  //         },
  //         showInLegend: true
  //       }
  //     },
  //     series: [{
  //       name: 'Brands',
  //       colorByPoint: true,
  //       data: [{
  //         name: 'Arichitect',
  //         y: 8,
  //       }, {
  //         name: 'Database Analyst',
  //         y: 3,
  //       }, {
  //         name: 'Bussiness Analyst',
  //         y: 1,
  //       }, {
  //         name: 'IT Analyst',
  //         y: 6,
  //       }, {
  //         name: 'Tech-Lead',
  //         y: 8,
  //       },
  //       {
  //         name: 'Testing Analyst',
  //         y: 4,
  //       },
  //       {
  //         name: 'Software Engineer',
  //         y: 4,
  //       },
  //       {
  //         name: 'Support Analyst',
  //         y: 1,
  //       },
  //       {
  //         name: 'Network Engineer',
  //         y: 1,
  //       },
  //       ],
  //       type: undefined
  //     }]
  //   });
  // }

  // loadPieChart1() {
  //   //   var pie = Highcharts.chart('pieChart1',{
  //   //      chart: {
  //   //        type: 'pie',
  //   //        options3d: {
  //   //          enabled: true,
  //   //          alpha: 45
  //   //        }
  //   //      },
  //   //      plotOptions: {
  //   //        pie: {
  //   //          innerSize: 50,
  //   //          depth: 45
  //   //        }
  //   //      },
  //   //      series: [{
  //   //        name: 'Delivered amount',
  //   //        data: [
  //   //          ['BECAN ENGINEER', 8],
  //   //          ['ACCENTURE LLP', 3],
  //   //          ['INFOSYS', 1],
  //   //          ['LLC', 6],
  //   //          ['INFOVERTY', 8],
  //   //          ['PERFICIENT', 4],
  //   //          ['CUNVERGUYS', 4],
  //   //          ['TECHSYSTEMS', 1],
  //   //          ['DSM-H LLC', 1]
  //   //        ],
  //   //        type: undefined
  //   //      }]
  //   //    });
  //   //  }
  //   // Build the chart
  //   var pie = Highcharts.chart('pieChart1', {
  //     chart: {
  //       plotBackgroundColor: null,
  //       plotBorderWidth: null,
  //       plotShadow: false,
  //       type: 'pie'
  //     },
  //     tooltip: {
  //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //     },
  //     plotOptions: {
  //       pie: {
  //         allowPointSelect: true,
  //         cursor: 'pointer',
  //         dataLabels: {
  //           enabled: false
  //         },
  //         showInLegend: true
  //       }
  //     },
  //     series: [{
  //       name: 'Brands',
  //       colorByPoint: true,
  //       data: [{
  //         name: 'BECAN ENGINEER',
  //         y: 8,
  //       }, {
  //         name: 'ACCENTURE LLP',
  //         y: 3,
  //       }, {
  //         name: 'INFOSYS',
  //         y: 1,
  //       }, {
  //         name: 'LLC',
  //         y: 6,
  //       }, {
  //         name: 'INFOVERTY',
  //         y: 8,
  //       }, {
  //         name: 'PERFICIENT',
  //         y: 4,
  //       },
  //       {
  //         name: 'CUNVERGUYS',
  //         y: 1,
  //       },
  //       {
  //         name: 'TECHSYSTEMS',
  //         y: 1,
  //       },
  //       {
  //         name: 'DSM-H LLC',
  //         y: 1,
  //       },
  //       ],
  //       type: undefined
  //     }]
  //   });
  // }
}
