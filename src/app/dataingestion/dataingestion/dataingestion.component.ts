import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = environment.apiEndPoint + '/file/upload';

@Component({
  selector: 'app-dataingestion',
  templateUrl: './dataingestion.component.html',
  styleUrls: ['./dataingestion.component.css']
})
export class DataingestionComponent implements OnInit {

  testChart: any;
  options: any;
  fileToUpload: any;
  apiArray = [];
  tableHeaders = [];
  tableData: any = [];
  p: number = 1;
  selectedApi: any;
  showTable: boolean = false;
  dashBoardArray: any = [];

  uploader: FileUploader = new FileUploader({ url: URL });
  attachmentList: any = [];
  filesToUpload: Array<File> = [];

  selectedDashBoard: any;
  selectedApiList = [];
  selectedDashboardList = [];

  constructor(public http: HttpClient) {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(typeof JSON.parse(response));
      var obj = JSON.parse(response);
      this.apiArray.push(obj.apiurl);
      //  console.log(this.apiArray);
    };
  }

  // download(index) {
  //   const filename = this.attachmentList[index].uploadname;

  //   this._fileService.downloadFile(filename)
  //     .subscribe(
  //       data => console.log(data),
  //       error => console.error(error)
  //     );
  // }


  ngOnInit() {
    var usecases = JSON.parse(localStorage["usecases"]);
    this.showDashboards(usecases);
  }

  showDashboards(usecaseslist) {
    var index: any;
    for (index in usecaseslist) {
      switch (usecaseslist[index]) {
        case 'Production':
          this.dashBoardArray = ["Project Management"];
          break;
        case 'Inventory Management':
          this.dashBoardArray = ["Inventory Management","Stock Availability","Track Order"];
          break;
        case 'Performance':
          this.dashBoardArray = [];
          break;
        case 'Inventory Forecasting':
          this.dashBoardArray = [];
          break;
        case 'Telematics':
          this.dashBoardArray = ["Fleet Overview","Driver Profile","vehicle Live Metrics","Customer Feedback Analysis"];
          break;
        case 'Fleet Track':
          this.dashBoardArray = [];
          break;
        case 'Reporting':
          this.dashBoardArray = ["Expenses Analytics"];
          break;
        case 'Forecasting':
          this.dashBoardArray = [];
          break;
        case 'Work Force':
          this.dashBoardArray = ["HR Overview","HR Hiring Machine"];
          break;
        case 'Statistics':
          this.dashBoardArray = [];
          break;
        case 'Supplies':
          this.dashBoardArray = ["Health Care Analytics"];
          break;
        case 'Billing':
          this.dashBoardArray = [];
          break;
        case 'Consumption':
          this.dashBoardArray = [];
          break;
        case 'Management':
          this.dashBoardArray = [];
          break;
      }
    }
  }

  changeValue(api) {
    this.tableHeaders = [];
    var apivalue = api.currentTarget.value;
    console.log(apivalue + "" + typeof apivalue);
    this.http.get(apivalue).subscribe(data => {
      console.log(data);
      this.tableData = data;
      let responseData = data[0];
      for (var key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          this.tableHeaders.push(key);
          console.log(this.tableHeaders);
        }
      }
    });
  }

  apiList(list) {
    this.selectedApi = list;

  }

  dashBoardList(dashboard) {
    this.selectedDashBoard = dashboard;
  }

  showgotoDashBoard(dashboard,api) {
    this.showTable = true;
    this.selectedApiList.push({"api":this.selectedApi,"dashboard":this.selectedDashBoard});
    localStorage.setItem(dashboard,api);


  }
}
