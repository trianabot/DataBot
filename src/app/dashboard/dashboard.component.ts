import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Chart } from 'angular-highcharts';
import { Chain } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

driverperformancechart:any;
jsondata: any =[]
categories:any
name:any
driverevent:any;
drivertotalevents:any;
driverperformance:any;
drivercountevent:any;
drivercount:any;
driverRating:any;
driverName:any;
categoryone:any =[];
categorytwo:any =[];
categorythree:any=[];
categoryfour:any=[];
categoryfive:any=[];
categorysix:any=[];
categoryseven:any=[];
categoryeight:any=[];
fiveratingdriver:any =[];
options:any;


  constructor(public http: HttpClient,public router : Router) {}

  ngOnInit() {
     
    this.http.get('../../assets/data/driver.json').subscribe(data =>{
        this.jsondata = data
        console.log(this.jsondata)
         for(var i =0; i < this.jsondata.length;i++)
        {
         if(this.jsondata[i].Category == "91-100")
         {
            this.categoryone.push( {name :this.jsondata[i].Name, y:this.jsondata[i].Peroformance})
         }
       else if(this.jsondata[i].Category == "81-90")
         {
            this.categorytwo.push( {name :this.jsondata[i].Name, y:this.jsondata[i].Peroformance})
         }
         else if(this.jsondata[i].Category == "71-80")
         {
            this.categorythree.push( {name :this.jsondata[i].Name, y:this.jsondata[i].Peroformance})
         }
         else if(this.jsondata[i].Category == "61-70")
         {
            this.categoryfour.push( {name :this.jsondata[i].Name, y:this.jsondata[i].Peroformance})
         }
         else if(this.jsondata[i].Category == "51-60")
         {
            this.categoryfive.push( {name :this.jsondata[i].Name, y:this.jsondata[i].Peroformance})
         }
         else if(this.jsondata[i].Category == "41-50")
         {
            this.categorysix.push( {name :this.jsondata[i].Name, y:this.jsondata[i].Peroformance})
         }
         else if(this.jsondata[i].Category == "31-40")
         {
            this.categoryseven.push( {name :this.jsondata[i].Name, y:this.jsondata[i].Peroformance})
         }
         else if(this.jsondata[i].Category == "21-30")
         {
            this.categoryeight.push( {name :this.jsondata[i].Name, y:this.jsondata[i].Peroformance})
         }
 
 
        }
        
        this.driverPerformanceChart(this.categoryone,this.categorytwo,this.categorythree,this.categoryfour,this.categoryfive,
        this.categorysix,this.categoryseven,this.categoryeight)
              
    })
    this.getDriverEvents();
  
     
}

 driverPerformanceChart(categoryone,categorytwo,categorythree,categoryfour,categoryfive,categorysix,categoryseven,categoryeight){ 
     var UNDEFINED;
     var $this = this; 
    this.options = {
        chart: {
          type: 'column',
          height:300,

      },
      // title: {
      //   text: 'Driver Daily Performance'
      // },
     
      xAxis: {
          type: 'category',
          min:0,
         max :7,
          scrollbar: {
            enabled: true
        },
        color:"#FFFFFF"
        
      },
      title: {
        text: ''
              
      },
      
      yAxis: {
          title: { text:'' },
          gridLineColor: 'transparent',
          labels:{
             enabled:false
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
                    click: function():any {
                        if(this.x != UNDEFINED){
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
                    color:"#37B3A9"
                },
                {
                    "name": "81-90",
                    "y": 187,
                    "drilldown": "81-90",
                    color:"#37B3A9"
                },
                {
                    "name": "71-80",
                    "y": 158,
                    "drilldown": "71-80",
                    color:"#37B3A9"
                },
                {
                    "name": "61-70",
                    "y": 243,
                    "drilldown": "61-70",
                    color:"#37B3A9"
                },
                {
                    "name": "51-60",
                    "y": 218,
                    "drilldown": "51-60",
                    color:"#37B3A9"
                },
                {
                  "name": "41-50",
                  "y": 126,
                  "drilldown": "41-50",
                  color:"#37B3A9"
                },
                {
                  "name": "31-40",
                  "y": 47,
                  "drilldown": "31-40",
                  color:"#37B3A9"
                },
                {
                  "name": "21-30",
                  "y": 3,
                  "drilldown": "21-30",
                  color:"#37B3A9"
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
                  color:"#37B3A9"
                  
                  
              },
              {
                  "name": "81-90",
                  "id": "81-90",
                  "data": categorytwo,
                  color:"#37B3A9"
                   
              },
              {
                  "name": "71-80",
                  "id": "71-80",
                  "data": categorythree,
                  color:"#37B3A9"
              },
              {
                  "name": "61-70",
                  "id": "61-70",
                  "data": categoryfour,
                  color:"#37B3A9"
              },
              {
                  "name": "51-60",
                  "id": "51-60",
                  "data": categoryfive,
                  color:"#37B3A9"
              },
              {
                "name": "41-50",
                "id": "41-50",
                "data": categorysix,
                color:"#37B3A9"
            },
            {
                "name": "31-40",
                "id": "31-40",
                "data": categoryseven,
                color:"#37B3A9"
            },
            {
                "name": "21-30",
                "id": "21-30",
                "data": categoryeight,
                color:"#37B3A9"
            },
             ]
      }
    
      }
      this.driverperformancechart = new Chart(this.options);
  
}

getDriverEvents(){
    this.http.get('../../assets/data/driverevent.json').subscribe(data =>{
        this.driverevent = data;
         this.drivertotalevents = this.driverevent[0];

   })
}

getDriver(driverName:string){
    this.getDriverCount(driverName)
    for(var i =0; i<= this.driverevent.length;i++){
        if(driverName == this.driverevent[i].Name){
            this.drivertotalevents = this.driverevent[i]
            // console.log(this.drivertotalevents)
        }
       
    }
    
    


}
getDriverCount(driverName){
    this.driverName = driverName
    // alert(this.driverName)
    this.http.get('../../assets/data/driverinfo.json').subscribe(data =>{
            this.driverRating = data            
        for(var i =0; i<= this.driverRating.length;i++){
            if(driverName ==this.driverRating[i].Name){
             this.driverRating = this.driverRating[i].Rating
       
            }
        }
        })
}

}
