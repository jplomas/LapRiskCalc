import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Calculators } from '../../providers/calculators'

@Component({
  selector: 'page-ppossum',
  templateUrl: 'ppossum.html'
})
export class PPOSSUMPage {

  constructor(public alerCtrl: AlertController, public calcService: Calculators) {}
  risk = {};
  ppcalc(risk) {
    return this.calcService.ppcalc(risk)
  }
  reset() {
    this.risk = {}
    let alert = this.alerCtrl.create({
      title: 'Success',
      message: 'All fields reset.',
      buttons: ['Ok']
    });
    alert.present();
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'About this risk prediction model',
      message: 'XXXX- available <a href="#" onclick="window.open(\'http://www.nela.org.uk/download.php/?fn=NELA%20Technical%20Document%20-%20Development%20of%20the%20Risk%20Adjustment%20Model%20July%202016.pdf&mime=application/pdf&pureFn=NELA%20Technical%20Document%20-%20Development%20of%20the%20Risk%20Adjustment%20Model%20July%202016.pdf\', \'_system\', \'location=yes\'); return false;">at NELA website</a>',
      buttons: ['Ok']
    });
    alert.present();
  }

}
