import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared-services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private myArr: Array<object> = [];
  private shouldShowRed: boolean = false;
  private pStyle: object = {};

  constructor(
    private http: HttpService,
    private router: Router
    
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
    console.log('id from remove: id', id);
    let resp: any = await this.http.remove('services', id);
    console.log('resp from remove...resp"  ', resp);
    if (resp) {
      console.log('from if statement...');
      this.getServices();
    }
  }



goToCreateService() {
  this.router.navigate(['create-service']);
}
}
