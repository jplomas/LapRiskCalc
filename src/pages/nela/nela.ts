import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-nela',
  templateUrl: 'nela.html'
})
export class NELAPage {

  constructor(public alerCtrl: AlertController) {}
  risk = {};
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'About this risk prediction model',
      message: 'NELA model, 2016: Eugene N, Kuryba A, Walker K. -- available <a href="#" onclick="window.open(\'http://www.nela.org.uk/download.php/?fn=NELA%20Technical%20Document%20-%20Development%20of%20the%20Risk%20Adjustment%20Model%20July%202016.pdf&mime=application/pdf&pureFn=NELA%20Technical%20Document%20-%20Development%20of%20the%20Risk%20Adjustment%20Model%20July%202016.pdf\', \'_system\', \'location=yes\'); return false;">at NELA website</a>',
      buttons: ['Ok']
    });
    alert.present();
  }
  checkParams(risk) {
    return this.NELADATACHECK(risk).err
  }
  errMessage(risk) {
    return this.NELADATACHECK(risk).erm
  }
  calcNELA(risk) {
    // check parameters
    const sanityCheck = this.NELADATACHECK(risk)
    if (sanityCheck.err) {
      // error with parameters
      let alert = this.alerCtrl.create({
        title: 'Error',
        message: sanityCheck.erm,
        buttons: ['Ok']
      });
      alert.present();
    } else {
      // now do the adjustments...
      // creatinine
      var cr = parseInt(risk.creatinine) + 1; // get this from form
      // log('*Creatinine from form* ' + risk.creatinine);
      var creatinine = Math.log(cr);
      // log('*log of creatinine = ' + creatinine + '*');
      if (creatinine > 6) { creatinine = 6 }
      if (creatinine < 3.3) { creatinine = 3.3 }
      var cr1 = -0.2518047 * (creatinine - 4);
      var cr2 = 0.2250538 * Math.pow((creatinine - 4), 2);
      creatinine = cr1 + cr2;

      // sodium
      var sodium = parseInt(risk.sodium); // get this from form
      if (sodium > 148) { sodium = 148 }
      if (sodium < 124) { sodium = 124 }
      var na1 = -0.000816 * (Math.pow((sodium - 123), 3));
      var na2 = 0.0002584 * Math.pow((sodium - 123), 3) * Math.log((sodium - 123));
      sodium = na1 + na2;

      // bp
      var bp = parseInt(risk.bp); // get this from form
      if (bp > 190) { bp = 190 }
      if (bp < 70) { bp = 70 }
      var b1 = -0.008065 * (bp - 128);
      var b2 = 0.0001201 * Math.pow((bp - 128), 2);
      bp = b1 + b2;

      // pulse
      var pulse = parseInt(risk.pulse); // get this from form
      if (pulse > 145) { pulse = 145 }
      if (pulse < 55) { pulse = 55 }
      var p1 = 0.011922 * (pulse - 92);
      var p2 = -0.0001129 * Math.pow((pulse - 92), 2);
      pulse = p1 + p2;

      // wcc
      var wcc = parseFloat(risk.wcc); // get this from form
      if (wcc > 42.7) { wcc = 42.7 }
      if (wcc < 1) { wcc = 1 }
      var w1 = -0.0006156 * (wcc - 13);
      var w2 = 0.0009041 * Math.pow((wcc - 13), 2);
      wcc = w1 + w2;

      // urea
      var urea = parseFloat(risk.urea); // get this from form
      urea = Math.log(urea);
      if (urea > 3.7) { urea = 3.7 }
      if (urea < 0) { urea = 0 }
      var u1 = 0.323096 * (urea - 1.9);
      var u2 = -0.0406424 * Math.pow((urea - 1.9), 2);
      urea = u1 + u2;

      // potassium
      var potassium = parseFloat(risk.potassium); // get this from form
      if (potassium > 5.9) { potassium = 5.9 }
      if (potassium < 2.8) { potassium = 2.8 }
      var k1 = -0.1140542 * (potassium - 4);
      var k2 = 0.2394057 * Math.pow((potassium - 4), 2);
      potassium = k1 + k2;

      // now display grabbed data from form



      // asa into numbers (for other lookups)
      // resp here too...
      var asa = 1;
      var resp = 0;
      var asanum = 0
      switch (parseInt(risk.asa)) {
        case 1:
          asanum = 1;
          if (parseInt(risk.respiratory) == 2) { resp = 0.7285072 }
          if (parseInt(risk.respiratory) > 3) { resp = 1.251223 }
          break;
        case 2:
          asanum = 2;
          if (parseInt(risk.respiratory) == 2) { resp = 0.7285072 }
          if (parseInt(risk.respiratory) > 3) { resp = 1.251223 }
          break;
        case 4:
          asanum = 3;
          if (parseInt(risk.respiratory) == 2) { resp = 0.3464632 }
          if (parseInt(risk.respiratory) > 3) { resp = 0.653518 }
          break;
        case 8:
          asanum = 4;
          if (parseInt(risk.respiratory) == 2) { resp = 0.1954411 }
          if (parseInt(risk.respiratory) > 3) { resp = 0.3856067 }
          break;
        case 16:
          asanum = 5;
          if (parseInt(risk.respiratory) == 2) { resp = -0.1005167 }
          if (parseInt(risk.respiratory) > 3) { resp = 0.144061 }
          break;
      }

      // age correction, from lookup table, for ASA 3-5 (it's 0 for 1-2):
      // asa factor done here for speed too...
      var lookup = 0;
      var second_lookup = 0;
      asa = 0;
      switch (asanum) {
        case 3:
          lookup = -0.0163981;
          second_lookup = -0.0002042;
          asa = 0.8959784;
          break;
        case 4:
          lookup = -0.0253105;
          second_lookup = -0.0000425;
          asa = 1.822416;
          break;
        case 5:
          lookup = -0.0270848;
          second_lookup = -0.0002982;
          asa = 2.606994;
          break;
      }
      var a1 = (0.0556509 + lookup) * (parseInt(risk.age) - 64);

      // now do 2nd age lookup
      var a2 = (0.0003635 + second_lookup) * (Math.pow((parseInt(risk.age) - 64), 2));
      var age = a1 + a2;


      // gender
      var gender = 0; // male default, 0
      if (parseInt(risk.gender) == 1) { gender = 0.0319972 } // females have this factor

      // cardiac
      var cardiac = 0;
      switch (parseInt(risk.cardiac)) {
        case 2:
          cardiac = 0.0893796;
          break;
        case 4:
          cardiac = 0.3259647;
          break;
        case 8:
          cardiac = 0.2444367;
          break;
      }

      // urgency/CEPOD
      var urgency = 0;
      switch (parseInt(risk.cepod)) {
        case 2:
          urgency = -0.1148433;
          break;
        case 4:
          urgency = 0.0132196;
          break;
        case 8:
          urgency = 0.4247453;
          break;
      }

      // ECG
      var ecg = 0;
      switch (parseInt(risk.ecg)) {
        case 2:
          ecg = 0.165503;
          break;
        case 4:
          ecg = 0.2100931;
          break;
      }

      // Number of ops
      var number = 0;
      switch (parseInt(risk.number)) {
        case 2:
          number = -0.3064644;
          break;
        case 4:
          number = -0.312474;
          break;
      }

      // severity - only if Major+
      var severity = 0;
      if (parseInt(risk.severity) == 8) { severity = 0.1455086; }

      // blood
      var blood = 0;
      switch (parseInt(risk.blood)) {
        case 2:
          blood = 0.0114858;
          break;
        case 4:
          blood = 0.0476965;
          break;
        case 8:
          blood = -0.1231749;
          break;
      }

      // soiling
      var soiling = 0;
      switch (parseInt(risk.soiling)) {
        case 2:
          soiling = 0.195923;
          break;
        case 4:
          soiling = -0.0096394;
          break;
        case 8:
          soiling = 0.3513096;
          break;
      }

      // cancer
      var cancer = 0;
      switch (parseInt(risk.cancer)) {
        case 2:
          cancer = 0.0995358;
          break;
        case 4:
          cancer = 0.4416856;
          break;
        case 8:
          cancer = 1.176124;
          break;
      }

      // gcs
      var gcs = 0;
      switch (parseInt(risk.gcs)) {
        case 2:
          gcs = 0.6055811;
          break;
        case 4:
          gcs = 0.8295203;
          break;
      }



      console.log('`ASA(' + asanum + '):` ' + asa);
      console.log('`AGE(' + parseInt(risk.age) + '):` ' + age);
      console.log('`GENDER`: ' + gender);
      console.log('`CARDIAC:` ' + cardiac);
      console.log('`RESP:` ' + resp);
      console.log('`ECG:` ' + ecg);
      console.log('`BP:` ' + bp);
      console.log('`PULSE:` ' + pulse);
      console.log('`HB:` ' + risk.hb);
      console.log('`WCC:` ' + wcc);
      console.log('`UREA:` ' + urea);
      console.log('`SODIUM:` ' + sodium);
      console.log('`POTASSIUM:` ' + potassium);
      console.log('`GCS:` ' + gcs);
      console.log('`SEVERITY:` ' + severity);
      console.log('`NUMBER:` ' + number);
      console.log('`BLOOD:` ' + blood);
      console.log('`SOILING:` ' + soiling);
      console.log('`CANCER:` ' + cancer);
      console.log('`CEPOD:` ' + urgency);
      console.log('`CREATININE:` ' + creatinine);
      console.log('NELA year 2 factor: -0.0388465');

      var section_three = -4.079478 + asa + age + gender + cardiac + resp + ecg + bp + pulse + wcc +
        urea + sodium + potassium + gcs + severity + number + blood +
        soiling + cancer + urgency + creatinine - 0.0388465;
      section_three = Math.exp(section_three);
      section_three = section_three / (1 + section_three);

      // log(' ');
      // log(' ');
      // log('`Final Risk %age:` _' + section_three + '_');
      var mortality = section_three;
      mortality = Math.round(mortality * 1000) / 10;
      console.log('mortality: ' + mortality);
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
      // return { mortality: mortality, error: { state: false, message: 'PASSED' } }
    }
  }
  NELADATACHECK(risk) {
    var err = false,
      erm = "";

    // AGE VALIDATION
    console.log(risk.age)
    if (risk.age === undefined || risk.age === '') {
      erm = "You forgot to enter an age";
      err = true;
      return { erm: erm, err: err }
    }
    if (!parseInt(risk.age)) {
      erm = "Age is not a number";
      err = true;
      return { erm: erm, err: err }
    }
    // Were aged between 18 and 105 years.
    if (parseInt(risk.age) < 18) {
      console.log("Age <18");
      erm = "The NELA calculator is not validated in patients under 18 years of age. A risk calculation cannot be performed.";
      err = true;
      return { erm: erm, err: err }
    }
    if (parseInt(risk.age) > 105) {
      console.log("Age >105");
      erm = "The NELA calculator is not validated in patients aged over 105 years. A risk calculation cannot be performed.";
      err = true;
      return { erm: erm, err: err }
    }

    // ASA VALIDATION
    if (risk.asa === undefined || risk.asa === '') {
      erm = "You forgot to enter an ASA grade";
      err = true;
      return { erm: erm, err: err }
    }

    // GENDER VALIDATION
    if (risk.gender === undefined || risk.gender === '') {
      erm = "You forgot to enter a gender";
      err = true;
      return { erm: erm, err: err }
    }

    // CARDIAC VALIDATION
    if (risk.cardiac === undefined || risk.cardiac === '') {
      console.log("You forgot to enter cardiac data");
      erm = "You forgot to enter cardiac data";
      err = true;
      return { erm: erm, err: err }
    }

    // RESPIRATORY VALIDATION
    if (risk.respiratory === undefined || risk.respiratory === '') {
      console.log("You forgot to enter respiratory data");
      erm = "You forgot to enter respiratory data";
      err = true;
      return { erm: erm, err: err }
    }

    // ECG VALIDATION
    if (risk.ecg === undefined || risk.ecg === '') {
      console.log("You forgot to enter ECG data");
      erm = "You forgot to enter ECG data";
      err = true;
      return { erm: erm, err: err }
    }

    // BLOOD PRESSURE VALIDATION - the calculator itself handles excessively high/low numbers
    if (risk.bp === undefined || risk.bp === '') {
      console.log("You forgot to enter BP data");
      erm = "You forgot to enter BP data";
      err = true;
      return { erm: erm, err: err }
    }
    if (!parseInt(risk.bp)) {
      erm = "Blood pressure is not a number";
      err = true;
      return { erm: erm, err: err }
    }
    if (parseInt(risk.bp) < 0) {
      erm = "Blood pressure cannot be negative";
      err = true;
      return { erm: erm, err: err }
    }

    // PULSE VALIDATION - the calculator itself handles excessively high/low numbers
    if (risk.pulse === undefined || risk.pulse === '') {
      console.log("You forgot to enter pulse rate data");
      erm = "You forgot to enter pulse rate data";
      err = true;
      return { erm: erm, err: err }
    }
    if (!parseInt(risk.pulse)) {
      erm = "Pulse is not a number";
      err = true;
      return { erm: erm, err: err }
    }
    if (parseInt(risk.pulse) < 0) {
      erm = "Pulse cannot be negative";
      err = true;
      return { erm: erm, err: err }
    }

    // WCC VALIDATION - the calculator itself handles excessively high/low numbers
    if (risk.wcc === undefined | risk.wcc === '') {
      console.log("You forgot to enter WCC data");
      erm = "You forgot to enter White Cell Count data";
      err = true;
      return { erm: erm, err: err }
    }
    if (!parseInt(risk.wcc)) {
      erm = "White Cell Count is not a number";
      err = true;
      return { erm: erm, err: err }
    }
    if (parseInt(risk.wcc) < 0) {
      erm = "White Cell Count cannot be negative";
      err = true;
      return { erm: erm, err: err }
    }

    // UREA VALIDATION - the calculator itself handles excessively high/low numbers
    if (risk.urea === undefined || risk.urea === '') {
      console.log("You forgot to enter urea concentration");
      erm = "You forgot to enter urea concentration";
      err = true;
      return { erm: erm, err: err }
    }
    if (!parseInt(risk.urea)) {
      erm = "Urea is not a number";
      err = true;
      return { erm: erm, err: err }
    }
    if (parseInt(risk.urea) < 0) {
      erm = "Urea cannot be negative";
      err = true;
      return { erm: erm, err: err }
    }

    // CREATININE VALIDATION - the calculator itself handles excessively high/low numbers
    if (risk.creatinine === undefined || risk.creatinine === '') {
      erm = "You forgot to enter a creatinine";
      err = true;
      return { erm: erm, err: err }
    }
    if (!parseInt(risk.creatinine)) {
      erm = "Creatinine is not a number";
      err = true;
      return { erm: erm, err: err }
    }
    if (parseInt(risk.creatinine) < 0) {
      erm = "Creatinine cannot be negative";
      err = true;
      return { erm: erm, err: err }
    }

    // SODIUM VALIDATION
    if (risk.sodium === undefined || risk.sodium === '') {
      console.log("You forgot to enter sodium concentration");
      erm = "You forgot to enter sodium concentration";
      err = true;
      return { erm: erm, err: err }
    }
    if (!parseInt(risk.sodium)) {
      erm = "Sodium is not a number";
      err = true;
      return { erm: erm, err: err }
    }
    if (parseInt(risk.sodium) < 0) {
      erm = "Sodium cannot be negative";
      err = true;
      return { erm: erm, err: err }
    }

    // POTASSIUM VALIDATION
    if (risk.potassium === undefined || risk.potassium ==='') {
      console.log("You forgot to enter potassium concentration");
      erm = "You forgot to enter potassium concentration";
      err = true;
      return { erm: erm, err: err }
    }
    if (!parseInt(risk.potassium)) {
      erm = "Potassium is not a number";
      err = true;
      return { erm: erm, err: err }
    }
    if (parseInt(risk.potassium) < 0) {
      erm = "Potassium cannot be negative";
      err = true;
      return { erm: erm, err: err }
    }

    // GCS VALIDATION
    if (risk.gcs === undefined || risk.gcs === '') {
      console.log("You forgot to enter the patient's GCS");
      erm = "You forgot to enter the patient's GCS";
      err = true;
      return { erm: erm, err: err }
    }

    // SEVERITY VALIDATION
    if (risk.severity === undefined || risk.severity === '') {
      console.log("You forgot to enter the operative severity");
      erm = "You forgot to enter the operative severity";
      err = true;
      return { erm: erm, err: err }
    }

    // NUMBER OF PROCEDURE VALIDATION
    if (risk.number === undefined || risk.number === '') {
      console.log("You forgot to enter the number of procedures");
      erm = "You forgot to enter the number of procedures";
      err = true;
      return { erm: erm, err: err }
    }
    if (risk.blood === undefined || risk.blood === '') {
      console.log("You forgot to enter the blood loss");
      erm = "You forgot to enter the blood loss";
      err = true;
      return { erm: erm, err: err }
    }
    if (risk.soiling === undefined || risk.soiling === '') {
      console.log("You forgot to enter degree of soiling");
      erm = "You forgot to enter degree of soiling";
      err = true;
      return { erm: erm, err: err }
    }
    if (risk.cancer === undefined || risk.cancer === '') {
      console.log("You forgot to enter the cancer status");
      erm = "You forgot to enter the cancer status";
      err = true;
      return { erm: erm, err: err }
    }
    if (risk.cepod === undefined || risk.cepod === '') {
      console.log("You forgot to enter the urgency of surgery");
      erm = "You forgot to enter the urgency of surgery";
      err = true;
      return { erm: erm, err: err }
    }
    // should return success...
    return { erm: erm, err: err }
  }
  reset() {
    this.risk = {}
    let alert = this.alerCtrl.create({
      title: 'Success',
      message: 'All fields reset.',
      buttons: ['Ok']
    });
    alert.present()
  }
}
