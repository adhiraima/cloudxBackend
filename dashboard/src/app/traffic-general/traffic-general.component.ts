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
  private currentPage: number;
  private pageSize: number;
  private total: number;

  constructor(private trafficService:TrafficService) {
    this.timeOut = 2000;
    this.currentPage = 1;
    this.pageSize = 8;
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
          if (hostEntry.column_name.indexOf('<') > 0)
            hostEntry.column_name = hostEntry.column_name.substring(0, hostEntry.column_name.indexOf('<') - 1);
        });
        this.hosts = hostsDirty;
      } else {
        this.hosts = [];
      }
      this.total = this.hosts.length;
    });
    setTimeout(() => {
      this.getTrafficGeneral();
    }, this.timeOut);
  }

  pageChanged(event) {
    console.log(event);
  }

}
