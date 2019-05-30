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
  userId:any;
  constructor(private router : Router) {
    this.userId = localStorage.getItem('userid');
    console.log(this.userId);
    if(localStorage.getItem('title') == "" || localStorage.getItem('title')== null || localStorage.getItem('title')== undefined){
      this.title = '';
    }else{
      this.title = localStorage.getItem('title');
    }

  }

  ngOnInit() {
   this.loadIndustries();


}

loadIndustries(){
   var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
  }

  logOut(){
    this.router.navigate(['/login']);
  localStorage.removeItem('title');
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
