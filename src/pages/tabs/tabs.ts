import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { NationalPage } from '../national/national';
import { AutoroutePage } from './../autoroute/autoroute';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Autoroute = AutoroutePage;
  tab2National = NationalPage;
  tab3About  = AboutPage;
  constructor() {

  }
}
