import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared-services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private myArr: Array<object> = [];
  private shouldShowRed: boolean = false;
  private pStyle: object = {};
  private newRecord: object = {};

  constructor(
    private http: HttpService
  ) { }

  async ngOnInit() {
    this.pStyle = {
      "color": "blue"
    };
   let test: any = await this.http.get('services');
   console.log('test--->', test);
    this.myArr = [
      {id: 1, service: "Wedding hair", name: "denise dedekian", profession: "cosmetologist", cost: "90", },
      {id: 2, service: "prom makeup", name: "jack dedekian", profession: "makeup artist", cost: "150", },
      {id: 3, service: "hair stylist", name: "pauline dedekian", profession: "cosmetologist", cost: "100", },
      {id: 4, service: "makeup", name: "mel dedekian", profession: "makeup artist", cost: "10", },
      {id: 5, service: "makeup", name: "christine dedekian", profession: "makeup artist", cost: "20", },
      {id: 6, service: "makeup", name: "baby dedekian", profession: "makeup artist", cost: "50", },
    ]

    console.log('myArray--->', this.myArr);
  }

  toggleClass() {
    console.log('toggle button pressed...');
    this.shouldShowRed = !this.shouldShowRed;
    return this.shouldShowRed;
  }

  remove(index: any) {
    console.log('index of this item is:::', index);
    this.myArr.splice(index, 1);
  }

  addRecord(record?: any) {
    let r = {
      id: record ? record.id : 'default',
      service: record ? record.service : 'default',
      name: record ? record.name : 'default',
      profession: record ? record.profession : 'default',
      cost: record ? record.cost : 'default'
    }
    this.myArr.unshift(r);
  }


}