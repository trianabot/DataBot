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
  constructor(private router : Router) { 
    this.title = localStorage.getItem('title');
  }

  ngOnInit() {
  }
  logOut(){
    this.router.navigate(['/login']);
  
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
