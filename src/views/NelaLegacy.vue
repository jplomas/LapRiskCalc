<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center">Legacy NELA (2020) & P-POSSUM</ion-title>
        <ion-buttons slot="end">
          <dark-mode-toggle></dark-mode-toggle>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-buttons slot="start" hideWhen="ios">
            <ion-back-button default-href="/tabs/home"></ion-back-button>
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
      <div class="item item-divider item-text-wrap"><strong>Age</strong>
        <ion-text color="danger" v-if="validateAge().err"> * </ion-text>
        <ion-text color="danger">{{ validateAge().erm }}</ion-text>
        <small style="font-weight: 300;"><br>Enter the patient's age in years</small></div>
      <div class="item item-text-wrap item-body">
          <form class="list">
              <div class="list list-inset">
                  <label class="item item-input">
                      <ion-input style="font-size:16px;" v-model='risk.age' type="number" placeholder="Age in years"></ion-input>
                  </label>
              </div>
          </form>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>ASA</strong>
        <ion-text color="danger" v-if="validateASA().err"> * </ion-text>
        <small style="font-weight: 300;"><br>What is the patient's ASA grade?</small></div>
          <ion-list radio-group>
            <ion-radio-group v-model="risk.asa">
              <ion-item @click="risk.asa = '1'"><ion-label text-wrap>1: No systemic disease</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.asa = '2'"><ion-label text-wrap>2: Mild systemic disease</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.asa = '4'"><ion-label text-wrap>3: Severe systemic disease, not life-threatening</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.asa = '8'"><ion-label text-wrap>4: Severe, life-threatening systemic disease</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.asa = '16'"><ion-label text-wrap>5: Moribund</ion-label><ion-radio value="16" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
    </ion-card-content></ion-card>
    <ion-card>
      <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Gender</strong>
        <ion-text color="danger" v-if="validateGender().err"> * </ion-text>
      <small style="font-weight: 300;"><br>What is the patient's gender?</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.gender">
              <ion-item @click="risk.gender = '1'"><ion-label text-wrap>Female</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.gender = '2'"><ion-label text-wrap>Male</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
 </ion-card-content></ion-card>
 <ion-card>
   <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Cardiac</strong>
        <ion-text color="danger" v-if="validateCardiac().err"> * </ion-text>
        <small style="font-weight: 300;"><br>Select an option that best describes this patient's cardiac signs and chest xray appearance</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.cardiac">
              <ion-item @click="risk.cardiac = '1'"><ion-label text-wrap>No cardiac failure</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.cardiac = '2'"><ion-label text-wrap>Diuretic, digoxin, Rx for angina or hypertension</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.cardiac = '4'"><ion-label text-wrap>Peripheral oedema, warfarin therapy or CXR: borderline cardiomegaly</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.cardiac = '8'"><ion-label text-wrap>Raised JVP, cardiomegaly</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Respiratory</strong>
        <ion-text color="danger" v-if="validateRespiratory().err"> * </ion-text>
        <small style="font-weight: 300"><br>Select an option that best describes this patient's respiratory history and chest xray appearance</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.respiratory">
              <ion-item @click="risk.respiratory = '1'"><ion-label text-wrap>No dyspnoea</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.respiratory = '2'"><ion-label text-wrap>Dyspnoea on exertion or CXR: mild COPD</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.respiratory = '4'"><ion-label text-wrap>Dyspnoea limiting exertion to &lt;1 flight or CXR: moderate COPD</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.respiratory = '8'"><ion-label text-wrap>Dyspnoea at rest/rate &gt;30 at rest or CXR: fibrosis or consolidation</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>ECG</strong>
        <ion-text color="danger" v-if="validateECG().err"> * </ion-text>
        <small style="font-weight: 300"><br>Select an option that best describes this patient's ECG</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.ecg">
              <ion-item @click="risk.ecg = '1'"><ion-label text-wrap>Normal</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.ecg = '2'"><ion-label text-wrap>AF, rate 60-90</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.ecg = '4'"><ion-label text-wrap>AF rate >90 or any other abnormal rhythm/paced rhythm or &gt;5VE/min or Q, ST or T wave abnormalities</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>BP</strong>
        <ion-text color="danger" v-if="validateBP().err"> * </ion-text>
        <ion-text color="danger">{{ validateBP().erm }}</ion-text>
        <small style="font-weight: 300"><br>What was the most recent pre-operative systolic blood pressure? (mmHg)</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
              <div class="list list-inset">
                  <label class="item item-input">
                      <ion-input style="font-size:16px;" v-model='risk.bp' type="number" placeholder="Systolic BP"></ion-input>
                  </label>
              </div>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Pulse Rate</strong>
        <ion-text color="danger" v-if="validatePulse().err"> * </ion-text>
        <ion-text color="danger">{{ validatePulse().erm }}</ion-text>
        <small style="font-weight: 300"><br>What was the most recent pre-operative pulse rate? (min<sup>-1</sup>)</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
              <div class="list list-inset">
                  <label class="item item-input">
                      <ion-input style="font-size:16px;" v-model='risk.pulse' type="number" placeholder="Pulse"></ion-input>
                  </label>
              </div>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
    <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Haemoglobin</strong>
        <ion-text color="danger" v-if="validateHb().err"> * </ion-text>
        <ion-text color="danger">{{ validateHb().erm }}</ion-text>
        <small style="font-weight: 300"><br>What was the most recent pre-operative value for haemoglobin? (g.dL<sup>-1</sup>)</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.hb">
              <ion-item @click="risk.hb = '1'"><ion-label text-wrap>13 - 16</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.hb = '2'"><ion-label text-wrap>11.5 - 12.9 or 16.1 - 17</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.hb = '4'"><ion-label text-wrap>10 - 11.4 or 17.1 - 18</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.hb = '8'"><ion-label text-wrap>&le;9.9 or &ge;18.1</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>White cell count</strong>
        <ion-text color="danger" v-if="validateWCC().err"> * </ion-text>
        <ion-text color="danger">{{ validateWCC().erm }}</ion-text>
        <small style="font-weight: 300"><br>What was the most recent pre-operative value for white cell count? (x10<sup>9</sup> litre<sup>-1</sup>)</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
              <div class="list list-inset">
                  <label class="item item-input">
                      <ion-input style="font-size:16px;" v-model='risk.wcc' type="number" placeholder="WCC"></ion-input>
                  </label>
              </div>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Urea</strong>
        <ion-text color="danger" v-if="validateUrea().err"> * </ion-text>
        <ion-text color="danger">{{ validateUrea().erm }}</ion-text>
        <small style="font-weight: 300"><br>What was the most recent pre-operative value for serum urea?  (mmol.L<sup>-1</sup>)</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
              <div class="list list-inset">
                  <label class="item item-input">
                      <ion-input style="font-size:16px;" v-model='risk.urea' type="number" placeholder="Urea"></ion-input>
                  </label>
              </div>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
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
  </ion-card-content></ion-card>
  <ion-card>
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
  </ion-card-content></ion-card>
  <ion-card>
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
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>GCS</strong>
        <ion-text color="danger" v-if="validateGCS().err"> * </ion-text>
        <small style="font-weight: 300"><br>Select the patient's conscious level on the Glasgow coma scale</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.gcs">
              <ion-item @click="risk.gcs = '1'"><ion-label>13 - 15</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.gcs = '2'"><ion-label>9 - 12</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.gcs = '4'"><ion-label>3 - 8</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Operation type</strong>
        <ion-text color="danger" v-if="validateSeverity().err"> * </ion-text>
        <small style="font-weight: 300"><br>Select the operative severity of the intended surgical intervention</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.severity">
              <ion-item @click="risk.severity = '4'"><ion-label>Major Operation</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.severity = '8'"><ion-label>Complex Major Operation</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Number of procedures</strong>
        <ion-text color="danger" v-if="validateNumber().err"> * </ion-text>
        <small style="font-weight: 300"><br>Including this operation, how many operations has the patient had in the 30 day period prior to this procedure?</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.number">
              <ion-item @click="risk.number = '1'"><ion-label>One</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.number = '2'"><ion-label>Two</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.number = '4'"><ion-label>Three or more</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Operative blood loss</strong>
        <ion-text color="danger" v-if="validateBlood().err"> * </ion-text>
        <small style="font-weight: 300"><br>Based on your clinical experience of the intended surgery, please estimate the likely intraoperative blood loss</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.blood">
              <ion-item @click="risk.blood = '1'"><ion-label>&le; 100 mls</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.blood = '2'"><ion-label>101 - 500 mls</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.blood = '4'"><ion-label>501-999 mls</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.blood = '8'"><ion-label>&ge; 1000 mls</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        Peritoneal contamination
        <ion-text color="danger" v-if="validateSoiling().err"> * </ion-text>
        <small style="font-weight: 300"><br>Please select a value that best describes the likely degree of peritoneal soiling</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.soiling">
              <ion-item @click="risk.soiling = '1'"><ion-label>No soiling</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.soiling = '2'"><ion-label>Serous fluid</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.soiling = '4'"><ion-label>Local pus</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.soiling = '8'"><ion-label>Free bowel content, pus or blood</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Malignancy status</strong>
        <ion-text color="danger" v-if="validateCancer().err"> * </ion-text>
        <small style="font-weight: 300"><br>What severity of malignancy is anticipated to be present?</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.cancer">
              <ion-item @click="risk.cancer = '1'"><ion-label>Not malignant</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.cancer = '2'"><ion-label>Primary malignancy only</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.cancer = '4'"><ion-label>Malignancy and nodal metastases</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.cancer = '8'"><ion-label>Malignancy and distant metastases</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
  <ion-card>
    <ion-card-content>
      <div class="item item-divider item-text-wrap">
        <strong>Urgency / CEPOD</strong>
        <ion-text color="danger" v-if="validateCepod().err"> * </ion-text>
        <small style="font-weight: 300"><br>What was global impression of the urgency of surgery at the time of booking the case?</small></div>
      <div class="item item-text-wrap item-body">
          <ion-list radio-group>
            <ion-radio-group v-model="risk.cepod">
              <ion-item @click="risk.cepod = '1'"><ion-label>3: Expedited (&gt;18 hours)</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.cepod = '2'"><ion-label>2B. Urgent (6-18 hours)</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.cepod = '4'"><ion-label>2A. Urgent (2-6 hours)</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item @click="risk.cepod = '8'"><ion-label>1. Immediate (&lt;2 hours)</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
          <ion-grid><ion-row text-center align-items-center>
          <ion-col text-center>
            <ion-button :disabled="!checkParams()" type="button" @click="go()">
              Calculate
            </ion-button>
            <ion-button color="light" type="button" @click="reset()">
              Reset
            </ion-button>
            <!--
            <ion-button color="light" type="button" @click="mock()">
              Mock
            </ion-button>
            -->
          </ion-col>
        </ion-row>
        <ion-item color="danger" v-if="!checkParams()">
          Some data fields are missing or invalid
        </ion-item>
      </ion-grid>
        <ion-modal :is-open="open" @didDismiss="open = false">
          <ion-content>
            <ion-header>
              <ion-toolbar>
                <ion-title>Risk Assessment Results</ion-title>
                <ion-buttons slot="end">
                  <ion-button @click="open = false">
                    <ion-icon :icon="close" slot="icon-only"></ion-icon>
                  </ion-button>
                </ion-buttons>
              </ion-toolbar>
            </ion-header>
            <ion-grid class="ion-padding">
              <ion-row>
                <ion-col class="ion-text-center">
                  <ion-card>
                    <ion-card-header>
                      <ion-card-title>NELA Mortality Risk</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <h2 class="result-value">{{ showResult().percentage }}</h2>
                      <div v-if="showResult().extra === 'higher'" class="risk-warning">
                        <ion-icon :icon="warning" color="warning"></ion-icon>
                        <ion-text>
                          <p>This patient is <strong>higher risk</strong> and should:</p>
                          <ul>
                            <li>have active input by a consultant surgeon and consultant anaesthetist</li>
                          </ul>
                        </ion-text>
                      </div>
                      <div v-if="showResult().extra === 'high'" class="risk-warning">
                        <ion-icon :icon="warning" color="danger"></ion-icon>
                        <ion-text>
                          <p>This patient is <strong>high risk</strong> and should:</p>
                          <ul>
                            <li>receive care under direct supervision of consultant surgeon and consultant anaesthetist</li>
                            <li>be admitted to HDU or ITU post-operatively</li>
                          </ul>
                        </ion-text>
                      </div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col class="ion-text-center">
                  <ion-card>
                    <ion-card-header>
                      <ion-card-title>P-POSSUM Risk</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <ion-grid>
                        <ion-row>
                          <ion-col>
                            <ion-text>
                              <p>Morbidity Risk:</p>
                              <h2 class="result-value">{{ showResult().ppossum.morbidity }}%</h2>
                            </ion-text>
                          </ion-col>
                          <ion-col>
                            <ion-text>
                              <p>Mortality Risk:</p>
                              <h2 class="result-value">{{ showResult().ppossum.mortality }}%</h2>
                            </ion-text>
                          </ion-col>
                        </ion-row>
                      </ion-grid>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-content>
        </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
/* eslint-disable prefer-const */
import { defineComponent, ref } from 'vue';
import { IonPage, IonBackButton, IonButtons, IonIcon, IonModal, IonText, IonRadioGroup, IonButton, IonInput, IonCardContent, IonCard, IonRadio, IonLabel, IonItem, IonRow, IonCol, IonList, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { close, warning } from 'ionicons/icons';
import { Calculators } from '../components/calc';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import '@/assets/shared.css';

export default defineComponent({
  name: 'Tab5Page',
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
    IonPage, 
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
    IonCardHeader, 
    IonCardTitle,
    DarkModeToggle 
  },
  data: () => ({
    ready: false,
    result: {
      percentage: '',
      extra: '',
      ppossum: {
        morbidity: -1,
        mortality: -1
      }
    },
    risk:{
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
    }
  }),
  setup() {
    const open = ref(false);
    return {
      open,
      close,
      warning
    }
  },
  methods: {
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
      };
    },
    reset() {
      this.result = {
        percentage: '',
        extra: '',
        ppossum: {
          morbidity: -1,
          mortality: -1
        }
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
      };
    },
    checkParams() {
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
      if (this.risk.blood === '') {
        return false;
      }
      if (this.risk.number === '') {
        return false;
      }
      if (this.risk.severity === '') {
        return false;
      }
      if (this.risk.gcs === '') {
        return false;
      }
      if (this.risk.asa === '') {
        return false;
      }
      if (this.risk.gender === '') {
        return false;
      }
      if (this.risk.cardiac === '') {
        return false;
      }
      if (this.risk.respiratory === '') {
        return false;
      }
      if (this.risk.ecg === '') {
        return false;
      }
      if (this.risk.bp === '') {
        return false;
      }
      if (this.risk.pulse === '') {
        return false;
      }
      if (this.risk.urea === '') {
        return false;
      }
      if (this.risk.creatinine === '') {
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
      if (!parseFloat(this.risk.urea) && this.risk.urea !== '' && parseFloat(this.risk.urea) !== 0) {
        output.erm = "Urea result is not a number";
        output.err = true;
        return output
      }
      if (this.risk.urea === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.urea) < 0) {
        output.erm = "Urea result cannot be negative";
        output.err = true;
        return output
      }
      return output
    },
    validateCreatinine() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (!parseFloat(this.risk.creatinine) && this.risk.creatinine !== '' && parseFloat(this.risk.creatinine) !== 0) {
        output.erm = "Creatinine result is not a number";
        output.err = true;
        return output
      }
      if (this.risk.creatinine === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.creatinine) < 0) {
        output.erm = "Creatinine result cannot be negative";
        output.err = true;
        return output
      }
      return output
    },
    validateSodium() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (!parseFloat(this.risk.sodium) && this.risk.sodium !== '' && parseFloat(this.risk.sodium) !== 0) {
        output.erm = "Sodium result is not a number";
        output.err = true;
        return output
      }
      if (this.risk.sodium === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.sodium) < 0) {
        output.erm = "Sodium result cannot be negative";
        output.err = true;
        return output
      }
      return output
    },
    validatePotassium() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (!parseFloat(this.risk.potassium) && this.risk.potassium !== '' && parseFloat(this.risk.potassium) !== 0) {
        output.erm = "Potassium result is not a number";
        output.err = true;
        return output
      }
      if (this.risk.potassium === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.potassium) < 0) {
        output.erm = "Potassium result cannot be negative";
        output.err = true;
        return output
      }
      return output
    },
    validateWCC() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (!parseFloat(this.risk.wcc) && this.risk.wcc !== '' && parseFloat(this.risk.wcc) !== 0) {
        output.erm = "White cell count is not a number";
        output.err = true;
        return output
      }
      if (this.risk.wcc === '') {
        output.err = true;
      }
      if (parseFloat(this.risk.wcc) < 0) {
        output.erm = "White cell count cannot be negative";
        output.err = true;
        return output
      }
      return output
    },
    validatePulse() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (!parseInt(this.risk.pulse) && this.risk.pulse !== '' && parseInt(this.risk.pulse) !== 0) {
        output.erm = "Pulse is not a number";
        output.err = true;
        return output
      }
      if (this.risk.pulse === '') {
        output.err = true;
      }
      if (parseInt(this.risk.pulse) <= 0) {
        output.erm = "Pulse cannot be zero or negative";
        output.err = true;
        return output
      }
      return output
    },
    validateBP() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (!parseInt(this.risk.bp) && this.risk.bp !== '' && parseInt(this.risk.bp) !== 0) {
        output.erm = "Blood pressure is not a number";
        output.err = true;
        return output
      }
      if (this.risk.bp === '') {
        output.err = true;
      }
      if (parseInt(this.risk.bp) <= 0) {
        output.erm = "Blood pressure cannot be zero or negative";
        output.err = true;
        return output
      }
      return output
    },
    validateAge() {
      // eslint-disable-next-line prefer-const
      let output = {
        erm: '',
        err: false,
      };
      if (!parseInt(this.risk.age) && this.risk.age !== '' && parseInt(this.risk.age) !== 0) {
        output.erm = "Age is not a number";
        output.err = true;
        return output
      }
      if (this.risk.age === '') {
        output.err = true;
      }
      // Were aged between 18 and 105 years.
      if (parseInt(this.risk.age) < 18) {
        output.erm = "The NELA calculator is not validated in patients under 18 years of age.";
        output.err = true;
      }
      if (parseInt(this.risk.age) > 105) {
        output.erm = "The NELA calculator is not validated in patients aged over 105 years.";
        output.err = true;
      }
      return output
    },
    validateASA() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.asa === '') {
        output.err = true;
      }
      return output
    },
    validateHb() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.hb === '') {
        output.err = true;
      }
      return output
    },
    validateGender() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.gender === '') {
        output.err = true;
      }
      return output
    },
    validateCardiac() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.cardiac === '') {
        output.err = true;
      }
      return output
    },
    validateRespiratory() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.respiratory === '') {
        output.err = true;
      }
      return output
    },
    validateECG() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.ecg === '') {
        output.err = true;
      }
      return output
    },
    validateGCS() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.gcs === '') {
        output.err = true;
      }
      return output
    },
    validateSeverity() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.severity === '') {
        output.err = true;
      }
      return output
    },
    validateNumber() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.number === '') {
        output.err = true;
      }
      return output
    },
    validateBlood() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.blood === '') {
        output.err = true;
      }
      return output
    },
    validateSoiling() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.soiling === '') {
        output.err = true;
      }
      return output
    },
    validateCancer() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.cancer === '') {
        output.err = true;
      }
      return output
    },
    validateCepod() {
     let output = {
        erm: '',
        err: false
      }
      if (this.risk.cepod === '') {
        output.err = true;
      }
      return output
    },
    showResult() {
      console.log(this.result)
      if (this.result) {
        return this.result
      }
      return { percentage: '', extra: '', ppossum: {
        morbidity: -1,
        mortality: -1,
      }}
    },
    go() {
      this.open = true;
      const nelacalc = new Calculators
      const calc = nelacalc.calcNELA(this.risk);
      const pp = nelacalc.ppcalc(this.risk);
      console.log({pp});
      if (!(calc)) {
        this.open = false;
        return;
      }
      const mortality = calc.mortality
      let exp = '';
      if (mortality < 5) {
        exp = '';
      } else {
        if (mortality < 10) {
          exp = "higher";
        } else {
          // greater than or equal to 10%
          exp = "high";
        }
      }
      this.result = {
        percentage: `${mortality}%`,
        extra: exp,
        ppossum: pp,
      };
    },
  }
});
</script>
<style>
/* Component-specific styles only */
</style>