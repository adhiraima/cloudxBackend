import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() {
    if ("geolocation" in navigator && navigator.geolocation) {
      console.log('Geolocation is available');
    } else {
      console.log('ggeolocation is not available')
    }
   }

  getCurrentLatitude(): any {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(">>>>>>>"+JSON.stringify(Object.keys(position)));
      return position.coords.latitude;
    }, 
    function(error) {
      console.log("Error>>> " + error.message);
    });
  }

  getCurrentLongitude(): any {
    navigator.geolocation.getCurrentPosition(function(position) {
      return position.coords.longitude;
    });
  }

}
