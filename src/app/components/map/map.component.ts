import { Component, OnInit } from '@angular/core';


declare var L: any;
const defaultCoords: number[] = [-127.73484714925428, 128.5];
const defaultZoom: number = 3;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    var map = L.map('map',{crs:L.CRS.Simple}).setView(defaultCoords,defaultZoom);
 
    var towns = {trenchville:[[-116.46035048129474,167.53125],[-111.41907350763373, 172.15625]],
                 dewhurst: [[-235.73978570924862, 133.84375],[-228.1172054053101, 141.84375]],
                 craydon:[[-28.684182834702582, 66.71875],[-19.062450416064316, 76.59375]],
                 blackisle:[[-93.01282846602729, 229.484375],[-86.21811036722964, 237.984375]],
                 oakheart:[[-172.1697875163076, 23.265625],[-164.5940673371884, 31.609375]]
    }

    var townLabels = [
      {pos:[-111.49998512481929, 167.578125],
      labelText:'Trenchylvania'},
      {pos:[-228.08855360354008, 133.96875],
      labelText:'Dewhurst'},
      {pos:[-18.934941468918584, 66.8125],
      labelText:'Craydon'},
      {pos:[-85.93303744578823, 229.65625],
      labelText:'Blackisle'},
      {pos:[-164.108022460421, 23],
      labelText:'Oakheart'}

    ];
      
    
    var markers = [];
    

    var imageBounds = [[-90, 180], [90, -180]];
    //L.imageOverlay('assets/SCUM_Map.png',imageBounds,{attribution:"Maciox55"}).addTo(map);
    
    //L.circle([-116.46035048129474,167.53125], {radius: 10}).addTo(map).on("click", circleClick);
    L.tileLayer('assets/SCUMTILES/{z}/{x}/{y}.png',{attribution:"Maciox55",bounds:[[0, 0],[-256, 256]],minZoom: 1,maxZoom: 8,maxNativeZoom:3,noWrap:true}).addTo(map);
    L.imageOverlay('assets/Trenchylvania.png', towns.trenchville,{opacity:1}).addTo(map);
    L.imageOverlay('assets/DewhurstCorrected.png', towns.dewhurst,{opacity:1}).addTo(map);
    L.imageOverlay('assets/Craydon.png', towns.craydon,{opacity:0.9}).addTo(map);
    L.imageOverlay('assets/Blackisle.png', towns.blackisle,{opacity:0.9}).addTo(map);
    L.imageOverlay('assets/Oakheart.png', towns.oakheart,{opacity:0.9}).addTo(map);



    for(var i=0; i<townLabels.length;i++)
    {
        L.marker(townLabels[i].pos,{title:townLabels[i].labelText, zIndexOffset:100}).bindTooltip(townLabels[i].labelText, 
        {
            permanent: true, 
            direction: 'right',
            className: 'myCSSClass'
        }
    ).addTo(map);
    }
    map.on('click', function(e) {
      document.getElementById('test').innerText = ("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
    });
    function circleClick(e) {
      var clickedCircle = e.target;
  
    // do something, like:
    clickedCircle.bindPopup("some content").openPopup();
  }

  }

}