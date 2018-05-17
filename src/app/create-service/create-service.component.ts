import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared-services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  private newRecord: object = {};

  constructor(private http:HttpService, private router:Router ) { };

  ngOnInit() {
  }
  update(record) {
    this.newRecord = record;
  }



  async addRecord(record?: any) {
    let payload: any = {}, resp;
    payload = {
      service: record ? record.service : 'default',
      name: record ? record.name : 'default',
      profession: record ? record.profession : 'default',
      cost: record ? record.cost : 'default',
     
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
  //  await this.getServices();
  this.router.navigate([''])
  }
}

}
