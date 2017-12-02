import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, LatLng } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  tabBarElement: any;
  map: GoogleMap;
  mapElement: HTMLElement;
  userPosition: LatLng = new LatLng(14.753201, -17.370415);
  userSpeed : number; // velocity in meter/s

  constructor(public navCtrl: NavController, private platform: Platform, private googleMaps: GoogleMaps, private geolocation: Geolocation) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.getUserGeolocationPosition();
    });
  }

  //chargement de la google map
  loadMap() {
    this.mapElement = document.getElementById('mapFollow');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: this.userPosition,
        zoom: 11,
        tilt: 20
      }
    };
    this.map = this.googleMaps.create(this.mapElement, mapOptions);
  }
  //récupération de la position GPS de l'utilisateur
  getUserGeolocationPosition() {
    this.geolocation.getCurrentPosition().then((position) => {
      this.userPosition = new LatLng(position.coords.latitude, position.coords.longitude);
      this.userSpeed = position.coords.speed;
      this.loadMap();
      this.centerOnUserPosition();
      this.markupUserPosition();
      this.map.moveCamera({
        target: this.userPosition,
        zoom: 10,
        tilt: 30
      });
    }).catch((error) => {
    });
  }
  //center la caméra sur la position de l'utilisateur
  centerOnUserPosition() {
    console.log('change the camera position');
    this.map.moveCamera({
      target: this.userPosition,
      zoom: 10,
      tilt: 30
    });
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

    
  

