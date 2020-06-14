import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories = [
    {"id" : 1 ,"category" : "Vegetarian"},
    {"id" : 2 ,"category" : "Non-Vegetarian"}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  

}
