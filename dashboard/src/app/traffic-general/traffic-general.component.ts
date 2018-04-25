import { Component, OnInit } from '@angular/core';
import { TrafficService } from '../services/traffic.service';
@Component({
  selector: 'app-traffic-general',
  templateUrl: './traffic-general.component.html',
  styleUrls: ['./traffic-general.component.css']
})
export class TrafficGeneralComponent implements OnInit {
  private hosts: any[];
  private timeOut: number;

  constructor(private trafficService:TrafficService) {
    this.timeOut = 2000;
  }

  ngOnInit() {
    this.getTrafficGeneral();
  }

  ngOnDestroy() {
    clearTimeout(this.timeOut);
  }

  getTrafficGeneral() {
    this.trafficService.getTrafficGeneral().subscribe((res) => {
      if (res) {
        console.log("data >>>>> " + JSON.parse(res.text()).data);
        this.hosts = JSON.parse(res.text()).data;
      } else {
        this.hosts = [];
      }
    });
    setTimeout(() => {
      this.getTrafficGeneral();
    }, this.timeOut);
  }

}
