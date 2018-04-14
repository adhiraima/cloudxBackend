import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { InterfaceService } from '../services/interface.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-interface-stats',
  templateUrl: './interface-stats.component.html',
  styleUrls: ['./interface-stats.component.css']
})
export class InterfaceStatsComponent implements OnInit {

  public wlanUpload:number;
  public wlanDownload: number;
  public ethUpload: number;
  public ethDownload: number;
  private timeOut: any;

  constructor(private interfaceService: InterfaceService) { }

  ngOnDestroy() {
    clearTimeout(this.timeOut);
  }

  ngOnInit() {
    this.getUpDownData();
  }

  getUpDownData() {
    this.interfaceService.getUpload().subscribe((res) => {
      this.wlanUpload = res;
    });
    this.interfaceService.getUpload().subscribe((res) => {
      this.ethUpload = res;
    });
    this.interfaceService.getDownload().subscribe((res) => {
      this.wlanDownload = res;
    });
    this.interfaceService.getDownload().subscribe((res) => {
      this.ethDownload = res;
    });
    setTimeout(() => {
      this.getUpDownData();
    }, 5000);
  }
}
