import { DatabotService } from './../../core/databot.service';
import { UserRegister } from './../../../models/clientregister.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
declare var $: any;
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  userRegister = {} as UserRegister;
  usecasejsonData:any;
  usecaseName:any =[];
  useCaseType:any =[];
  organizationCategories :any = [];
  modelText: any;

  constructor(private formBuilder: FormBuilder, private databotService: DatabotService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      lastName:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      industries: [''],
      industriesUseCase: [''],
      emailId:['',Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
      alternateEmailId:['',Validators.compose([Validators.required])],
      userName:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(8)])],
      designation:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      location:['',Validators.compose([Validators.required,Validators.minLength(4)])],
      contactNumber:['',Validators.compose([Validators.required,Validators.minLength(4)])]
    });
    this.loaduseCase();
  }

  loaduseCase(){
    this.databotService.loadUseCase().subscribe(data => {
      this.usecasejsonData = data;
      var index: any;
      for (index in this.usecasejsonData) {
       if (this.organizationCategories.indexOf(this.usecasejsonData[index].Industry) < 0) {
          this.organizationCategories.push(this.usecasejsonData[index].Industry);
           }
         }
     });
  }

  changeIndustry(usecase){
    
    this.useCaseType =[];
    var index: any;
    this.usecaseName = usecase.currentTarget.value;
    console.log(this.usecaseName);
   for (index in this.usecasejsonData) {
      if (this.usecasejsonData[index].Industry === this.usecaseName) {

        if (this.useCaseType.indexOf(this.usecasejsonData[index].UseCase) < 0) {
          this.useCaseType = this.usecasejsonData[index].UseCase;

         
            } 
        }
    }
  }


  onSubmit() {
    // console.log(this.userForm.value);
    this.spinner.show();
    let industries:any = [];
    let industriesUseCase:any =[];
    let usecases:any = [];
    industries.push(this.userForm.value.industries);
    usecases.push(this.userForm.value.industriesUseCase)
    industriesUseCase.push({"industryName": this.userForm.value.industries,
                        "industriesUsecase":usecases});
    this.userRegister.clientId = localStorage.getItem('userId');
    this.userRegister.userName = this.userForm.value.userName;
    this.userRegister.firstName = this.userForm.value.firstName;
    this.userRegister.lastName = this.userForm.value.lastName;
    this.userRegister.emailId = this.userForm.value.emailId;
    this.userRegister.role = "User";
    this.userRegister.industries = industries;
    this.userRegister.industriesUsecase = industriesUseCase;
    this.userRegister.alternateEmail = this.userForm.value.alternateEmailId;
    this.userRegister.password = this.userForm.value.password;
    this.userRegister.designation = this.userForm.value.designation;
    this.userRegister.phone = this.userForm.value.contactNumber;
    this.userRegister.location = this.userForm.value.location;

    console.log(this.userRegister);

    this.databotService.userRegistration(this.userRegister).subscribe(data => {
      console.log(data['message']);
     this.modelText = data['message']
    $('#myModal').modal('show');
    this.spinner.hide();
    },(err)=> {
      console.log(JSON.stringify(err['error']['message'])+"this is error");
      this.modelText = err['error']['message'];
    $('#myModal').modal('show');
    this.spinner.hide();
    } );
  }

}
