export class Calculators {
calcNELA(risk: any) {
    // check parameters
    const sanityCheck = this.NELADATACHECK(risk)
    if (sanityCheck.err) {
      // error with parameters
      // let alert = this.alerCtrl.create({
      //   title: 'Error',
      //   message: sanityCheck.erm,
      //   buttons: ['Ok']
      // });
      // alert.present();
      console.log('TODO');
    } else {
      // now do the adjustments...
      // creatinine
      const cr = parseInt(risk.creatinine) + 1; // get this from form
      // log('*Creatinine from form* ' + risk.creatinine);
      let creatinine = Math.log(cr);
      // log('*log of creatinine = ' + creatinine + '*');
      if (creatinine > 6) { creatinine = 6 }
      if (creatinine < 3.3) { creatinine = 3.3 }
      const cr1 = -0.3093507 * (creatinine - 4);
      const cr2 = 0.2428102 * Math.pow((creatinine - 4), 2);
      creatinine = cr1 + cr2;

      // sodium
      let sodium = parseInt(risk.sodium); // get this from form
      if (sodium > 148) { sodium = 148 }
      if (sodium < 124) { sodium = 124 }
      const na1 = -0.0007271 * (Math.pow((sodium - 123), 3));
      const na2 = 0.0002304 * Math.pow((sodium - 123), 3) * Math.log((sodium - 123));
      sodium = na1 + na2;

      // bp
      let bp = parseInt(risk.bp); // get this from form
      if (bp > 190) { bp = 190 }
      if (bp < 70) { bp = 70 }
      const b1 = -0.0090343 * (bp - 128);
      const b2 = 0.0001137 * Math.pow((bp - 128), 2);
      bp = b1 + b2;

      // pulse
      let pulse = parseInt(risk.pulse); // get this from form
      if (pulse > 145) { pulse = 145 }
      if (pulse < 55) { pulse = 55 }
      const p1 = 0.0132113 * (pulse - 92);
      const p2 = -0.0001264 * Math.pow((pulse - 92), 2);
      pulse = p1 + p2;

      // wcc
      let wcc = parseFloat(risk.wcc); // get this from form
      if (wcc > 42.7) { wcc = 42.7 }
      if (wcc < 1) { wcc = 1 }
      const w1 = -0.0072917 * (wcc - 13);
      const w2 = 0.0013263 * Math.pow((wcc - 13), 2);
      wcc = w1 + w2;

      // urea
      let urea = parseFloat(risk.urea); // get this from form
      urea = Math.log(urea);
      if (urea > 3.7) { urea = 3.7 }
      if (urea < 0) { urea = 0 }
      const u1 = 0.4227387 * (urea - 1.9);
      const u2 = -0.0542346 * Math.pow((urea - 1.9), 2);
      urea = u1 + u2;

      // potassium
      let potassium = parseFloat(risk.potassium); // get this from form
      if (potassium > 5.9) { potassium = 5.9 }
      if (potassium < 2.8) { potassium = 2.8 }
      const k1 = -0.0994759 * (potassium - 4);
      const k2 = 0.1699467 * Math.pow((potassium - 4), 2);
      potassium = k1 + k2;

      // now display grabbed data from form



      // asa into numbers (for other lookups)
      // resp here too...
      let asa = 1;
      let resp = 0;
      let asanum = 0
      switch (parseInt(risk.asa)) {
        case 1:
          asanum = 1;
          if (parseInt(risk.respiratory) == 2) { resp = 0.5395227 }
          if (parseInt(risk.respiratory) > 3) { resp = 1.2601628 }
          break;
        case 2:
          asanum = 2;
          if (parseInt(risk.respiratory) == 2) { resp = 0.5395227 }
          if (parseInt(risk.respiratory) > 3) { resp = 1.2601628 }
          break;
        case 4:
          asanum = 3;
          if (parseInt(risk.respiratory) == 2) { resp = 0.5395227 + -0.1807609 }
          if (parseInt(risk.respiratory) > 3) { resp = 1.2601628 + -0.5437609 }
          break;
        case 8:
          asanum = 4;
          if (parseInt(risk.respiratory) == 2) { resp = 0.5395227 + -0.3157025 }
          if (parseInt(risk.respiratory) > 3) { resp = 1.2601628 + -0.8688040 }
          break;
        case 16:
          asanum = 5;
          if (parseInt(risk.respiratory) == 2) { resp = 0.5395227 + -0.3012922 }
          if (parseInt(risk.respiratory) > 3) { resp = 1.2601628 + -0.9052032 }
          break;
      }

      // age correction, from lookup table, for ASA 3-5 (it's 0 for 1-2):
      // asa factor done here for speed too...
      let lookup = 0;
      let second_lookup = 0;
      asa = 0;
      switch (asanum) {
        case 3:
          lookup = -0.0235901;
          second_lookup = -0.0001441;
          asa = 1.0573609;
          break;
        case 4:
          lookup = -0.0276586;
          second_lookup = 0.0000669;
          asa = 1.854601;
          break;
        case 5:
          lookup = -0.0337041;
          second_lookup = 0.0002500;
          asa = 2.6489194;
          break;
      }
      const a1 = (0.0572932 + lookup) * (parseInt(risk.age) - 64);

      // now do 2nd age lookup
      const a2 = (0.0001274 + second_lookup) * (Math.pow((parseInt(risk.age) - 64), 2));
      const age = a1 + a2;


      // gender
      let gender = 0; // male default, 0
      if (parseInt(risk.gender) == 1) { gender = 0.0280548 } // females have this factor

      // cardiac
      let cardiac = 0;
      switch (parseInt(risk.cardiac)) {
        case 2:
          cardiac = 0.1054722;
          break;
        case 4:
          cardiac = 0.2655433;
          break;
        case 8:
          cardiac = 0.3017798;
          break;
      }

      // urgency/CEPOD
      let urgency = 0;
      switch (parseInt(risk.cepod)) {
        case 2:
          urgency = -0.0617987;
          break;
        case 4:
          urgency = 0.0787992;
          break;
        case 8:
          urgency = 0.4708663;
          break;
      }

      // ECG
      let ecg = 0;
      switch (parseInt(risk.ecg)) {
        case 2:
          ecg = 0.3375291;
          break;
        case 4:
          ecg = 0.1411111;
          break;
      }

      // Number of ops
      let number = 0;
      switch (parseInt(risk.number)) {
        case 2:
          number = -0.2888454;
          break;
        case 4:
          number = -0.1316191;
          break;
      }

      // severity - only if Major+
      let severity = 0;
      if (parseInt(risk.severity) == 8) { severity = 0.2043578; }

      // blood
      let blood = 0;
      switch (parseInt(risk.blood)) {
        case 2:
          blood = 0.0563362;
          break;
        case 4:
          blood = 0.3148512;
          break;
        case 8:
          blood = -0.0278452;
          break;
      }

      // soiling
      let soiling = 0;
      switch (parseInt(risk.soiling)) {
        case 2:
          soiling = 0.1727508;
          break;
        case 4:
          soiling = -0.083714;
          break;
        case 8:
          soiling = 0.4387634;
          break;
      }

      // cancer
      let cancer = 0;
      switch (parseInt(risk.cancer)) {
        case 2:
          cancer = 0.0332072;
          break;
        case 4:
          cancer = 0.3666088;
          break;
        case 8:
          cancer = 0.9988459;
          break;
      }

      // gcs
      let gcs = 0;
      switch (parseInt(risk.gcs)) {
        case 2:
          gcs = 0.6355512;
          break;
        case 4:
          gcs = 0.7842625;
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

      let section_three = -4.3488269 + asa + age + gender + cardiac + resp + ecg + bp + pulse + wcc +
        urea + sodium + potassium + gcs + severity + number + blood +
        soiling + cancer + urgency + creatinine;
      section_three = Math.exp(section_three);
      section_three = section_three / (1 + section_three);

      // log(' ');
      // log(' ');
      // log('`Final Risk %age:` _' + section_three + '_');
      let mortality = section_three;
      mortality = Math.round(mortality * 1000) / 10;
      console.log('mortality: ' + mortality);
      return { mortality: mortality, error: { state: false, message: 'PASSED' } }
    }
  }
  NELADATACHECK(risk: any) {
    let err = false,
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
    if (risk.wcc === undefined || risk.wcc === '') {
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
    if (risk.potassium === undefined || risk.potassium === '') {
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
  ppcalc(risk: any) {
    console.log(JSON.stringify(risk));
    const physiology = this.PPossumAge(parseInt(risk.age, 10)) + parseInt(risk.cardiac, 10) + parseInt(risk.respiratory, 10) + parseInt(risk.ecg, 10) + this.PPossumBP(parseInt(risk.bp, 10)) + this.PPossumPulse(parseInt(risk.pulse, 10)) + parseInt(risk.gcs, 10) + parseInt(risk.hb, 10) + this.PPossumWCC(parseInt(risk.wcc, 10)) + this.PPossumUrea(parseInt(risk.urea, 10)) + this.PPossumSodium(parseInt(risk.sodium, 10)) + this.PPossumPotassium(parseInt(risk.potassium, 10));
    console.log({
      age: this.PPossumAge(parseInt(risk.age, 10)),
      cardiac: parseInt(risk.cardiac, 10),
      resp: parseInt(risk.respiratory, 10),
      ecg: parseInt(risk.ecg, 10),
      bp: this.PPossumBP(parseInt(risk.bp, 10)),
      pulse: this.PPossumPulse(parseInt(risk.pulse, 10)),
      gcs: parseInt(risk.gcs, 10),
      hb: parseInt(risk.hb, 10),
      wcc: this.PPossumWCC(parseInt(risk.wcc, 10)),
      urea: this.PPossumUrea(parseInt(risk.urea, 10)),
      na: this.PPossumSodium(parseInt(risk.sodium, 10)),
      k: this.PPossumPotassium(parseInt(risk.potassium, 10))
    });
    const operative = parseInt(risk.severity, 10) + parseInt(risk.number, 10) + parseInt(risk.blood, 10) + parseInt(risk.soiling, 10) + parseInt(risk.cancer, 10) + this.PPossumUrgency(parseInt(risk.cepod, 10));
    console.log("physiology score = " + physiology);
    console.log("operative score = " + operative);

    let morbidity = 1 / (1 + (1 / Math.exp(-5.91 + (0.16 * physiology) + (0.19 * operative))));
    morbidity = Math.round(morbidity * 1000) / 10;
    console.log("morbidity = " + morbidity + "%");

    let mortality = 1 / (1 + (1 / Math.exp(-9.065 + (0.1692 * physiology) + (0.1550 * operative))));
    mortality = Math.round(mortality * 1000) / 10;
    console.log("mortality = " + mortality + "%");
    console.log('morbidity: ' + morbidity);
    console.log('mortality: ' + mortality);
    return { morbidity, mortality}
  }
  PPossumAge(age: number) {
    if (age < 61) {
      return 1;
    } else if (age >= 61 && age <= 70) {
      return 2;
    } else {
      return 4;
    }
  }

  PPossumBP(bp: number) {
    if (bp < 90) {
      return 8;
    } else if (bp < 100) {
      return 4;
    } else if (bp < 110) {
      return 2;
    } else if (bp <= 130) {
      return 1;
    } else if (bp <= 170) {
      return 2;
    } else {
      return 4;
    }
  }

  PPossumPulse(pulse: number) {
    if (pulse < 40) {
      return 8;
    } else if (pulse < 50) {
      return 2;
    } else if (pulse <= 80) {
      return 1;
    } else if (pulse <= 100) {
      return 2;
    } else if (pulse <= 120) {
      return 4;
    } else {
      return 8;
    }
  }

  PPossumWCC(wcc: number) {
    if (wcc <= 3) {
      return 4;
    } else if (wcc <= 4) {
      return 2;
    } else if (wcc <= 10) {
      return 1;
    } else if (wcc <= 20) {
      return 2;
    } else {
      return 4;
    }
  }

  PPossumUrea(urea: number) {
    if (urea <= 7.5) {
      return 1;
    } else if (urea <= 10) {
      return 2;
    } else if (urea <= 15) {
      return 4;
    } else {
      return 8;
    }
  }

  PPossumSodium(sodium: number) {
    if (sodium <= 125) {
      return 8;
    } else if (sodium <= 130) {
      return 4;
    } else if (sodium <= 135) {
      return 2;
    } else {
      return 1;
    }
  }

  PPossumPotassium(potassium: number) {
    if (potassium <= 2.8) {
      return 8;
    } else if (potassium <= 3.1) {
      return 4;
    } else if (potassium <= 3.4) {
      return 2;
    } else if (potassium <= 5) {
      return 1;
    } else if (potassium <= 5.3) {
      return 2;
    } else if (potassium <= 5.9) {
      return 4;
    } else {
      return 8;
    }
  }

PPossumGCS(gcs: number) {
    if (gcs <= 8) {
      return 8;
    } else if (gcs <= 11) {
      return 4;
    } else if (gcs <= 14) {
      return 2;
    } else {
      return 1;
    }
  }

PPossumUrgency(urgency: number) {
	if (urgency == 8) {
		return 8;
	} else {
		return 4;
	}
}
}