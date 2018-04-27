import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class TrafficService {

  constructor(public http: Http) { 
    console.log('initiialized.. traffic service!!');
  }

  public getTrafficCountry(): Observable<any> {
    return this.http.get(window.location.origin + '/traffic-country');
  }

  public getTrafficGeneral(): Observable<any> {
    console.log(window.location.origin + '/traffic-general');
    return this.http.get(window.location.origin + '/traffic-general');
  }
}
