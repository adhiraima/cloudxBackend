import { Component, OnInit } from '@angular/core';
import { AgmMap, MouseEvent } from '@agm/core';
import { SharedService } from '../services/shared.service'


@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.css']
})
export class MapInfoComponent implements OnInit {
  zoom: number = 3;
  
  // initial center position for the map
  lat: number;
  lng: number;

  constructor(private sharedService: SharedService) {
    this.lat = sharedService.getCurrentLatitude();
    this.lng = sharedService.getCurrentLongitude();
    console.log(this.lat + ' and ' + this.lng);
  }

  ngOnInit() {
    console.log('loading map!!!' + this.lat + ' and ' + this.lng);
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}