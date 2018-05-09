import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _title = 'TestApp';
  private myArr:Array<Object> = [];

  // private myArr2:Object [] = [];
  constructor() {
    // setup
}

ngOnInit() {
  console.log('angular initializing..');
  this.myArr = [
    {id: 1, name: "denise dedekian", profession: "cosmetologist", service: "hair", },
    {id: 2, name: "jack dedekian", profession: "makeup artist", service: "makeup", },
    {id: 3, name: "pauline dedekian", profession: "cosmetologist", service: "hair", },
    {id: 4, name: "mel dedekian", profession: "makeup artist", service: "makeup", },
    {id: 5, name: "christine dedekian", profession: "makeup artist", service: "makeup", },
  ]
  console.log('myArray--->', this.myArr)
}


private get Title() {
   return this._title;

 }
 private set Title(title:any) {
   this._title = title;
 }
}