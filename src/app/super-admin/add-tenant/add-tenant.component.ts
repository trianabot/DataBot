import { ClientRegister } from './../../../models/clientregister.model';
import { DatabotService } from './../../core/databot.service';
import { CustomValidators } from './../../../validators/customvalidator';
import { EmailValidator } from './../../../validators/email';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent implements OnInit {
  usecasejsonData:any;
  usecaseName:any =[];
  useCaseType:any =[];
  clientForm: FormGroup;
  organizationCategories :any = [];
  industryusecasearr :any =[];
  selectedValue :any;
  modelText: any;


  
  clientRegister= {}  as ClientRegister;
  constructor(private formBuilder: FormBuilder, public databotService: DatabotService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
 
  

      this.clientForm = this.formBuilder.group({
      organizationName: ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      contactNumber: ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      industries: [''],
      industriesUseCase: [''],
      officialMailId: ['', Validators.compose([Validators.required,Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i), EmailValidator.checkEmail])],
      adminName: ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, CustomValidators.patternValidator(/\d/, {
        hasNumber: true
      }),
      // check whether the entered password has upper case letter
      CustomValidators.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }),
      // check whether the entered password has a lower case letter
      CustomValidators.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }),
      // check whether the entered password has a special character
      CustomValidators.patternValidator(
        /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        {
          hasSpecialCharacters: true
        }
      ),
      Validators.minLength(8)])],
      alternativeEmail: ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      userName:['', Validators.compose([Validators.required,Validators.minLength(4)])],
      secQues1: ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      answer1: ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      secQues2: ['', Validators.compose([Validators.required,Validators.minLength(4)])],
      answer2: ['', Validators.compose([Validators.required,Validators.minLength(4)])]
    },
    {
      // check whether our password and confirm password match
      validator: CustomValidators.passwordMatchValidator
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
    this.spinner.show();
  //   setTimeout(() => {
  //     /** spinner ends after 5 seconds */
  //     this.spinner.hide();
  // }, 5000);
    let industries:any = [];
    let industriesUseCase:any =[];
    let usecases:any = [];
    industries.push(this.clientForm.value.industries);
    usecases.push(this.clientForm.value.industriesUseCase)
    industriesUseCase.push({"industryName": this.clientForm.value.industries,
                        "industriesUsecase":usecases});
    this.clientRegister.adminId = localStorage.getItem('userId');
    this.clientRegister.adminName = this.clientForm.value.adminName;
    this.clientRegister.organizationName = this.clientForm.value.organizationName;
    this.clientRegister.industries = industries;
    this.clientRegister.industriesUsecase = industriesUseCase;
    this.clientRegister.contactNumber = this.clientForm.value.contactNumber;
    this.clientRegister.adminRole = 'Business';
    this.clientRegister.role = 'Client';
    this.clientRegister.emailId = this.clientForm.value.officialMailId;
    this.clientRegister.alternativeEmailId = this.clientForm.value.alternativeEmail;
    this.clientRegister.userName = this.clientForm.value.userName;
    this.clientRegister.password = this.clientForm.value.confirmPassword;
    this.clientRegister.securityQuestions = [
      {question: this.clientForm.value.secQues1 , answer : this.clientForm.value.answer1},
      {question: this.clientForm.value.secQues2 , answer : this.clientForm.value.answer2}
    ];

    console.log(this.clientRegister);
   
    this.databotService.clientRegistration(this.clientRegister).subscribe(data => {
      
     console.log(data['message']);
    
     this.modelText = data['message'];
     $('#myModal').modal('show');
     this.spinner.hide();
      
    },(err)=> {
      console.log(JSON.stringify(err['error']['message'])+"this is error");
      this.modelText = err['error']['message'];
    $('#myModal').modal('show');
    this.spinner.hide();
    })
    // this.modelText = "Registration Successful";
    // $('#myModal').modal('show');
    
     }

}
