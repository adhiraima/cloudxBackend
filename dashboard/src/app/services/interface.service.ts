import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class InterfaceService {

  constructor(public http: Http) {
    console.log(window.location.origin + " >>>>>>>> ");
    
  }

  public getUpload(): Observable<any> {
    return this.http.get(window.location.origin + '/uploads')(res: Response) => {
      return res.json()
    });
  }

  public getDownload(): Observable<any> {
    return this.http.get(window.location.origin + '/downloads').map((res: Response) => {
      return res.json();
    });
  }
}
