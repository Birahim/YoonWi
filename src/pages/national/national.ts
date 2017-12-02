/**
 * Generated class for the NationalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { Component } from '@angular/core';
import { NavController, Platform, NavParams} from 'ionic-angular';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,LatLng} from '@ionic-native/google-maps';

@Component({
  selector: 'page-national',
  templateUrl: 'national.html',
})
export class NationalPage {
  map: GoogleMap;
  mapElement: HTMLElement;
  userPosition: LatLng = new LatLng(14.753201, -17.370415 );;

  constructor(public navCtrl: NavController, public navParams: NavParams,private platform: Platform,private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.loadMap();
      this.markupUserPosition();
    });
  }
  
   //chargement de la google map
  loadMap(){
        this.mapElement = document.getElementById('mapNat');
        let mapOptions: GoogleMapOptions = {
          camera: {
            target: this.userPosition,
            zoom: 11,
            tilt: 20
          }
        };
        this.map = this.googleMaps.create(this.mapElement, mapOptions);
     } 
    //marker sa position
    markupUserPosition() {
    // Wait the MAP_READY before using any methods.
        this.map.one(GoogleMapsEvent.MAP_READY)
          .then(() => {
            // Now you can use all methods safely.
            this.map.addMarker({
                title: 'position',
                icon: 'blue',
                animation: 'DROP',
                position: this.userPosition
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
