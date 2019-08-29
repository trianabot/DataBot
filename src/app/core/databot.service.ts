import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabotService {
  private apiendpoint = environment.apiEndPoint;
  private linxupEndpoint = environment.linxupEndPoint;
  private linxupApiEndpoint = environment.linxupApiEndPoint;

  constructor(public http: HttpClient) { }

  loadHrdashboard1() {
    return this.http.get('../../assets/data/HR_Dashboard1.json');
  }

  loadHrHiringDashboard() {
    return this.http.get('../../assets/data/Hiring_pipelines (2).json');
  }
  loadHiringOnboarding() {
    return this.http.get('../../assets/data/Onbording_Status.json');
  }

  loadAttritionData(){
    return this.http.get('../../assets/data/Attrition_List.json');
  }

  loadEthnicityData(){
    return this.http.get('../../assets/data/ethnicity.json');
  }

  loadPoliticsData(){
    return this.http.get('../../assets/data/politics.json')
  }

  loadPoliticsTrendDistrict(){
    return this.http.get('../../assets/data/Dist_final.json');
  }

  loadPoliticsTrendAssembly(){
    return this.http.get('../../assets/data/Constituency_Final.json');
  }

  loadPoliticsTrendBooth(){
    return this.http.get('../../assets/data/booth_json_final.json');
  }

  private get_http_options() {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJjb21wYW55SWQiOiIzMjgzNTUiLCJpc3MiOiJhZ2lsaXMiLCJwZXJzb25JZCI6Ijk1MDIyMSIsImV4cCI6MTcyMjk5NzgxMiwiaWF0IjoxNTY1MTQ1MDEyLCJ1c2VybmFtZSI6ImluZm9AZGF0YWFnaWxlLmNvbSJ9.CFiTePNkn_DBWWb1Q5wc5PKz7RhrJhLnlY6TDw4oc_k'
    });
    let options = {
      headers: httpHeaders
    };
    return options;
  }


  clientRegistration(clientdata) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.apiendpoint + '/user/registertenant', JSON.stringify(clientdata), options);
  }


  userRegistration(userdata) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.apiendpoint + '/user/registeruser', JSON.stringify(userdata), options);
  }

  userLogin(loginData) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.apiendpoint + '/user/login', JSON.stringify(loginData), options);
  }

  /** Get the devices for the user */

  getDevices(userdata) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Encoding': 'application/gzip'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.linxupEndpoint + '/login', JSON.stringify(userdata), options);
  }

  /** Get the current location of the vehicle or device */

  getCurrentPostition(body) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Encoding': 'application/gzip'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.linxupEndpoint + '/map', JSON.stringify(body), options);
  }

  /** Get the historical data of particular vehicle or device */

  getVehicleHistory(body) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Encoding': 'application/gzip'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.linxupEndpoint + '/hist', JSON.stringify(body), options);
  }

  /** Get the stops of the devices or vehicles */

  getVehicleStops(body) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Encoding': 'application/gzip'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.linxupEndpoint + '/stops', JSON.stringify(body), options);
  }

  /** Get vehicle trips data */

  getVehicleTrips(body) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Encoding': 'application/gzip'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.linxupEndpoint + '/trips', JSON.stringify(body), options);
  }

  /**Get vehicle advanced trips */

  getVehicleAdvancedTrips(body) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Encoding': 'application/gzip'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.linxupEndpoint + '/advancedTrips', JSON.stringify(body), options);
  }

  getVehicleAlerts(body) {
    return this.http.post(this.linxupApiEndpoint + 'alerts', JSON.stringify(body), this.get_http_options());
  }

  getVehicleLocations(body) {
    return this.http.post(this.linxupApiEndpoint + 'locations', JSON.stringify(body), this.get_http_options());
  }
  getVehicleRouteLocations(body, imei) {
    return this.http.post(this.linxupApiEndpoint + 'locations' + '/' + imei, JSON.stringify(body), this.get_http_options());
  }
}
