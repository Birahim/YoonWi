import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  splash = true;
  tabBarElement: any;
  followMe : boolean = false ;
  nationalTrafficAvg : string ; // lent, rapide, normal
  autorouteTrafficAvg : string; // lent, rapide, normal

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
    this.followMe = false;
    this.autorouteTrafficAvg = "lent";
    this.nationalTrafficAvg = "rapide";

  }
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
     setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex'; 
    }, 4000);
  }
  
  trackMe(){
    this.navCtrl.push(HomePage);
  }
}
