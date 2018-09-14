import { Component, OnInit } from '@angular/core';


declare var L: any;
const defaultCoords: number[] = [0, 0];
const defaultZoom: number = 3;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    var imageBounds = [[66, -90], [-66, 90]];
    var map = L.map('map').setView(defaultCoords,defaultZoom);
    map.maxZoom = 7;
    L.imageOverlay('/src/assets/SCUM_Map.png',imageBounds).addTo(map);

    map.on('click', function(e) {
      alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });

  }

}