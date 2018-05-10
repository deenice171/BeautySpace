import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  get() {
    console.log('from http service get function....')
  }

  post() {

  }

  put() {

  }
  remove() {
    
  }
}
