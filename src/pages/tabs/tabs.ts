import { Component } from '@angular/core';

import { NELAPage } from '../nela/nela';
import { PPOSSUMPage } from '../ppossum/ppossum';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { Calculators } from '../../providers/calculators';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NELAPage;
  tab3Root = PPOSSUMPage;
  tab4Root = AboutPage;

  constructor(public calcService: Calculators) {

  }
  cEnable() { return this.calcService.selfCheck; }
}
