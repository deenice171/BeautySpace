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
    // let test: any = await this.http.get('services');
    // console.log('test--->', test);
    await this.getServices();
  }

  async getServices() {
    this.myArr = await this.http.get('services');
    this.myArr = await this.http.get('services');
    console.log('myArray--->', this.myArr);
  }

  toggleClass() {
    console.log('toggle button pressed...');
    this.shouldShowRed = !this.shouldShowRed;
    return this.shouldShowRed;
  }

  async remove(id: any) {
       // this.myArr.splice(index, 1);
    console.log('id from remove: ID', id);
    let resp: any = await this.http.remove('services', id);
    console.log('resp from remove...resp"  ', resp);
    if (resp) {
      console.log('from if statement...');
      this.getServices();
    }
  }

  update(record) {
    this.newRecord = record;
  }



  async addRecord(record?: any) {
    let payload: any = {}, resp;
    payload = {
      Service: record ? record.service : 'default',
      Name: record ? record.name : 'default',
      Profession: record ? record.profession : 'default',
      Cost: record ? record.cost : 'default'
    }
    if (record._id) {

      //do update
      resp = await this.http.update('services/id/${record._id}', payload);
    } else {
      //do create

    
    console.log('payload from addRecord', payload);
    //this.myArr.unshift(r);
    resp = await this.http.post('services', payload);
    console.log('resp from after posting the service', resp);
  }

  if (resp) {
    await this.getServices();
  }
}
}
