import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger, style, state, transition, animate, animation, keyframes } from '@angular/animations';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { DatabotService } from '../core/databot.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  modelText: any;
  constructor(private fb: FormBuilder, private router: Router,public databotService: DatabotService,private spinner: NgxSpinnerService) { }
  login: FormGroup;
  ngOnInit() {

  }
  redirectRegister() {
    this.router.navigate(['./sign-up'])
  }


  register(register) {
    this.spinner.show();
    console.log(register.value)
    this.modelText = '';
    if (register.value.user == "" || register.value.password == "") {
      this.modelText = "Please enter username or password";
      console.log(this.modelText);
      $('#myModal').modal('show');
      this.spinner.hide();
    }
    else if (register.value.user != "" && register.value.password != ""){
      let body = {
        emailId:register.value.user,
        password:register.value.password
      }
      console.log(body);
      this.databotService.userLogin(body).subscribe(data => {
        console.log(data);
        if(data['success'] == true){
          localStorage.setItem("userId",data['userData']['userId']);
          localStorage.setItem("userRole",data['userData']['role']);
          localStorage.setItem("userName", data['userData']['userName']);
          this.router.navigate(['./industries']);
         

        }else if(data['success'] == false){
          this.modelText = data['msg'];
          $('#myModal').modal('show');
          this.spinner.hide();
        }
      },(err)=> {
        console.log(JSON.stringify(err['error']['message'])+"this is error");
        this.modelText = err['error']['message'];
        $('#myModal').modal('show');
        this.spinner.hide();
       } )
    }
    else {
      this.modelText = "Wrong Credentials";
      console.log(this.modelText);
      $('#myModal').modal('show');
      this.spinner.hide();

    }

  }

}
