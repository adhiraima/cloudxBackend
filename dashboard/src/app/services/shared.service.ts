import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  latitude: number;
  longitude: number;

  constructor() {
    if ("geolocation" in navigator && navigator.geolocation) {
      console.log('Geolocation is available');
      navigator.geolocation.getCurrentPosition(this.getCoor, this.errorCoor, 
        {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
    } else {
      console.log('geolocation is not available')
    }
   }

   getCoor(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
   }

   errorCoor() {
    this.latitude = 0;
    this.longitude = 0;
   }

  getCurrentLatitude(): number {
    return this.latitude;
    
  }

  getCurrentLongitude(): number {
    return this.longitude;
  }
}
