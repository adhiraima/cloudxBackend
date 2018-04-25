import { Component, OnInit } from '@angular/core';
import { TrafficService } from '../services/traffic.service'
@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent implements OnInit {
  private countries: any[];
  private timeOut: number;

  constructor(private trafficService: TrafficService) { 
    this.timeOut = 2000;
  }

  ngOnInit() {
    this.getTrafficByCountry();
  }

  ngOnDestroy() {
    clearTimeout(this.timeOut);
  }

  getTrafficByCountry() {
    this.trafficService.getTrafficCountry().subscribe((res) => {
      console.log("country the response in frontend >>>>>" + res.text() + ">>>>>>" + res);
      if (res)
        this.countries = JSON.parse(res.text()).data;
      else
        this.countries = [];
    });
    setTimeout(() => {
      this.getTrafficByCountry();
    }, this.timeOut);
  }

}
