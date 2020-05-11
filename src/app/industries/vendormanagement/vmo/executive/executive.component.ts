import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);
import { CaterpillarService } from '../../../../core/caterpillar.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-executive',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.css']
})
export class ExecutiveComponent implements OnInit {
  CurrentYearSavings: boolean;
  AnnualizedYearSavings : boolean;
  Savings : boolean;
  ssChart: any;
  ssChartOptions: any;
  svChart: any;
  svChartOptions: any;
  scChart:any;
  scChartOptions: any
  suppliersSpend: any = [];
  categorySpend: any = [];
  deptSpend: any = [];
  overviewtabs: any = 1;
  selectedOverview: any = 1;
  suppliershow: boolean = true;
  categoryshow: boolean = false;
  deptbushow: boolean = false;
  tabledata: any;
  title: string;
  category: string;
  ratingtype: string;
  tablecolumn: string;
  back = false;
  prescreen:boolean=false;
  tsetDataArray:any=[ ];
  demo:any;
  myDate :Date;
  Addcomments = [];
  selectItemStamp : any ;
  addtimestampform = false;
  itemSelector: boolean=false;
  constructor(private caterpillar: CaterpillarService, private router:Router, private _location:Location) {
    this.demo="awesome";
   }

  ngOnInit() {
    this.CurrentYearSavings = true;
    this.prescreen=true;
    this.spendSuppliersinit();
    this.spendSuppliersinit2019();
    this.spendCategory();
    this.category = 'Supplier Name';
    this.tablecolumn = "Committed";
    this.ratingtype = "Committed";
    this.myDate = new Date();
    
  }
  overview(type, key, item) {
    this.selectedOverview = item;
       this.tablecolumn = key;
       this.ratingtype = key;
      console.log(this.overviewtabs);

      if(this.overviewtabs == 1) {
        this.spendSuppliersinit();
      }else if(this.overviewtabs == 2) {
        this.spendCategory();
      }
  }
  isActiveOverview(item:any) {
    return this.selectedOverview === item;
  };

  CurrentYearSavingsChart(){
    this.CurrentYearSavings = true;
    this.AnnualizedYearSavings = false;
    this.Savings = false;
  }
  AnnualizedYearSavingsChart(){
    this.CurrentYearSavings = false;
    this.AnnualizedYearSavings = true;
    this.Savings = false;
  }
  SavingsChart(){
    this.CurrentYearSavings = false;
    this.AnnualizedYearSavings = false;
    this.Savings = true;
  }

  sort(value) {
    console.log(value);
  }

  exportCSVFile() {

 }

 deptTable() {

 }

 seeAllInfo() {

 }

 redirect(val) {

 }

 suppTable() {

 }

 catTable() {

 }
 ratingComponentClick(event) {

 }

 getCommentandSend(event) {

 }
  spendSuppliersinit() {

    this.caterpillar.getSupplierSpend('CommittedAmount_2019').subscribe(data => {
      // console.log(data);
      this.suppliersSpend = data['data'];
      this.tabledata = this.suppliersSpend;
      this.loadSupplierSpendChart(this.suppliersSpend);
    });
  }
  spendSuppliersinit2019() {
    
    this.caterpillar.getSupplierSpend('CommittedAmount_2019').subscribe(data => {
      // console.log(data);
      this.suppliersSpend = data['data'];
      this.tabledata = this.suppliersSpend;
      this.loadSupplierSpendChartBy2019(this.suppliersSpend);
    });
  }
  spendCategory() {
    this.caterpillar.getCategorySpend('CommittedAmount_2019').subscribe(data => {
      // console.log(data);
      this.categorySpend = data['data'];
      this.tabledata = data['data'];
      this.loadSpendByCategoryChart(this.categorySpend);
    });
  }

  overviewTabs(item) {
    return this.overviewtabs === item;
  }

  showsupplier(item) {
    this.overviewtabs = item;
    this.suppliershow = true;
    this.categoryshow = false;
    this.deptbushow = false;
    this.tabledata = this.suppliersSpend;
    // this.title = 'TOP 10 SUPPLIERS BY SPEND';
    this.category = 'Supplier Name';
    // this.spendSuppliers();
  }
  showcategory(item) {
    this.overviewtabs = item;
    this.suppliershow = false;
    this.categoryshow = true;
    this.deptbushow = false;
    this.tabledata = this.categorySpend;
    this.title = 'RATING';
    this.category = 'Project Id';
    // this.spendCategory();
  }

  loadSupplierSpendChart(suppliersSpend) {
    var chartData = suppliersSpend;
    var tooltipEnabled = true;
    var $this = this;
  this.ssChartOptions = {
    chart: {
        zoomType: 'xy',
        backgroundColor: '#f7f7ef',
    },
    credits: {
      enabled: false
  },
    title: {
        text: null
    },
    xAxis: [{
        categories: ['Portfolio', 'Platform', 'Connectivity', 'Bussiness Resource','Architecture', 'Application']
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} °C',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: ' $ {value} m ',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true
    }],

    tooltip: {
        shared: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Validated Savings',
        type: 'bar',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0],
        color: '#6eacdd',
        tooltip: {
            pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}</b> '
        }
    }, {
    name: 'Annualized Savings',
        type: 'bar',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0],
        color: '#0c5790',
        tooltip: {
            pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} </b> '
        }
    }, {
        name: 'Rainfall error',
        type: 'errorbar',
        yAxis: 1,
        data: [[38,38], [48, 48], [72, 72], [98, 98], [170, 170], [141, 141]],
        color:'red',
        tooltip: {
            pointFormat: '(10% Goal: {point.low})<br/>'
        }
    },
  {
    name:'10% Goal',
    type:'bar',
    color:'black'
  } ]
  }

    this.ssChart = new Chart(this.ssChartOptions);
  }
  loadSupplierSpendChartBy2019(suppliersSpend) {
    var chartData = suppliersSpend;
    // console.log("chartdata",chartData);
    // var chartData = this.newData;
    var tooltipEnabled = true;
    var $this = this;
    this.svChartOptions = {
  //     chart: {
  //       type: 'bar',
  //       backgroundColor: '#f7f7ef',
  //   },
  //   credits: {
  //     enabled: false
  // },
  //   title: {
  //       text: null
  //   },
  //   xAxis: {
  //       categories: ['App', 'Platform', 'Connectivity', 'Data & Analysis', 'Portfolio','Cat Digital Admin']
  //   },
  //   yAxis: {
  //       min: 0,
  //       title: {
  //           text: null
  //       }
  //   },
  //   legend: {
  //       reversed: true
  //   },
  //   plotOptions: {
  //       series: {
  //           stacking: 'normal'
  //       }
  //   },
  //   series: [{
  //       name: 'Validated Savings',
  //       data: [5, 3, 4, 7, 2,8],
  //       color:'#ffac4e'
  //   }, {
  //       name: '10% Goal',
  //       data: [1, 4, 4, 2, 5,7],
  //       color:'#ff4d6f'
  //   }]
    chart: {
        zoomType: 'xy',
        backgroundColor: '#f7f7ef',
    },
    credits: {
          enabled: false
      },
    title: {
        text: null
    },
    xAxis: [{
        categories: ['App', 'Platform', 'Connectivity', 'Data & Analysis', 'Portfolio','Cat Digital Admin']
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} °C',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: null,
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: ' $ {value} m',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true
    }],

    tooltip: {
        shared: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Validated Savings',
        type: 'bar',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0],
        color: '#ff4d6f',
        tooltip: {
            pointFormat: '<span style="font-weight: bold; color:{series.color}">{series.name}</span>: <b>{point.y:.1f} </b> '
        }
    }, 
    // {
    // name: 'Temperature',
    //     type: 'bar',
    //     yAxis: 1,
    //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0],
    //     color: 'red',
    //     tooltip: {
    //         pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
    //     }
    // }, 
    {
        name: 'Rainfall error',
        type: 'errorbar',
        yAxis: 1,
        data: [[38,38], [48, 48], [72, 72], [98, 98], [20, 20], [141, 141]],
        tooltip: {
            pointFormat: '(10% Goal: {point.low})<br/>'
        }
    },{
      name:'10% Goal',
      type:'bar',
      color:'black'
    } ]

  
  }
    this.svChart = new Chart(this.svChartOptions);
  }
  getseries(chartData) {
    // console.log(chartData);
    var series = [];
    var tooltipEnabled = true;
    var $this = this;
    for(let item in chartData) {
        series.push({name: chartData[item]['name'], data: [chartData[item]['y']], color: chartData[item]['color'], point: {
          events: {
            click: function (event) {
              this.series.chart.update({
                                tooltip: {
                                  enabled: tooltipEnabled,
                                }
                              });
                              tooltipEnabled = tooltipEnabled ? false: true;
            },
            mouseOut: function (event) {
                          // $this.updateTableData(this.series.name,event.target.color);
                          $this.setTranslation(this, false);
                        },
                        mouseOver: function(event) {
                          // console.log(this.series.name, event.target.color)
                          // $this.updateTableData(this.series.name,event.target.color);
                          $this.setTranslation(this, true);
                        }
          }
        }});
    }
    // console.log(series);
    return series;
  }

  // updateTableData(name,colorforrow) {
  //   // console.log(name);
  //   // console.log(colorforrow);
  //   for(var i=0;i<this.tabledata.length;i++){
  //     if(this.tabledata[i].name == name){
  //       this.tabledata[i].tablecolor = colorforrow;
  //     }else{
  //       if(i % 2 == 0) {
  //         this.tabledata[i].tablecolor = "#f7f7ef";
  //        }else {
  //         this.tabledata[i].tablecolor = "#f2f2f2";
  //        }
  //     }
  //   }
  // }
  loadSpendByCategoryChart(data) {
    var chartData = data;
    var tooltipEnabled = true;
    var $this = this;
    this.scChartOptions = {
      chart: {
        type: 'waterfall',
        backgroundColor: '#f7f7ef',
    },
    credits: {
      enabled: false
  },

    title: {
        text: null,
    },

    xAxis: {
        type: null
    },

    yAxis: {
        title: {
            text: null
        }
    },

    legend: {
        enabled: false
    },

    tooltip: {
        pointFormat: '<b>${point.y:,.2f}</b> USD'
    },

    series: [{
        upColor: Highcharts.getOptions().colors[2],
        color: Highcharts.getOptions().colors[3],
        data: [{
            name: 'Application',
            y: 145000
        }, {
            name: 'Application1',
            y: 45000
        }, {
            name: 'Architecture',
            y: 1000
        }, {
            name: 'Platform',
            isIntermediateSum: true,
            color: Highcharts.getOptions().colors[1]
        }, {
            name: 'Connectivity',
            y: 75000
        }, {
            name: 'Platform1',
            y: 37000
        }, {
          name: 'D & A Efficients',
          y: -233000
      }, {
        name: 'Portfollo',
        y: 233000
    }, {
          name: 'Portfollo Efficients',
          y: 233000
      },{
        name: 'Cat Digitals',
        y: 233000
    },{
      name: 'Savings',
      y: 233000
  },{
      name: 'Data & Analysis',
      isSum: true,
      color: Highcharts.getOptions().colors[1]
  },],
        dataLabels: {
            enabled: true,
            formatter: function () {
                return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'M';
            },
            style: {
                fontWeight: 'bold'
            }
        },
    
        // series: 
        // this.getseries(chartData)
        pointPadding: 0
    }]
    
  }
  this.scChart = new Chart(this.scChartOptions);
}
  setTranslation(p, slice){
    p.sliced = slice;
    if(p.sliced){
        p.graphic.animate(p.slicedTranslation);
    } else {
        p.graphic.animate({
            translateX: 0,
            translateY: 0
        });
    }

  }

  timeStamps(obj){
    this.selectItemStamp = obj;
    this.itemSelector=true;
    this.prescreen=false;
    console.log("data from timestamp",obj,this.selectItemStamp)
   // this.router.navigate(['/time']);
    this.back = true;
  }
  getTimeStampData(){
    this.caterpillar.getContractValue('contractbyvalue').subscribe(data=>{
      console.log("contarct data",data);
    })
  }
  addtimestamp(){
    this.addtimestampform=true;
    this.Addcomments.push("1");

  }
  removeItem(i: number): void {
    this.Addcomments.splice(i, 1);
  }
  previousUrl1() {
    this.itemSelector=false;
    this.prescreen=true;
  }


}
