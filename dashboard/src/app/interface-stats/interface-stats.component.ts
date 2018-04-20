import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { InterfaceService } from '../services/interface.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-interface-stats',
  templateUrl: './interface-stats.component.html',
  styleUrls: ['./interface-stats.component.css']
})
export class InterfaceStatsComponent implements OnInit, AfterViewInit {

  public wlanUpload: Array<number> = [];
  public wlanDownload: Array<number> = [];
  public ethUpload: Array<number> = [];
  public ethDownload: Array<number> = [];
  private timeOut: number;
  private wLanUpTime: Array<string> = [];
  private wLanDownTime: Array<string> = [];
  private ethUpTime: Array<string> = [];
  private ethDownTime: Array<string> = [];
  private type:string = 'line';
  private dataWlUpload: any;
  private dataWlDownload: any;
  private dataEthUpload: any;
  private dataEthDownload: any;
  private options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true,
                min: 0,
                max: 100
            }
        }]
    },
    legend: {
        display: false
    }
  };

  constructor(private interfaceService: InterfaceService) {
    console.log("constructor called");
    this.timeOut = 2000;
   }

  ngOnDestroy() {
    clearTimeout(this.timeOut);
  }

  ngOnInit() {
    console.log("init called");
  }

  ngAfterViewInit() {
    console.log("Afterview Init")
    this.getUpDownData();
  }
  

  getUpDownData() {
    var date = new Date();
    var dateString = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    this.interfaceService.getUpload().subscribe((res) => {
      if (this.wlanUpload.length == 10) {
        this.wlanUpload.shift();
        this.wLanUpTime.shift();
      }
      this.wlanUpload.push(parseInt(res.text()));
      this.wLanUpTime.push(dateString);
      this.dataWlUpload = {
        labels: this.wLanUpTime,
        datasets: [
          {
            data: this.wlanUpload
          }
        ]
      };
    });
    this.interfaceService.getUpload().subscribe((res) => {
      if (this.ethUpload.length == 10) {
        this.ethUpload.shift();
        this.ethUpTime.shift();
      }
      this.ethUpload.push(parseInt(res.text()));
      this.ethUpTime.push(dateString);
      this.dataEthUpload = {
        labels: this.ethUpload,
        datasets: [
          {
            data: this.ethUpload
          }
        ]
      };
    });
    this.interfaceService.getDownload().subscribe((res) => {
      if (this.wlanDownload.length == 10) {
        this.wlanDownload.shift();
        this.wLanDownTime.shift();
      }
      this.wlanDownload.push(parseInt(res.text()));
      this.wLanDownTime.push(dateString);
      this.dataWlDownload = {
        labels: this.wLanDownTime,
        datasets: [
          {
            data: this.wlanDownload
          }
        ]
      };
    });
    this.interfaceService.getDownload().subscribe((res) => {
      if (this.ethDownload.length == 10) {
        this.ethDownload.shift();
        this.ethDownTime.shift();
      }
      this.ethDownload.push(parseInt(res.text()));
      this.ethDownTime.push(dateString);
      this.dataEthDownload = {
        labels: this.ethDownTime,
        datasets: [
          {
            data: this.ethDownload
          }
        ]
      };
    });
    setTimeout(() => {
      this.getUpDownData();
    }, this.timeOut);
  }
}
