import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportusecasecomponent',
  templateUrl: './reportusecasecomponent.component.html',
  styleUrls: ['./reportusecasecomponent.component.css']
})
export class ReportusecasecomponentComponent implements OnInit {

  selected: any;
  expenseAnalysis = true;

  constructor() { }

  ngOnInit() {
      this.selected = 1;
  }

  setactiveProject(item: any) {
    this.expenseAnalysis = true;
    this.selected = item;
  }

  

  isActive(item: any) {
    return this.selected === item;
  }
}
