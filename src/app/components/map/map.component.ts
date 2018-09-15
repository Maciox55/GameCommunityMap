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
    var imageBounds = [[-90, 180], [90, -180]];
    var trechville = [[15.989602069938704,55.733642578125],[21.989602069938704,61.733642578125]];

    var map = L.map('map').setView(defaultCoords,defaultZoom);
    //L.imageOverlay('assets/SCUM_Map.png',imageBounds,{attribution:"Maciox55"}).addTo(map);
    
    L.tileLayer('assets/SCUMTILES/{z}/{x}/{y}.png',{attribution:"Maciox55",minZoom: 1,maxZoom: 7,maxNativeZoom:3,noWrap:true}).addTo(map);
    L.imageOverlay('assets/Trenchylvania.png', trechville,{opacity:0.9}).addTo(map);

    map.on('click', function(e) {
      alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });

  }

}