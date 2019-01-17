import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http ,Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// //import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient, private https:Http) { }

  // loadDataforVehicle() {
  //   return this.http.get<any[]>('..')
   
    
  //   }
    private handleError(err: HttpErrorResponse) {
      //console.log(err.message);
      return Observable.throw(err.message);
  }
}
