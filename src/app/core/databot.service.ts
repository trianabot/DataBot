import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabotService {
  private apiendpoint = environment.apiEndPoint;

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


}
