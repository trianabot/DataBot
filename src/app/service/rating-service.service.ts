import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rating } from '../models/rating';
@Injectable({
  providedIn: 'root'
})
export class RatingServiceService {

  constructor(private http: HttpClient, private https:Http,private router: Router) { }
  getProjectAllProjectsData(): Observable<Rating[]>{
    return this.http.get<Rating[]>("http://ec2-3-231-255-189.compute-1.amazonaws.com:4006/project/getall")
  }




  
  getProjectDetailsById(id){
    return this.http.get("http://ec2-3-231-255-189.compute-1.amazonaws.com:4006/project/"+id)
  }
  
  createProject(obj){
    return this.http.post("http://ec2-3-231-255-189.compute-1.amazonaws.com:4006/project/create",obj);
  }
  createProductData(obj){
    return this.http.put('http://ec2-3-231-255-189.compute-1.amazonaws.com:4006/project/updateproject',obj)
  }
  DeleteProject(id){
    return this.http.delete('http://ec2-3-231-255-189.compute-1.amazonaws.com:4006/project/delete/',id)
  }
  updatingProject(obj){
    return this.http.put('http://ec2-3-231-255-189.compute-1.amazonaws.com:4006/project/updaterating',obj)
  }
}
