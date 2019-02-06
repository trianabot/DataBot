import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Chart } from 'angular-highcharts';
import { Chain, analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Router } from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    driverperformancechart: any;
    jsondata: any = []
    categories: any
    name: any
    driverevent: any;
    drivertotalevents: any;
    driverperformance: any;
    drivercountevent: any;
    drivercount: any;
    driverRating: any;
    driverName: any;
    categoryone: any = [];
    categorytwo: any = [];
    categorythree: any = [];
    categoryfour: any = [];
    categoryfive: any = [];
    categorysix: any = [];
    categoryseven: any = [];
    categoryeight: any = [];
    fiveratingdriver: any = [];
    options: any;

    driverninetohundred: any;

    lastdayevent: any;
    thisweekevent: any;
    lastmonthavgevent: any;
    threshold: any;
    todayevent: any;
    eventcategory:any;
    driverCount:any;

    constructor(public http: HttpClient, public router: Router) { }

    ngOnInit() {

        this.http.get('../../assets/data/driver.json').subscribe(data => {
            this.jsondata = data
            console.log(this.jsondata)
            for (var i = 0; i < this.jsondata.length; i++) {
                if (this.jsondata[i].Category == "91-100") {
                    this.categoryone.push({ name: this.jsondata[i].Name, y: this.jsondata[i].Peroformance })




                }
                else if (this.jsondata[i].Category == "81-90") {
                    this.categorytwo.push({ name: this.jsondata[i].Name, y: this.jsondata[i].Peroformance })
                }
                else if (this.jsondata[i].Category == "71-80") {
                    this.categorythree.push({ name: this.jsondata[i].Name, y: this.jsondata[i].Peroformance })
                }
                else if (this.jsondata[i].Category == "61-70") {
                    this.categoryfour.push({ name: this.jsondata[i].Name, y: this.jsondata[i].Peroformance })
                }
                else if (this.jsondata[i].Category == "51-60") {
                    this.categoryfive.push({ name: this.jsondata[i].Name, y: this.jsondata[i].Peroformance })
                }
                else if (this.jsondata[i].Category == "41-50") {
                    this.categorysix.push({ name: this.jsondata[i].Name, y: this.jsondata[i].Peroformance })
                }
                else if (this.jsondata[i].Category == "31-40") {
                    this.categoryseven.push({ name: this.jsondata[i].Name, y: this.jsondata[i].Peroformance })
                }
                else if (this.jsondata[i].Category == "21-30") {
                    this.categoryeight.push({ name: this.jsondata[i].Name, y: this.jsondata[i].Peroformance })
                }


            }

            this.driverPerformanceChart(this.categoryone, this.categorytwo, this.categorythree, this.categoryfour, this.categoryfive,
                this.categorysix, this.categoryseven, this.categoryeight)

        })
        this.getDriverEvents();


    }

    driverPerformanceChart(categoryone, categorytwo, categorythree, categoryfour, categoryfive, categorysix, categoryseven, categoryeight) {
        var UNDEFINED;
        var $this = this;
        this.options = {
            chart: {
                type: 'column',
                height: 300,
                events: {
                    drillup: function (e) {
                        $this.getDriverEvents();
                    },
                    drilldown: function (e) {
                        $this.getCategoryEvents(e.seriesOptions.name,e.seriesOptions.data.length);
                    }
                }

            },
            // title: {
            //   text: 'Driver Daily Performance'
            // },

            xAxis: {
                type: 'category',
                min: 0,
                max: 7,
                scrollbar: {
                    enabled: true
                },
                color: "#FFFFFF"

            },
            title: {
                text: ''

            },

            yAxis: {
                title: { text: '' },
                gridLineColor: 'transparent',
                labels: {
                    enabled: false
                },


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
                        format: '{point.y}'

                     },
                    point: {
                        events: {
                            click: function (): any {
                                if (this.x != UNDEFINED) {
                                    $this.getDriver(this.name);

                                    //   $this.router.navigate(['./driver-overview']);
                                }
                            },


                        }
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
                            "y": 18,
                            "drilldown": "91-100",
                            color: "#5871b2"
                        },
                        {
                            "name": "81-90",
                            "y": 187,
                            "drilldown": "81-90",
                            color: "#5871b2"
                        },
                        {
                            "name": "71-80",
                            "y": 158,
                            "drilldown": "71-80",
                            color: "#5871b2"
                        },
                        {
                            "name": "61-70",
                            "y": 243,
                            "drilldown": "61-70",
                            color: "#5871b2"
                        },
                        {
                            "name": "51-60",
                            "y": 218,
                            "drilldown": "51-60",
                            color: "#5871b2"
                        },
                        {
                            "name": "41-50",
                            "y": 126,
                            "drilldown": "41-50",
                            color: "#5871b2"
                        },
                        {
                            "name": "31-40",
                            "y": 47,
                            "drilldown": "31-40",
                            color: "#5871b2"
                        },
                        {
                            "name": "21-30",
                            "y": 3,
                            "drilldown": "21-30",
                            color: "#5871b2"
                        },
                    ]
                }
            ],
            "drilldown": {
                "series": [
                    {
                        "name": "91-100",
                        "id": "91-100",
                        "data": categoryone,
                        color: "#5871b2"


                    },
                    {
                        "name": "81-90",
                        "id": "81-90",
                        "data": categorytwo,
                        color: "#5871b2"

                    },
                    {
                        "name": "71-80",
                        "id": "71-80",
                        "data": categorythree,
                        color: "#5871b2"
                    },
                    {
                        "name": "61-70",
                        "id": "61-70",
                        "data": categoryfour,
                        color: "#5871b2"
                    },
                    {
                        "name": "51-60",
                        "id": "51-60",
                        "data": categoryfive,
                        color: "#5871b2"
                    },
                    {
                        "name": "41-50",
                        "id": "41-50",
                        "data": categorysix,
                        color: "#5871b2"
                    },
                    {
                        "name": "31-40",
                        "id": "31-40",
                        "data": categoryseven,
                        color: "#5871b2"
                    },
                    {
                        "name": "21-30",
                        "id": "21-30",
                        "data": categoryeight,
                        color: "#5871b2"
                    },
                ]
            }

        }
        this.driverperformancechart = new Chart(this.options);

    }

    getDriverEvents() {
        this.http.get('../../assets/data/driverevent.json').subscribe(data => {
            this.driverevent = data;
            this.drivertotalevents = this.driverevent[0];
            this.lastdayevent = this.drivertotalevents['Last Day'] / 1000;
            this.thisweekevent = this.drivertotalevents['This Week'] / 1000;
            this.lastmonthavgevent = this.drivertotalevents['Last Month Average'] / 1000;
            this.threshold = this.drivertotalevents['Threshold'];
            this.todayevent = this.drivertotalevents['Today'] / 1000;


        })
    }


    getCategoryEvents(category,avg) {
        var index :any
        this.lastdayevent = 0;
        for(index in this.driverevent){

            if(this.driverevent[index].Category == category){
                this.lastdayevent += this.driverevent[index]['Last Day']/avg;
                this.thisweekevent = this.drivertotalevents['This Week'] / avg;
                this.lastmonthavgevent = this.drivertotalevents['Last Month Average'] / avg;
                this.threshold = this.drivertotalevents['Threshold'];
                this.todayevent = this.drivertotalevents['Today'] / avg;
           }
        }

    }


    getDriver(driverName: string) {
        this.getDriverCount(driverName)
        var index :any;
        for(index in this.driverevent){
            if( this.driverevent[index].Name === driverName){
            this.lastdayevent = this.driverevent[index]['Last Day'];
            this.thisweekevent = this.driverevent[index]['This Week'] ;
            this.lastmonthavgevent = this.driverevent[index]['Last Month Average'];
            this.threshold = this.driverevent[index]['Threshold'];
            this.todayevent = this.driverevent[index]['Today'];

            }
            
        }

    }


    getDriverCount(driverName) {
        var index :any;
        // this.driverName = driverName
         this.http.get('../../assets/data/driverinfo.json').subscribe(data => {
            this.driverRating = data
            for(index in this.driverRating){
                if (this.driverRating[index].Name == driverName ) {
                    this.driverRating = this.driverRating[index].Rating

                }
            }


        })
    }

}
