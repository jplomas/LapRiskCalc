import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
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
      message: 'P-POSSUM: Prytherch DR, Whiteley MS, Higgins B, Weaver PC, Prout WG and Powell SJ. POSSUM and Porstmouth POSSUM for predicting mortality. <a href="https://www.ncbi.nlm.nih.gov/pubmed/9752863">Br J Surg 1998;85: 1217-20</a>',
      buttons: ['Ok']
    });
    alert.present();
  }

}
