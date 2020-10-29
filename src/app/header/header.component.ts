import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
  }
 
  tab: number =1;
  updateTab(tab: number) {
    this.tab = tab;
    console.log(tab)
  }
}
