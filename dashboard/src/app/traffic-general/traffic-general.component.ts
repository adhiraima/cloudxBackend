import { Component, OnInit } from '@angular/core';
import { TrafficService } from '../services/traffic.service';
import { _ } from 'underscore';
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
        let hostsDirty = JSON.parse(res.text()).data;
        _.each(hostsDirty, function(hostEntry) {
          hostEntry.column_thpt = hostEntry.column_thpt.substring(0, hostEntry.column_thpt.indexOf('<') - 1);
        });
        this.hosts = hostsDirty;
        console.log("country the response in frontend >>>>>" + JSON.stringify(hostsDirty));
      } else {
        this.hosts = [];
      }
    });
    setTimeout(() => {
      this.getTrafficGeneral();
    }, this.timeOut);
  }

}
