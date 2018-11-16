import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NELAPage } from '../nela/nela';
import { PPOSSUMPage } from '../ppossum/ppossum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab2Root = NELAPage;
  tab3Root = PPOSSUMPage;
  constructor(public navCtrl: NavController) {}

  goNELA() { this.navCtrl.parent.select(1); }
  goPPOSSUM() { this.navCtrl.parent.select(2); }
}
