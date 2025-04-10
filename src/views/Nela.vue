<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center" size="large">NELA Score</ion-title>
        <ion-buttons slot="end">
          <dark-mode-toggle></dark-mode-toggle>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-buttons slot="start" hideWhen="ios">
            <ion-back-button defaultHref="/tabs/home"></ion-back-button>
          </ion-buttons>
          <ion-title class="ion-text-center" size="large">Legacy NELA (2020) & P-POSSUM</ion-title>
        </ion-toolbar>
      </ion-header> -->
        <ion-item>
          <ion-text>
                  <br />Select the appropriate option from each category then click the calculate button.<br><br>
          </ion-text>
        </ion-item>
  <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>Age</strong>
            <ion-text color="danger" v-if="validateAge().err"> * </ion-text>
            <ion-text color="danger">{{ validateAge().erm }}</ion-text>
            <small style="font-weight: 300"
              ><br />Enter the patient's age in years</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <form class="list" @submit="$event.preventDefault()">
              <div class="list list-inset">
                <label class="item item-input">
                  <ion-input
                    style="font-size: 16px"
                    v-model="risk.age"
                    type="number"
                    placeholder="Age in years"
                    @keyup.enter="focusASA()"
                  ></ion-input>
                </label>
              </div>
            </form>
          </div> </ion-card-content
      ></ion-card>
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>ASA</strong>
            <ion-text color="danger" v-if="validateASA().err"> * </ion-text>
            <small style="font-weight: 300"
              ><br />What is the patient's ASA grade?</small
            >
          </div>
          <ion-list radio-group>
            <ion-radio-group v-model="risk.asa">
              <ion-item
                ><ion-label text-wrap>1: No systemic disease</ion-label
                ><ion-radio ref="asa" value="1" slot="start"></ion-radio
              ></ion-item>
              <ion-item
                ><ion-label text-wrap>2: Mild systemic disease</ion-label
                ><ion-radio value="2" slot="start"></ion-radio
              ></ion-item>
              <ion-item
                ><ion-label text-wrap
                  >3: Severe systemic disease, not life-threatening</ion-label
                ><ion-radio value="3" slot="start"></ion-radio
              ></ion-item>
              <ion-item
                ><ion-label text-wrap
                  >4: Severe, life-threatening systemic disease</ion-label
                ><ion-radio value="4" slot="start"></ion-radio
              ></ion-item>
              <ion-item
                ><ion-label text-wrap>5: Moribund</ion-label
                ><ion-radio value="5" slot="start"></ion-radio
              ></ion-item>
            </ion-radio-group>
          </ion-list> </ion-card-content
      ></ion-card>
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>Albumin</strong>
            <ion-text color="danger" v-if="validateAlbumin().err"> * </ion-text>
            <ion-text color="danger">{{ validateAlbumin().erm }}</ion-text>
            <small style="font-weight: 300"
              ><br />What was the most recent pre-operative albumin?
              (g/L)</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <div class="list list-inset">
                <label class="item item-input">
                  <ion-input
                    style="font-size: 16px"
                    v-model="risk.albumin"
                    type="number"
                    placeholder="Albumin"
                    @keyup.enter="focusPulse()"
                  ></ion-input>
                </label>
              </div>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>Pulse Rate</strong>
            <ion-text color="danger" v-if="validatePulse().err"> * </ion-text>
            <ion-text color="danger">{{ validatePulse().erm }}</ion-text>
            <small style="font-weight: 300"
              ><br />What was the most recent pre-operative pulse rate?
              (min<sup>-1</sup>)</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <div class="list list-inset">
                <label class="item item-input">
                  <ion-input
                    ref="pulse"
                    style="font-size: 16px"
                    v-model="risk.pulse"
                    type="number"
                    placeholder="Pulse"
                    @keyup.enter="focusBP()"
                  ></ion-input>
                </label>
              </div>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>Systolic BP</strong>
            <ion-text color="danger" v-if="validateBP().err"> * </ion-text>
            <ion-text color="danger">{{ validateBP().erm }}</ion-text>
            <small style="font-weight: 300"
              ><br />What was the most recent pre-operative systolic blood
              pressure? (mmHg)</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <div class="list list-inset">
                <label class="item item-input">
                  <ion-input
                    ref="bp"
                    style="font-size: 16px"
                    v-model="risk.bp"
                    type="number"
                    placeholder="Systolic BP"
                    @keyup.enter="focusUrea()"
                  ></ion-input>
                </label>
              </div>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>Urea</strong>
            <ion-text color="danger" v-if="validateUrea().err"> * </ion-text>
            <ion-text color="danger">{{ validateUrea().erm }}</ion-text>
            <small style="font-weight: 300"
              ><br />What was the most recent pre-operative value for serum
              urea? (mmol.L<sup>-1</sup>)</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <div class="list list-inset">
                <label class="item item-input">
                  <ion-input
                    ref="urea"
                    style="font-size: 16px"
                    v-model="risk.urea"
                    type="number"
                    placeholder="Urea"
                    @keyup.enter="focusWCC()"
                  ></ion-input>
                </label>
              </div>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>White cell count</strong>
            <ion-text color="danger" v-if="validateWCC().err"> * </ion-text>
            <ion-text color="danger">{{ validateWCC().erm }}</ion-text>
            <small style="font-weight: 300"
              ><br />What was the most recent pre-operative value for white cell
              count? (x10<sup>9</sup> litre<sup>-1</sup>)</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <div class="list list-inset">
                <label class="item item-input">
                  <ion-input
                    ref="wcc"
                    style="font-size: 16px"
                    v-model="risk.wcc"
                    type="number"
                    placeholder="WCC"
                    @keyup.enter="focusGCS()"
                  ></ion-input>
                </label>
              </div>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>
      <!-- <ion-card>
      <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Gender</strong>
        <ion-text color="danger" v-if="validateGender().err"> * </ion-text>
      <small style="font-weight: 300;"><br>What is the patient's gender?</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.gender">
              <ion-item><ion-label text-wrap>Female</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Male</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
 </ion-card-content></ion-card> -->
      <!-- <ion-card>
   <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Cardiac</strong>
        <ion-text color="danger" v-if="validateCardiac().err"> * </ion-text>
        <small style="font-weight: 300;"><br>Select an option that best describes this patient's cardiac signs and chest xray appearance</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.cardiac">
              <ion-item><ion-label text-wrap>No cardiac failure</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Diuretic, digoxin, Rx for angina or hypertension</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Peripheral oedema, warfarin therapy or CXR: borderline cardiomegaly</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Raised JVP, cardiomegaly</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card> -->
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>GCS</strong>
            <ion-text color="danger" v-if="validateGCS().err"> * </ion-text>
            <small style="font-weight: 300"
              ><br />Select the patient's conscious level on the Glasgow coma
              scale</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <ion-radio-group v-model="risk.gcs">
                <ion-item
                  ><ion-label>15</ion-label
                  ><ion-radio ref="gcs" value="15" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>14</ion-label
                  ><ion-radio value="14" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>3 - 13</ion-label
                  ><ion-radio value="13" slot="start"></ion-radio
                ></ion-item>
              </ion-radio-group>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>Malignancy status</strong>
            <ion-text color="danger" v-if="validateCancer().err"> * </ion-text>
            <small style="font-weight: 300"
              ><br />What severity of malignancy is anticipated to be
              present?</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <ion-radio-group v-model="risk.cancer">
                <ion-item
                  ><ion-label>Not malignant</ion-label
                  ><ion-radio value="1" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>Primary malignancy only</ion-label
                  ><ion-radio value="2" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>Malignancy and nodal metastases</ion-label
                  ><ion-radio value="4" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>Malignancy and distant metastases</ion-label
                  ><ion-radio value="8" slot="start"></ion-radio
                ></ion-item>
              </ion-radio-group>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>Respiratory</strong>
            <ion-text color="danger" v-if="validateRespiratory().err">
              *
            </ion-text>
            <small style="font-weight: 300"
              ><br />Select an option that best describes this patient's
              respiratory history and chest xray appearance</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <ion-radio-group v-model="risk.respiratory">
                <ion-item
                  ><ion-label text-wrap>No dyspnoea</ion-label
                  ><ion-radio value="1" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label text-wrap
                    >Dyspnoea on exertion or CXR: mild COPD</ion-label
                  ><ion-radio value="2" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label text-wrap
                    >Dyspnoea limiting exertion to &lt;1 flight or CXR: moderate
                    COPD</ion-label
                  ><ion-radio value="4" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label text-wrap
                    >Dyspnoea at rest/rate &gt;30 at rest or CXR: fibrosis or
                    consolidation</ion-label
                  ><ion-radio value="8" slot="start"></ion-radio
                ></ion-item>
              </ion-radio-group>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            <strong>Urgency / CEPOD</strong>
            <ion-text color="danger" v-if="validateCepod().err"> * </ion-text>
            <small style="font-weight: 300"
              ><br />What was global impression of the urgency of surgery at the
              time of booking the case?</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <ion-radio-group v-model="risk.cepod">
                <ion-item
                  ><ion-label>3: Expedited (&gt;18 hours)</ion-label
                  ><ion-radio value="1" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>2B. Urgent (6-18 hours)</ion-label
                  ><ion-radio value="2" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>2A. Urgent (2-6 hours)</ion-label
                  ><ion-radio value="4" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>1. Immediate (&lt;2 hours)</ion-label
                  ><ion-radio value="8" slot="start"></ion-radio
                ></ion-item>
              </ion-radio-group>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>
      <!-- <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>ECG</strong>
        <ion-text color="danger" v-if="validateECG().err"> * </ion-text>
        <small style="font-weight: 300"><br>Select an option that best describes this patient's ECG</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.ecg">
              <ion-item><ion-label text-wrap>Normal</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>AF, rate 60-90</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>AF rate >90 or any other abnormal rhythm/paced rhythm or &gt;5VE/min or Q, ST or T wave abnormalities</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card> -->

      <!-- <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Haemoglobin</strong>
        <ion-text color="danger" v-if="validateHb().err"> * </ion-text>
        <ion-text color="danger">{{ validateHb().erm }}</ion-text>
        <small style="font-weight: 300"><br>What was the most recent pre-operative value for haemoglobin? (g.dL<sup>-1</sup>)</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.hb">
              <ion-item><ion-label text-wrap>13 - 16</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>11.5 - 12.9 or 16.1 - 17</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>10 - 11.4 or 17.1 - 18</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>&le;9.9 or &ge;18.1</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card> -->
      <!-- <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Creatinine</strong>
        <ion-text color="danger" v-if="validateCreatinine().err"> * </ion-text>
        <ion-text color="danger">{{ validateCreatinine().erm }}</ion-text>
        <small style="font-weight: 300"><br>What was the most recent pre-operative value for serum Creatinine?  (micromol.L<sup>-1</sup>)</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
              <div class="list list-inset">
                  <label class="item item-input">
                      <ion-input style="font-size:16px;" v-model='risk.creatinine' type="number" placeholder="Creatinine"></ion-input>
                  </label>
              </div>
          </ion-list>
      </div>
  </ion-card-content></ion-card> -->
      <!-- <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Sodium</strong>
        <ion-text color="danger" v-if="validateSodium().err"> * </ion-text>
        <ion-text color="danger">{{ validateSodium().erm }}</ion-text>
        <small style="font-weight: 300"><br>What was the most recent pre-operative value for serum sodium?  (mmol.L<sup>-1</sup>)</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
              <div class="list list-inset">
                  <label class="item item-input">
                      <ion-input style="font-size:16px;" v-model='risk.sodium' type="number" placeholder="Sodium"></ion-input>
                  </label>
              </div>
          </ion-list>
      </div>
  </ion-card-content></ion-card> -->
      <!-- <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Potassium</strong>
        <ion-text color="danger" v-if="validatePotassium().err"> * </ion-text>
        <ion-text color="danger">{{ validatePotassium().erm }}</ion-text>
        <small style="font-weight: 300"><br>What was the most recent pre-operative value for serum potassium?  (mmol.L<sup>-1</sup>)</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
              <div class="list list-inset">
                  <label class="item item-input">
                      <ion-input style="font-size:16px;" v-model='risk.potassium' type="number" placeholder="Potassium"></ion-input>
                  </label>
              </div>
          </ion-list>
      </div>
  </ion-card-content></ion-card> -->

      <!-- <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Operation type</strong>
        <ion-text color="danger" v-if="validateSeverity().err"> * </ion-text>
        <small style="font-weight: 300"><br>Select the operative severity of the intended surgical intervention</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.severity">
              <ion-item><ion-label>Major Operation</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Complex Major Operation</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card> -->
      <!-- <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Number of procedures</strong>
        <ion-text color="danger" v-if="validateNumber().err"> * </ion-text>
        <small style="font-weight: 300"><br>Including this operation, how many operations has the patient had in the 30 day period prior to this procedure?</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.number">
              <ion-item><ion-label>One</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Two</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Three or more</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card> -->
      <!-- <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Operative blood loss</strong>
        <ion-text color="danger" v-if="validateBlood().err"> * </ion-text>
        <small style="font-weight: 300"><br>Based on your clinical experience of the intended surgery, please estimate the likely intraoperative blood loss</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.blood">
              <ion-item><ion-label>&le; 100 mls</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>101 - 500 mls</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>501-999 mls</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>&ge; 1000 mls</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card> -->
      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            Peritoneal contamination
            <ion-text color="danger" v-if="validateSoiling().err"> * </ion-text>
            <small style="font-weight: 300"
              ><br />Please select a value that best describes the likely degree
              of peritoneal soiling</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-list radio-group>
              <ion-radio-group v-model="risk.soiling">
                <ion-item
                  ><ion-label>No soiling</ion-label
                  ><ion-radio value="1" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>Serous fluid</ion-label
                  ><ion-radio value="2" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>Local pus</ion-label
                  ><ion-radio value="4" slot="start"></ion-radio
                ></ion-item>
                <ion-item
                  ><ion-label>Free bowel content, pus or blood</ion-label
                  ><ion-radio value="8" slot="start"></ion-radio
                ></ion-item>
              </ion-radio-group>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>

      <ion-card>
        <ion-card-content>
          <div class="item item-divider item-text-wrap">
            Indications for surgery
            <ion-text color="danger" v-if="validateSoiling().err"> * </ion-text>
            <small style="font-weight: 300"
              ><br />Please select all indications for surgery</small
            >
          </div>
          <div class="item item-text-wrap item-body">
            <ion-item><strong>Bleeding</strong></ion-item>
            <ion-list option-group>
              <ion-item>
                <ion-label>Haemorrhage</ion-label>
                <ion-checkbox
                  v-model="risk.indHaemorrhage"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
            </ion-list>

            <ion-item><strong>Other</strong></ion-item>
            <ion-list option-group>
              <ion-item>
                <ion-label>Abdominal wound dehiscence</ion-label>
                <ion-checkbox
                  v-model="risk.indAbdominalWoundDehiscence"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Abdominal compartment syndrome</ion-label>
                <ion-checkbox
                  v-model="risk.indAbdominalCompartmentSyndrome"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Planned relook</ion-label>
                <ion-checkbox
                  v-model="risk.indPlannedRelook"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Other</ion-label>
                <ion-checkbox
                  v-model="risk.indOther"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
            </ion-list>

            <ion-item><strong>Obstruction</strong></ion-item>
            <ion-list option-group>
              <ion-item>
                <ion-label>Tender Small bowel obstruction</ion-label>
                <ion-checkbox
                  v-model="risk.indTenderSmallBowelObstruction"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Non-Tender Small bowel obstruction</ion-label>
                <ion-checkbox
                  v-model="risk.indNonTenderSmallBowelObstruction"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Tender Large bowel obstruction</ion-label>
                <ion-checkbox
                  v-model="risk.indTenderLargeBowelObstruction"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Non-Tender Large bowel obstruction</ion-label>
                <ion-checkbox
                  v-model="risk.indNonTenderLargeBowelObstruction"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Gastric outlet obstruction</ion-label>
                <ion-checkbox
                  v-model="risk.indGastricOutletObstruction"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Incarcerated/strangulated hernia</ion-label>
                <ion-checkbox
                  v-model="risk.indIncarceratedHernia"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Hiatus Hernia/para-oesophageal hernia</ion-label>
                <ion-checkbox
                  v-model="risk.indHiatusHernia"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Volvulus</ion-label>
                <ion-checkbox
                  v-model="risk.indVolvulus"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Internal hernia</ion-label>
                <ion-checkbox
                  v-model="risk.indInternalHernia"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Obstructing incisional hernia</ion-label>
                <ion-checkbox
                  v-model="risk.indObstructingIncisionalHernia"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Intussusception</ion-label>
                <ion-checkbox
                  v-model="risk.indIntussusception"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Pseudo-obstruction</ion-label>
                <ion-checkbox
                  v-model="risk.indPseudoObstruction"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Foreign body</ion-label>
                <ion-checkbox
                  v-model="risk.indForeignBody"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
            </ion-list>

            <ion-item><strong>Sepsis</strong></ion-item>
            <ion-list option-group>
              <ion-item>
                <ion-label>Phlegmon</ion-label>
                <ion-checkbox
                  v-model="risk.indPhlegmon"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Pneumoperitoneum</ion-label>
                <ion-checkbox
                  v-model="risk.indPneumoperitoneum"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Sepsis</ion-label>
                <ion-checkbox
                  v-model="risk.indSepsisOther"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Iatrogenic injury</ion-label>
                <ion-checkbox
                  v-model="risk.indIatrogenicInjury"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Anastomotic leak</ion-label>
                <ion-checkbox
                  v-model="risk.indAnastomoticLeak"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Peritonitis</ion-label>
                <ion-checkbox
                  v-model="risk.indPeritonitis"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>GI Perforation</ion-label>
                <ion-checkbox
                  v-model="risk.indPerforation"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Abdominal abscess</ion-label>
                <ion-checkbox
                  v-model="risk.indAbdominalAbscess"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Intestinal fistula</ion-label>
                <ion-checkbox
                  v-model="risk.indIntestinalFistula"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
            </ion-list>

            <ion-item><strong>Ischaemia</strong></ion-item>
            <ion-list option-group>
              <ion-item>
                <ion-label>Necrosis</ion-label>
                <ion-checkbox
                  v-model="risk.indNecrosis"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Ischaemia/infarction</ion-label>
                <ion-checkbox
                  v-model="risk.indIschaemia"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Colitis</ion-label>
                <ion-checkbox
                  v-model="risk.indColitis"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-label>Acidosis</ion-label>
                <ion-checkbox
                  v-model="risk.indAcidosis"
                  slot="start"
                  @ionChange="indicationChange()"
                ></ion-checkbox>
              </ion-item>
            </ion-list>
          </div> </ion-card-content
      ></ion-card>

      <ion-grid
        ><ion-row text-center align-items-center>
          <ion-col text-center
            ><ion-button :disabled="!checkParams()" type="button" @click="go()">
              Calculate
            </ion-button>
            <ion-button color="light" type="button" @click="reset()">
              Reset
            </ion-button>
            <!-- <ion-button color="light" type="button" @click="mock()">
              Mock
            </ion-button> -->
          </ion-col></ion-row
        >
        <ion-item color="danger" v-if="!checkParams()">
          Some data fields are missing or invalid
        </ion-item>
      </ion-grid>
      <ion-modal :is-open="open">
        <ion-content>
          <ion-header>
            <ion-toolbar>
              <ion-title>NELA</ion-title>
              <ion-buttons slot="end">
                <ion-icon
                  size="large"
                  :icon="close"
                  @click="open = false"
                ></ion-icon>
                &nbsp;
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-grid>
              <ion-row>
                <ion-col class="ion-text-center">
                  <p>
                    Estimated mortality using the Parsimonious NELA risk
                    adjustment model:
                  </p>
                  <h1>{{ result.percentage }}</h1>
                  <br />
                  <div
                    class="ion-text-left"
                    style="color: #000"
                    v-if="result.extra === 'higher'"
                  >
                    This patient is <strong>higher risk</strong> and should:
                    <ul>
                      <li>
                        have active input by a consultant surgeon and consultant
                        anaesthetist
                      </li>
                    </ul>
                  </div>
                  <div
                    class="ion-text-left"
                    style="color: #000"
                    v-if="result.extra === 'high'"
                  >
                    This patient is <strong>high risk</strong> and should:
                    <ul>
                      <li>
                        receive care under direct supervision of consultant
                        surgeon and consultant anaesthetist
                      </li>
                      <li>be admitted to HDU or ITU post-operatively</li>
                    </ul>
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-content>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
/* eslint-disable prefer-const */
import { defineComponent, ref } from 'vue';
import {
  IonBackButton,
  IonButtons,
  IonIcon,
  IonModal,
  IonText,
  IonRadioGroup,
  IonButton,
  IonInput,
  IonCardContent,
  IonCard,
  IonRadio,
  IonLabel,
  IonItem,
  IonRow,
  IonCol,
  IonList,
  IonGrid,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCheckbox,
} from '@ionic/vue';
import { close } from 'ionicons/icons';
import { Calculators } from '../components/calc';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

export default defineComponent({
  name: 'Tab2Page',
  components: {
    IonBackButton,
    IonButtons,
    IonIcon,
    IonModal,
    IonText,
    IonRadioGroup,
    IonButton,
    IonInput,
    IonCardContent,
    IonCard,
    IonRadio,
    IonLabel,
    IonItem,
    IonRow,
    IonCol,
    IonList,
    IonGrid,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCheckbox,
    DarkModeToggle,
  },
  data: () => ({
    ready: false,
    open: false,
    result: {
      percentage: '',
      extra: '',
    },
    risk: {
      age: '',
      cepod: '',
      soiling: '',
      cancer: '',
      blood: '',
      number: '',
      severity: '',
      gcs: '',
      asa: '',
      gender: '',
      cardiac: '',
      respiratory: '',
      ecg: '',
      bp: '',
      hb: '',
      pulse: '',
      urea: '',
      creatinine: '',
      sodium: '',
      potassium: '',
      wcc: '',
      albumin: '',
      indication: '',
      maxInd: 0,
      indHaemorrhage: false,
      indAbdominalWoundDehiscence: false,
      indAbdominalCompartmentSyndrome: false,
      indPlannedRelook: false,
      indOther: false,
      indTenderSmallBowelObstruction: false,
      indNonTenderSmallBowelObstruction: false,
      indTenderLargeBowelObstruction: false,
      indNonTenderLargeBowelObstruction: false,
      indGastricOutletObstruction: false,
      indIncarceratedHernia: false,
      indHiatusHernia: false,
      indVolvulus: false,
      indInternalHernia: false,
      indObstructingIncisionalHernia: false,
      indIntussusception: false,
      indPseudoObstruction: false,
      indForeignBody: false,
      indPhlegmon: false,
      indPneumoperitoneum: false,
      indSepsisOther: false,
      indIatrogenicInjury: false,
      indAnastomoticLeak: false,
      indPeritonitis: false,
      indPerforation: false,
      indAbdominalAbscess: false,
      indIntestinalFistula: false,
      indNecrosis: false,
      indIschaemia: false,
      indColitis: false,
      indAcidosis: false,
    },
  }),
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => (isOpenRef.value = state);
    return {
      close,
      setOpen,
    };
  },
  methods: {
    indicationChange() {
      // setTimeout(() => {
        console.log('indication changed');
        console.log(this.risk);
        let maxInd = 0;
        const risk = this.risk;
        if (
          risk.indNecrosis === true ||
          risk.indIschaemia === true ||
          risk.indAcidosis === true ||
          risk.indColitis === true
        ) {
          maxInd = 3; //Ischaemia
        } else if (
          risk.indPhlegmon === true ||
          risk.indPneumoperitoneum === true ||
          risk.indSepsisOther === true ||
          risk.indIatrogenicInjury === true ||
          risk.indAnastomoticLeak === true ||
          risk.indPerforation === true ||
          risk.indPeritonitis === true ||
          risk.indAbdominalAbscess === true ||
          risk.indIntestinalFistula === true
        ) {
          maxInd = 2; //Sepsis
        } else if (
          risk.indTenderSmallBowelObstruction === true ||
          risk.indNonTenderSmallBowelObstruction === true ||
          risk.indTenderLargeBowelObstruction === true ||
          risk.indNonTenderLargeBowelObstruction === true ||
          risk.indGastricOutletObstruction === true ||
          risk.indIncarceratedHernia === true ||
          risk.indHiatusHernia === true ||
          risk.indVolvulus === true ||
          risk.indInternalHernia === true ||
          risk.indObstructingIncisionalHernia === true ||
          risk.indIntussusception === true ||
          risk.indPseudoObstruction === true ||
          risk.indForeignBody === true
        ) {
          maxInd = 1; //Obstruction
        } else if (
          risk.indAbdominalWoundDehiscence === true ||
          risk.indAbdominalCompartmentSyndrome === true ||
          risk.indPlannedRelook === true ||
          risk.indOther === true
        ) {
          maxInd = 5; //Other
        } else if (risk.indHaemorrhage === true) {
          maxInd = 4; //Bleeding
        }
        console.log(risk);
        if (
          risk.indHaemorrhage === false &&
          risk.indAbdominalWoundDehiscence === false &&
          risk.indAbdominalCompartmentSyndrome === false &&
          risk.indPlannedRelook === false &&
          risk.indOther === false &&
          risk.indTenderSmallBowelObstruction === false &&
          risk.indNonTenderSmallBowelObstruction === false &&
          risk.indTenderLargeBowelObstruction === false &&
          risk.indNonTenderLargeBowelObstruction === false &&
          risk.indGastricOutletObstruction === false &&
          risk.indIncarceratedHernia === false &&
          risk.indHiatusHernia === false &&
          risk.indVolvulus === false &&
          risk.indInternalHernia === false &&
          risk.indObstructingIncisionalHernia === false &&
          risk.indIntussusception === false &&
          risk.indPseudoObstruction === false &&
          risk.indForeignBody === false &&
          risk.indPhlegmon === false &&
          risk.indPneumoperitoneum === false &&
          risk.indSepsisOther === false &&
          risk.indIatrogenicInjury === false &&
          risk.indAnastomoticLeak === false &&
          risk.indPeritonitis === false &&
          risk.indPerforation === false &&
          risk.indAbdominalAbscess === false &&
          risk.indIntestinalFistula === false &&
          risk.indNecrosis === false &&
          risk.indIschaemia === false &&
          risk.indColitis === false &&
          risk.indAcidosis === false
        ) {
          console.log('all are false!');
          maxInd = 0;
        }
        console.log('maxInd is now: ' + maxInd);
        this.risk.maxInd = maxInd;
      // }, 100);
    },
    mock() {
      this.risk = {
        age: '30',
        cepod: '1',
        soiling: '1',
        cancer: '1',
        blood: '1',
        number: '1',
        severity: '4',
        gcs: '1',
        asa: '1',
        gender: '1',
        cardiac: '1',
        respiratory: '1',
        ecg: '1',
        hb: '8',
        bp: '139',
        pulse: '102',
        urea: '4.3',
        creatinine: '55',
        sodium: '134',
        potassium: '4.3',
        wcc: '5.4',
        albumin: '34',
        indication: '3',
        maxInd: 0,
        indHaemorrhage: true,
        indAbdominalWoundDehiscence: false,
        indAbdominalCompartmentSyndrome: false,
        indPlannedRelook: false,
        indOther: false,
        indTenderSmallBowelObstruction: false,
        indNonTenderSmallBowelObstruction: false,
        indTenderLargeBowelObstruction: false,
        indNonTenderLargeBowelObstruction: false,
        indGastricOutletObstruction: false,
        indIncarceratedHernia: false,
        indHiatusHernia: false,
        indVolvulus: false,
        indInternalHernia: false,
        indObstructingIncisionalHernia: false,
        indIntussusception: false,
        indPseudoObstruction: false,
        indForeignBody: false,
        indPhlegmon: false,
        indPneumoperitoneum: false,
        indSepsisOther: false,
        indIatrogenicInjury: false,
        indAnastomoticLeak: false,
        indPeritonitis: false,
        indPerforation: false,
        indAbdominalAbscess: false,
        indIntestinalFistula: false,
        indNecrosis: false,
        indIschaemia: false,
        indColitis: false,
        indAcidosis: false,
      };
      this.indicationChange();
    },
    reset() {
      this.result = {
        percentage: '',
        extra: '',
      };
      this.risk = {
        age: '',
        cepod: '',
        soiling: '',
        cancer: '',
        blood: '',
        number: '',
        severity: '',
        gcs: '',
        asa: '',
        gender: '',
        cardiac: '',
        respiratory: '',
        ecg: '',
        bp: '',
        hb: '',
        pulse: '',
        urea: '',
        creatinine: '',
        sodium: '',
        potassium: '',
        wcc: '',
        albumin: '',
        indication: '',
        maxInd: 0,
        indHaemorrhage: false,
        indAbdominalWoundDehiscence: false,
        indAbdominalCompartmentSyndrome: false,
        indPlannedRelook: false,
        indOther: false,
        indTenderSmallBowelObstruction: false,
        indNonTenderSmallBowelObstruction: false,
        indTenderLargeBowelObstruction: false,
        indNonTenderLargeBowelObstruction: false,
        indGastricOutletObstruction: false,
        indIncarceratedHernia: false,
        indHiatusHernia: false,
        indVolvulus: false,
        indInternalHernia: false,
        indObstructingIncisionalHernia: false,
        indIntussusception: false,
        indPseudoObstruction: false,
        indForeignBody: false,
        indPhlegmon: false,
        indPneumoperitoneum: false,
        indSepsisOther: false,
        indIatrogenicInjury: false,
        indAnastomoticLeak: false,
        indPeritonitis: false,
        indPerforation: false,
        indAbdominalAbscess: false,
        indIntestinalFistula: false,
        indNecrosis: false,
        indIschaemia: false,
        indColitis: false,
        indAcidosis: false,
      };
    },
    checkParams() {
      // if (this.risk.indication === '') {
      //   return false;
      // }
      if (this.risk.age === '') {
        return false;
      }
      if (this.risk.cepod === '') {
        return false;
      }
      if (this.risk.soiling === '') {
        return false;
      }
      if (this.risk.cancer === '') {
        return false;
      }
      // if (this.risk.blood === "") {
      //   return false;
      // }
      // if (this.risk.number === '') {
      //   return false;
      // }
      // if (this.risk.severity === '') {
      //   return false;
      // }
      if (this.risk.gcs === '') {
        return false;
      }
      if (this.risk.asa === '') {
        return false;
      }
      // if (this.risk.gender === "") {
      //   return false;
      // }
      // if (this.risk.cardiac === "") {
      //   return false;
      // }
      if (this.risk.respiratory === '') {
        return false;
      }
      // if (this.risk.ecg === "") {
      //   return false;
      // }
      if (this.risk.bp === '') {
        return false;
      }
      if (this.risk.wcc === '') {
        return false;
      }
      if (this.risk.pulse === '') {
        return false;
      }
      if (this.risk.urea === '') {
        return false;
      }
      // if (this.risk.creatinine === "") {
      //   return false;
      // }
      if (this.risk.albumin === '') {
        return false;
      }
      if (this.risk.maxInd === 0) {
        return false;
      }
      return true;
    },
    validateUrea() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (
        !parseFloat(this.risk.urea) &&
        this.risk.urea !== '' &&
        parseFloat(this.risk.urea) !== 0
      ) {
        output.erm = 'Urea result is not a number';
        output.err = true;
        return output;
      }
      if (this.risk.urea === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.urea) < 0) {
        output.erm = 'Urea result cannot be negative';
        output.err = true;
        return output;
      }
      return output;
    },
    validateAlbumin() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (
        !parseFloat(this.risk.albumin) &&
        this.risk.albumin !== '' &&
        parseFloat(this.risk.albumin) !== 0
      ) {
        output.erm = 'Albumin result is not a number';
        output.err = true;
        return output;
      }
      if (this.risk.albumin === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.albumin) < 0) {
        output.erm = 'Albumin result cannot be negative';
        output.err = true;
        return output;
      }
      return output;
    },
    validateCreatinine() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (
        !parseFloat(this.risk.creatinine) &&
        this.risk.creatinine !== '' &&
        parseFloat(this.risk.creatinine) !== 0
      ) {
        output.erm = 'Creatinine result is not a number';
        output.err = true;
        return output;
      }
      if (this.risk.creatinine === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.creatinine) < 0) {
        output.erm = 'Creatinine result cannot be negative';
        output.err = true;
        return output;
      }
      return output;
    },
    validateSodium() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (
        !parseFloat(this.risk.sodium) &&
        this.risk.sodium !== '' &&
        parseFloat(this.risk.sodium) !== 0
      ) {
        output.erm = 'Sodium result is not a number';
        output.err = true;
        return output;
      }
      if (this.risk.sodium === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.sodium) < 0) {
        output.erm = 'Sodium result cannot be negative';
        output.err = true;
        return output;
      }
      return output;
    },
    validatePotassium() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (
        !parseFloat(this.risk.potassium) &&
        this.risk.potassium !== '' &&
        parseFloat(this.risk.potassium) !== 0
      ) {
        output.erm = 'Potassium result is not a number';
        output.err = true;
        return output;
      }
      if (this.risk.potassium === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.potassium) < 0) {
        output.erm = 'Potassium result cannot be negative';
        output.err = true;
        return output;
      }
      return output;
    },
    validateWCC() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (
        !parseFloat(this.risk.wcc) &&
        this.risk.wcc !== '' &&
        parseFloat(this.risk.wcc) !== 0
      ) {
        output.erm = 'White cell count is not a number';
        output.err = true;
        return output;
      }
      if (this.risk.wcc === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.wcc) < 0) {
        output.erm = 'White cell count cannot be negative';
        output.err = true;
        return output;
      }
      return output;
    },
    validatePulse() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (
        !parseInt(this.risk.pulse) &&
        this.risk.pulse !== '' &&
        parseInt(this.risk.pulse) !== 0
      ) {
        output.erm = 'Pulse is not a number';
        output.err = true;
        return output;
      }
      if (this.risk.pulse === '') {
        output.err = true;
      }
      if (parseInt(this.risk.pulse) <= 0) {
        output.erm = 'Pulse cannot be zero or negative';
        output.err = true;
        return output;
      }
      return output;
    },
    validateBP() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (
        !parseInt(this.risk.bp) &&
        this.risk.bp !== '' &&
        parseInt(this.risk.bp) !== 0
      ) {
        output.erm = 'Blood pressure is not a number';
        output.err = true;
        return output;
      }
      if (this.risk.bp === '') {
        output.err = true;
      }
      if (parseInt(this.risk.bp) <= 0) {
        output.erm = 'Blood pressure cannot be zero or negative';
        output.err = true;
        return output;
      }
      return output;
    },
    validateAge() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (
        !parseInt(this.risk.age) &&
        this.risk.age !== '' &&
        parseInt(this.risk.age) !== 0
      ) {
        output.erm = 'Age is not a number';
        output.err = true;
        return output;
      }
      if (this.risk.age === '') {
        output.err = true;
      }
      // Were aged between 18 and 105 years.
      if (parseInt(this.risk.age) < 18) {
        output.erm =
          'The NELA calculator is not validated in patients under 18 years of age.';
        output.err = true;
      }
      if (parseInt(this.risk.age) > 105) {
        output.erm =
          'The NELA calculator is not validated in patients aged over 105 years.';
        output.err = true;
      }
      return output;
    },
    validateASA() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.asa === '') {
        output.err = true;
      }
      return output;
    },
    validateHb() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.hb === '') {
        output.err = true;
      }
      return output;
    },
    validateGender() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.gender === '') {
        output.err = true;
      }
      return output;
    },
    validateCardiac() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.cardiac === '') {
        output.err = true;
      }
      return output;
    },
    validateRespiratory() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.respiratory === '') {
        output.err = true;
      }
      return output;
    },
    validateECG() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.ecg === '') {
        output.err = true;
      }
      return output;
    },
    validateGCS() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.gcs === '') {
        output.err = true;
      }
      return output;
    },
    validateSeverity() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.severity === '') {
        output.err = true;
      }
      return output;
    },
    validateNumber() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.number === '') {
        output.err = true;
      }
      return output;
    },
    validateBlood() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.blood === '') {
        output.err = true;
      }
      return output;
    },
    validateSoiling() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.soiling === '') {
        output.err = true;
      }
      return output;
    },
    validateCancer() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.cancer === '') {
        output.err = true;
      }
      return output;
    },
    validateCepod() {
      let output = {
        erm: '',
        err: false,
      };
      if (this.risk.cepod === '') {
        output.err = true;
      }
      return output;
    },
    focusASA() {
      (this.$refs.asa as any).$el.focus();
    },
    focusPulse() {
      (this.$refs.pulse as any).$el.setFocus();
    },
    focusBP() {
      (this.$refs.bp as any).$el.setFocus();
    },
    focusUrea() {
      (this.$refs.urea as any).$el.setFocus();
    },
    focusWCC() {
      (this.$refs.wcc as any).$el.setFocus();
    },
    focusGCS() {
      (this.$refs.gcs as any).$el.focus();
    },
    showResult() {
      console.log(this.result);
      if (this.result) {
        return this.result;
      }
      return {
        percentage: '',
        extra: '',
        ppossum: {
          morbidity: -1,
          mortality: -1,
        },
      };
    },
    go() {
      this.open = true;
      const nelacalc = new Calculators();
      const calc = nelacalc.NelaV2(nelacalc.harmoniseParams(this.risk));
      console.log({ calc });
      if (!calc) {
        this.open = false;
        return;
      }
      const mortality = calc.mortality;
      // const mortality = 99 //  testing
      let exp = '';
      if (mortality < 5) {
        exp = '';
      } else {
        if (mortality < 10) {
          exp = 'higher';
        } else {
          // greater than or equal to 10%
          exp = 'high';
        }
      }
      this.result = {
        percentage: `${mortality}%`,
        extra: exp,
      };
    },
  },
});
</script>
<style scoped>
ion-content {
  --background: var(--ion-background-gradient-start);
  --background: -moz-linear-gradient(
    top,
    var(--ion-background-gradient-start) 0%,
    var(--ion-background-gradient-middle) 47%,
    var(--ion-background-gradient-end) 100%
  );
  --background: -webkit-linear-gradient(
    top,
    var(--ion-background-gradient-start) 0%,
    var(--ion-background-gradient-middle) 47%,
    var(--ion-background-gradient-end) 100%
  );
  --background: linear-gradient(
    to bottom,
    var(--ion-background-gradient-start) 0%,
    var(--ion-background-gradient-middle) 47%,
    var(--ion-background-gradient-end) 100%
  );
}

h1,
p {
  color: var(--ion-text-color);
}
</style>
