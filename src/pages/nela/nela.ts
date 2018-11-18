import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Calculators } from '../../providers/calculators'
@Component({
  selector: 'page-nela',
  templateUrl: 'nela.html'
})
export class NELAPage {

  constructor(public alerCtrl: AlertController, public calcService: Calculators) {}

  risk = {};
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'About this risk prediction model',
      message: 'NELA model, 2016: Eugene N, Kuryba A, Walker K. -- available <a href="http://www.nela.org.uk/download.php/?fn=NELA%20Technical%20Document%20-%20Development%20of%20the%20Risk%20Adjustment%20Model%20July%202016.pdf&mime=application/pdf&pureFn=NELA%20Technical%20Document%20-%20Development%20of%20the%20Risk%20Adjustment%20Model%20July%202016.pdf">at NELA website</a>',
      buttons: ['Ok']
    });
    alert.present();
  }
  checkParams(risk) {
    return this.calcService.NELADATACHECK(risk).err
  }
  errMessage(risk) {
    return this.calcService.NELADATACHECK(risk).erm
  }
  calcNELA(risk) {
    const mortality = this.calcService.calcNELA(risk).mortality;
    let exp = "";
    if (mortality < 5) {
      exp = "NELA Mortality estimate: " + mortality + "%";
    } else {
      if (mortality < 10) {
        exp = "NELA Mortality estimate: " + mortality + "%<br><br>This patient is <strong>higher risk</strong> and should: <ul style='padding-left:1em;text-align:left;'><li style='list-style-type: square;list-style-position: inside;text-indent: -2em;padding-left: 2em;'>have active input by a consultant surgeon and consultant anaesthetist</li></ul>";
      } else {
        // greater than or equal to 10%
        exp = "NELA Mortality estimate: " + mortality + "%<br><br>This patient is <strong>high risk</strong> and should: <ul style='padding-left:1em;text-align:left;'><li style='list-style-type: square;list-style-position: inside;text-indent: -2em;padding-left: 2em;'>receive care under direct supervision of consultant surgeon and consultant anaesthetist</li><li style='list-style-type: square;list-style-position: inside;text-indent: -2em;padding-left: 2em;'>be admitted to HDU or ITU post-operatively</li></ul>";
      }
    }
    let alert = this.alerCtrl.create({
      title: 'Results',
      message: exp,
      buttons: ['Ok']
    });
    alert.present();
  }
  reset() {
    this.risk = {
      asa: "",
      gender: "",
      creatinine: "",
      age: "",
      cardiac: "",
      respiratory: "",
      ecg: "",
      bp: "",
      pulse: "",
      hb: "",
      wcc: "",
      urea: "",
      sodium: "",
      potassium: "",
      gcs: "",
      severity: "",
      number: "",
      blood: "",
      soiling: "",
      cancer: "",
      cepod: ""
    }
    let alert = this.alerCtrl.create({
      title: 'Success',
      message: 'All fields reset.',
      buttons: ['Ok']
    });
    alert.present()
  }
}
