import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  childmessage : string = "I am passed from Parent to child component"
  title:any;
  userName:any;
  addClient :boolean =false;
  addUser :boolean = false;
  userRole:any;

  constructor(private router : Router) {
    this.title = localStorage.getItem('title');
    this.userName = localStorage.getItem('userName');
  }

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole');
    if(this.userRole == "superadmin"){
      this.addClient = true;
      this.addUser = false;
    }
     if(this.userRole == "Client"){
      console.log("User Role" + this.userRole)
      this.addUser = true;
      this.addClient = false;
    }
     if(this.userRole == "User"){
     console.log("User Role" + "" + this.userRole)
      this.addUser = false;
      this.addClient = false;
    }
  }
  logOut(){
    this.router.navigate(['/login']);
    localStorage.removeItem("HR Overview");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");

  }
  showDashBoard(){
    this.router.navigate(['/industries']);
    localStorage.removeItem('title');

  }
  showSideMenu()
  {

    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   }

}
