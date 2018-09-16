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
    var map = L.map('map',{crs:L.CRS.Simple}).setView(defaultCoords,defaultZoom);
    var towns = {trenchville:[[-116.46035048129474,167.53125],[-111.41907350763373, 172.15625]],
                 dewhurst: [[-235.73978570924862, 133.84375],[-228.1172054053101, 141.84375]],
                 craydon:[[-28.684182834702582, 66.71875],[-19.062450416064316, 76.59375]],
                 oakheart:[[],[]],
                 blackisle:[[],[]]
    }

    var townLabels = [{pos:[-116.46035048129474,167.53125],
      labelText:'Trenchville'}];
      
    
    var markers = [];
    

    var imageBounds = [[-90, 180], [90, -180]];
    //L.imageOverlay('assets/SCUM_Map.png',imageBounds,{attribution:"Maciox55"}).addTo(map);
    
    L.circle([-116.46035048129474,167.53125], {radius: 10}).addTo(map).on("click", circleClick);
    L.tileLayer('assets/SCUMTILES/{z}/{x}/{y}.png',{attribution:"Maciox55",minZoom: 1,maxZoom: 8,maxNativeZoom:3,noWrap:true}).addTo(map);
    L.imageOverlay('assets/Trenchylvania.png', towns.trenchville,{opacity:1}).addTo(map);
    L.imageOverlay('assets/DewhurstCorrected.png', towns.dewhurst,{opacity:1}).addTo(map);
    L.imageOverlay('assets/Craydon.png', towns.craydon,{opacity:0.9}).addTo(map);

    for(var i=0; i<townLabels.length;i++)
    {
        L.marker(townLabels[i].pos,{title:townLabels[i].labelText, zIndexOffset:100}).addTo(map);
    }
    map.on('click', function(e) {
      console.log(e);
    });
    function circleClick(e) {
      var clickedCircle = e.target;
  
    // do something, like:
    clickedCircle.bindPopup("some content").openPopup();
  }

  }

}