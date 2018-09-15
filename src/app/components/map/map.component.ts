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
    var trechville = [[15.989602069938704,55.733642578125],[21.989602069938704,61.733642578125]];

    var map = L.map('map').setView(defaultCoords,defaultZoom);
    L.tileLayer('/dist/SCUMMap/assets/SCUMTILES/{z}/{x}/{y}.png',{attribution:"Maciox55",minZoom: 1,maxZoom: 7,maxNativeZoom:3}).addTo(map);
    L.imageOverlay('/dist/SCUMMap/assets/Trenchylvania.png', trechville,{opacity:0.9}).addTo(map);

    map.on('click', function(e) {
      alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });

  }

}