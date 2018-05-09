import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
private myArr:Array<object> = [];
  constructor() { }

  ngOnInit() {
    this.myArr = [
      {id: 1, name: "denise dedekian", profession: "cosmetologist", service: "hair", },
      {id: 2, name: "jack dedekian", profession: "makeup artist", service: "makeup", },
      {id: 3, name: "pauline dedekian", profession: "cosmetologist", service: "hair", },
      {id: 4, name: "mel dedekian", profession: "makeup artist", service: "makeup", },
      {id: 5, name: "christine dedekian", profession: "makeup artist", service: "makeup", },
      {id: 6, name: "baby dedekian", profession: "makeup artist", service: "makeup", },
    ]
    console.log('myArray--->', this.myArr)
  }

}
