import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger,style,state,transition,animate, animation, keyframes} from '@angular/animations';
import { Router } from '@angular/router'; 
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {
    userName:any;
    password :any;
    modelText: any;
  constructor(private fb:FormBuilder,private router : Router) { }
  login:FormGroup;
  ngOnInit() {
  
  }
  redirectRegister(){
    this.router.navigate(['./sign-up'])
   }


  register(register){
    // if(this.userName =="Demo" && this.password =="Demo123"){

    // }
    // console.log(register.value)
    this.modelText = '';
        if(register.value.user == "" || register.value.password == ""){
            this.modelText = "Please enter username or password";
            console.log(this.modelText);
            $('#myModal').modal('show');
          }
        else if((register.value.user == "Demo" || register.value.user == "demo" ) && register.value.password == "Databot@123"){
          
             this.router.navigate(['/industries']);
        }
        else{
          this.modelText = "Wrong Credentials";
          console.log(this.modelText);
          $('#myModal').modal('show');

        }

  }
  
}
