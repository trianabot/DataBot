import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Chart } from 'angular-highcharts';
import { Chain } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

driverperformancechart:any;
  constructor() {
    this.driverperformancechart = new Chart({
      chart: {
        type: 'column'
    },
    // title: {
    //   text: 'Driver Daily Performance'
    // },
   
    xAxis: {
        type: 'category',
      
    },
    title: {
      text: ''
            
    },
    
    yAxis: {
        title: { text:'' },
        gridLineColor: 'transparent',
        labels:{
           enabled:false
        }
       
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
  },
    plotOptions: {
        series: {
           
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
  
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    "series": [
        {
            "name": "Driver",
           
            "data": [
                {
                    "name": "91-100",
                    "y": 98,
                    "drilldown": "91-100"
                },
                {
                    "name": "81-90",
                    "y": 90,
                    "drilldown": "81-90"
                },
                {
                    "name": "79-80",
                    "y": 80,
                    "drilldown": "79-80"
                },
                {
                    "name": "70-69",
                    "y": 70,
                    "drilldown": "70-69"
                },
                {
                    "name": "59-60",
                    "y": 60,
                    "drilldown": "59-60"
                },
            ]
        }
    ],
    "drilldown": {
        "series": [
            {
                "name": "91-100",
                "id": "91-100",
                "data": [
                  {name :"John", y:98},
                  {name :"Jack", y:97},
                  {name :"Lenny", y:96},
                  {name :"Mack", y:95},
                  {name :"David", y:94},
                  {name :"Dony", y:93},
                  {name :"Brew", y:95.3},
                  {name :"Jim", y:95.1},
                  {name :"Jerome", y:91},
                ]
            },
            {
                "name": "81-90",
                "id": "81-90",
                "data": [
                  {name :"John", y:81},
                  {name :"Jack", y:82},
                  {name :"Lenny", y:83},
                  {name :"Mack", y:84},
                  {name :"David", y:85},
                  {name :"Dony", y:86},
                  {name :"Brew", y:87},
                  {name :"Jim", y:88},
                  {name :"Jerome", y:89},
                    
                ]
            },
            {
                "name": "79-80",
                "id": "79-80",
                "data": [
                  {name :"John", y:79.1},
                  {name :"Jack", y:79.2},
                  {name :"Lenny", y:79.3},
                  {name :"Mack", y:80},
                  {name :"David", y:80},
                  {name :"Dony", y:79.5},
                  {name :"Brew", y:79.4},
                  {name :"Jim", y:79.6},
                  {name :"Jerome", y:79.8},
                    
                ]
            },
            {
                "name": "70-69",
                "id": "70-69",
                "data": [
                  {name :"John", y:70.1},
                  {name :"Jack", y:70.2},
                  {name :"Lenny", y:70.3},
                  {name :"Mack", y:69},
                  {name :"David", y:70},
                  {name :"Dony", y:69},
                  {name :"Brew", y:70},
                  {name :"Jim", y:69},
                  {name :"Jerome", y:70},
                  
                ]
            },
            {
                "name": "59-60",
                "id": "59-60",
                "data": [
                  {name :"John", y:59.1},
                  {name :"Jack", y:59.2},
                  {name :"Lenny", y:59.3},
                  {name :"Mack", y:59},
                  {name :"David", y:60},
                  {name :"Dony", y:60},
                  {name :"Brew", y:59},
                  {name :"Jim", y:59},
                  {name :"Jerome", y:60},
                  
                  
                ]
            },
           ]
    }
  
    })

   }

  ngOnInit() {}

 

 }
