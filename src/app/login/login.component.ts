import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger, style, state, transition, animate, animation, keyframes } from '@angular/animations';
import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, private router: Router) { }
  login: FormGroup;
  ngOnInit() {

  }
  redirectRegister() {
    this.router.navigate(['./sign-up'])
  }


  register(register) {
    // if(this.userName =="Demo" && this.password =="Demo123"){

    // }
    // console.log(register.value)
    this.modelText = '';
    localStorage.removeItem("title");

    if (register.value.user == "" || register.value.password == "") {
      this.modelText = "Please enter username or password";
      $('#myModal').modal('show');
    }
    else if ((register.value.user == "Databotics" || register.value.user == "databotics") && register.value.password == "Databot@12345") {
      this.router.navigate(['/industries']);
      localStorage.setItem('userid', '1');
    } else if ((register.value.user == "Telematics" || register.value.user == "telematics") && register.value.password == "Databot@12345") {
      this.router.navigate(['/industries']);
      localStorage.setItem('userid', '2');
    } else if ((register.value.user == "Supplychain" || register.value.user == "supplychain") && register.value.password == "Databot@12345") {
      this.router.navigate(['/industries']);
      localStorage.setItem('userid', '3');
    }
    else if ((register.value.user == "Politics" || register.value.user == "politics") && register.value.password == "Databot@12345") {
      this.router.navigate(['/industries']);
      localStorage.setItem('userid', '4');
    }

    else {
      this.modelText = "Wrong Credentials";
      $('#myModal').modal('show');

    }

  }

}
