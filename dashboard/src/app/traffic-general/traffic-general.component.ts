import { Component, OnInit } from '@angular/core';
import { TrafficService } from '../services/traffic.service';
@Component({
  selector: 'app-traffic-general',
  templateUrl: './traffic-general.component.html',
  styleUrls: ['./traffic-general.component.css']
})
export class TrafficGeneralComponent implements OnInit {

  constructor(private trafficService:TrafficService) { }

  ngOnInit() {
  }

}
