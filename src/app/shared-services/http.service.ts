import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  private apiUrl: string = '';
  constructor(private http: Http) {
    this.apiUrl = environment.apiUrl;
  
}

  get(path:string) {
    console.log('from http service get function....endpoint: ',this.apiUrl + path);
    return this.http.get(this.apiUrl + path)
    .toPromise()
    .then((resp:any) => {
      //console.log('response from server...', resp);
      return resp.json();
    });
  }

  post(){

  }

  put() {

  }
  remove() {
    
  }
}
