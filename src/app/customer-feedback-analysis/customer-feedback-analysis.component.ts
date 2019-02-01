import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-customer-feedback-analysis',
  templateUrl: './customer-feedback-analysis.component.html',
  styleUrls: ['./customer-feedback-analysis.component.css']
})
export class CustomerFeedbackAnalysisComponent implements OnInit {
scrollchart:any;
options:any;

  constructor() { 
    

  }

  ngOnInit() {
    this.loadChart();
  }

  loadChart(){
    this.scrollchart = new Chart({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Fleet Rating'
        },
        xAxis: {
            categories: ['JAN', 'Feb', 'March', 'April', 'May','June','July','Aygust','Sep','Oct','Nov','Dec']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color:  'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color:  'white'
                }
            }
        },
        series: [{
            name: '5 Star',
            data: [845,839,830,889,888,824,818,896,865,822,842,829]
        }, {
            name: '4 Star',
            data: [425,491,537,548,585,404,445,455,497,471,549,489]
        }, {
            name: '3 Star',
            data: [386,329,316,338,302,315,368,328,395,385,389,324]
        }, {
            name: '2 Star',
            data: [255,310,211,244,274,245,200,279,228,343,305,213]
        },{
            name: '1 Star',
            data: [52,51,64,74,54,75,56,65,71,57,73,54]
        }]
    })

}
}
