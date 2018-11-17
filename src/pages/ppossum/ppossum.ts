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
    const c = this.calcService.ppcalc(risk)
    const mortality = c.mortality
    const morbidity = c.morbidity
    if (!mortality || !morbidity) {
      let alert = this.alerCtrl.create({
        title: 'Error',
        message: 'Error processing risk data fields',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      let exp = "";
      if (mortality < 5) {
        exp = "Morbidity estimate: " + morbidity + "% <br>" + "Mortality estimate: " + mortality + "%";
      } else {
        if (mortality < 10) {
          exp = "Morbidity estimate: " + morbidity + "% <br>" + "Mortality estimate: " + mortality + "%<br><br>This patient is <strong>higher risk</strong> and should: <ul style='padding-left:1em'><li style='list-style-type: square;list-style-position: inside;text-indent: -2em;padding-left: 2em;'>have active input by a consultant surgeon and consultant anaesthetist</li></ul>";
        } else {
          // greater than or equal to 10%
          exp = "Morbidity estimate: " + morbidity + "% <br>" + "Mortality estimate: " + mortality + "%<br><br>This patient is <strong>high risk</strong> and should: <ul style='padding-left:1em'><li style='list-style-type: square;list-style-position: inside;text-indent: -2em;padding-left: 2em;'>receive care under direct supervision of consultant surgeon and consultant anaesthetist</li><li style='list-style-type: square;list-style-position: inside;text-indent: -2em;padding-left: 2em;'>be admitted to HDU or ITU post-operatively</li></ul>";
        }
      }
      if (mortality && morbidity) {
        let alert = this.alerCtrl.create({
          title: 'Results',
          message: exp,
          buttons: ['Ok']
        });
        alert.present();
      } else {
        let alert = this.alerCtrl.create({
          title: 'Error',
          message: 'Error processing risk data fields',
          buttons: ['Ok']
        });
        alert.present();
      }
    }
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
