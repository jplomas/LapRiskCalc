import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-ppossum',
  templateUrl: 'ppossum.html'
})
export class PPOSSUMPage {

  constructor(public alerCtrl: AlertController) {}
  risk = {};
  ppcalc(risk) {
    console.log(JSON.stringify(risk));
    var physiology = parseInt(risk.age, 10) + parseInt(risk.cardiac, 10) + parseInt(risk.respiratory, 10) + parseInt(risk.ecg, 10) + parseInt(risk.bp, 10) + parseInt(risk.pulse, 10) + parseInt(risk.gcs, 10) + parseInt(risk.hb, 10) + parseInt(risk.wcc, 10) + parseInt(risk.urea, 10) + parseInt(risk.sodium, 10) + parseInt(risk.potassium, 10);
    var operative = parseInt(risk.severity, 10) + parseInt(risk.number, 10) + parseInt(risk.blood, 10) + parseInt(risk.soiling, 10) + parseInt(risk.cancer, 10) + parseInt(risk.cepod, 10);
    console.log("physiology score = " + physiology);
    console.log("operative score = " + operative);

    var morbidity = 1 / (1 + (1 / Math.exp(-5.91 + (0.16 * physiology) + (0.19 * operative))));
    morbidity = Math.round(morbidity * 1000) / 10;
    console.log("morbidity = " + morbidity + "%");

    var mortality = 1 / (1 + (1 / Math.exp(-9.065 + (0.1692 * physiology) + (0.1550 * operative))));
    mortality = Math.round(mortality * 1000) / 10;
    console.log("mortality = " + mortality + "%");
    console.log('morbidity: ' + morbidity);
    console.log('mortality: ' + mortality);
    if (!mortality || !morbidity) {
      let alert = this.alerCtrl.create({
        title: 'Error',
        message: 'Error processing risk data fields',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      if (mortality < 5) {
        var exp = "Morbidity estimate: " + morbidity + "% <br>" + "Mortality estimate: " + mortality + "%";
      } else {
        if (mortality < 10) {
          var exp = "Morbidity estimate: " + morbidity + "% <br>" + "Mortality estimate: " + mortality + "%<br><br>This patient is <strong>higher risk</strong> and should: <ul style='padding-left:1em'><li style='list-style-type: square;list-style-position: inside;text-indent: -2em;padding-left: 2em;'>have active input by a consultant surgeon and consultant anaesthetist</li></ul>";
        } else {
          // greater than or equal to 10%
          var exp = "Morbidity estimate: " + morbidity + "% <br>" + "Mortality estimate: " + mortality + "%<br><br>This patient is <strong>high risk</strong> and should: <ul style='padding-left:1em'><li style='list-style-type: square;list-style-position: inside;text-indent: -2em;padding-left: 2em;'>receive care under direct supervision of consultant surgeon and consultant anaesthetist</li><li style='list-style-type: square;list-style-position: inside;text-indent: -2em;padding-left: 2em;'>be admitted to HDU or ITU post-operatively</li></ul>";
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
