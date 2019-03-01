import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'http://localhost:4000/file/upload';

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
  tableData:any = [];
  p: number = 1;

  uploader: FileUploader = new FileUploader({ url: URL });
  attachmentList: any = [];
  filesToUpload: Array<File> = [];

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

  }

  changeValue(api) {
    this.tableHeaders = [];
    var apivalue = api.currentTarget.value;
    console.log(apivalue + "" + typeof apivalue);
    this.http.get(apivalue).subscribe(data => {
      console.log(data);
      this.tableData =  data;
      let responseData = data[0];
      for (var key in responseData) {
        if (responseData.hasOwnProperty(key)) {
            this.tableHeaders.push(key);
            console.log(this.tableHeaders);
        }
      }
    });
  }

}
