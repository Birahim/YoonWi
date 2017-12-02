import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker} from '@ionic-native/google-maps';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  map: GoogleMap;
  mapElement: HTMLElement;
  constructor(public navCtrl: NavController,private platform: Platform,private googleMaps: GoogleMaps) {

  }

  ionViewDidEnter(){ 
     this.platform.ready().then( () => {
       this.loadMap();
     });
   }
 
   
     
   loadMap() {
     this.mapElement = document.getElementById('mapNat');
     let mapOptions: GoogleMapOptions = {
       camera: {
         target: {
           lat: 14.745446, 
           lng: -17.401210
         },
         zoom: 18,
         tilt: 30
       }
     };
 //console.log(this.googleMaps.create(this.mapElement, mapOptions))
     this.map = this.googleMaps.create(this.mapElement, mapOptions);
 
     // Wait the MAP_READY before using any methods.
     this.map.one(GoogleMapsEvent.MAP_READY)
       .then(() => {
         console.log('Map is ready!');
 
         // Now you can use all methods safely.
         this.map.addMarker({
             title: 'Ionic',
             icon: 'blue',
             animation: 'DROP',
             position: {
              lat: 14.745446, 
              lng: -17.401210
             }
           })
           .then(marker => {
             marker.on(GoogleMapsEvent.MARKER_CLICK)
               .subscribe(() => {
                 alert('clicked');
               });
           });
 
       });
   }
 
}
