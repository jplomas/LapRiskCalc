<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">NELA</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="ion-text-center" size="large">NELA</ion-title>
        </ion-toolbar>
      </ion-header>
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
              <ion-item><ion-label text-wrap>1: No systemic disease</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>2: Mild systemic disease</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>3: Severe systemic disease, not life-threatening</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>4: Severe, life-threatening systemic disease</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>5: Moribund</ion-label><ion-radio value="16" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label text-wrap>Female</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Male</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label text-wrap>No cardiac failure</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Diuretic, digoxin, Rx for angina or hypertension</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Peripheral oedema, warfarin therapy or CXR: borderline cardiomegaly</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Raised JVP, cardiomegaly</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label text-wrap>No dyspnoea</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Dyspnoea on exertion or CXR: mild COPD</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Dyspnoea limiting exertion to &lt;1 flight or CXR: moderate COPD</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>Dyspnoea at rest/rate &gt;30 at rest or CXR: fibrosis or consolidation</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label text-wrap>Normal</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>AF, rate 60-90</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label text-wrap>AF rate >90 or any other abnormal rhythm/paced rhythm or &gt;5VE/min or Q, ST or T wave abnormalities</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label>13 - 15</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>9 - 12</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>3 - 8</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label>Major Operation</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Complex Major Operation</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label>One</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Two</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Three or more</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label>&le; 100 mls</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>101 - 500 mls</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>501-999 mls</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>&ge; 1000 mls</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label>No soiling</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Serous fluid</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Local pus</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Free bowel content, pus or blood</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label>Not malignant</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Primary malignancy only</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Malignancy and nodal metastases</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>Malignancy and distant metastases</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
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
              <ion-item><ion-label>3: Expedited (&gt;18 hours)</ion-label><ion-radio value="1" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>2B. Urgent (6-18 hours)</ion-label><ion-radio value="2" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>2A. Urgent (2-6 hours)</ion-label><ion-radio value="4" slot="start"></ion-radio></ion-item>
              <ion-item><ion-label>1. Immediate (&lt;2 hours)</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
            </ion-radio-group>
          </ion-list>
      </div>
  </ion-card-content></ion-card>
          <ion-grid><ion-row text-center align-items-center>
          <ion-col text-center><ion-button :disabled="!(checkParams())" type="button" @click="go()">
              Calculate
          </ion-button>
          <ion-button color="light" type="button" @click="reset()">
              Reset
          </ion-button>
          <ion-button color="light" type="button" @click="mock()">
              Mock
          </ion-button>
          </ion-col></ion-row>
          <ion-item color="danger" v-if="!(checkParams())">
            Some data fields are missing or invalid
          </ion-item>
        </ion-grid>
        <ion-modal :is-open="open">
              <ion-content>
                <ion-header>
          <ion-toolbar>
            <ion-title>NELA</ion-title>
            <ion-buttons slot="end">
              <ion-icon size="large" :icon="close" @click="open = false"></ion-icon>
              &nbsp;
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-grid>
          <ion-row>
            <ion-col class="ion-text-center">
              <p>NELA Mortality Risk:</p>
              <h1>{{ showResult().percentage }}</h1>
              <br>
              <div class="ion-text-left" v-if="showResult().extra === 'higher'">
              This patient is <strong>higher risk</strong> and should:
              <ul><li>have active input by a consultant surgeon and consultant anaesthetist</li></ul>
              </div>
              <div class="ion-text-left" v-if="showResult().extra === 'high'">
              This patient is <strong>high risk</strong> and should: <ul><li>receive care under direct supervision of consultant surgeon and consultant anaesthetist</li><li>be admitted to HDU or ITU post-operatively</li></ul>
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
import { defineComponent, ref } from 'vue';
import { IonButtons, IonIcon, IonModal, IonText, IonRadioGroup, IonButton, IonInput, IonCardContent, IonCard, IonRadio, IonLabel, IonItem, IonRow, IonCol, IonList, IonGrid, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { Calculators } from '../components/calc';
export default defineComponent({
  name: 'NelaPage',
  components: { IonButtons, IonIcon, IonModal, IonText, IonRadioGroup, IonButton, IonInput, IonCardContent, IonCard, IonRadio, IonLabel, IonItem, IonRow, IonCol, IonList, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data: () => ({
    ready: false,
    open: false,
    result: {
      percentage: '',
      extra: '',
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
      pulse: '',
      urea: '',
      creatinine: '',
      sodium: '',
      potassium: '',
      wcc: '',
    }
  }),
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    return {
      close,
      setOpen
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
        extra: ''
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
      let output = {
        erm: '',
        err: false
      }
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
      let output = {
        erm: '',
        err: false
      }
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
      let output = {
        erm: '',
        err: false
      }
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
      let output = {
        erm: '',
        err: false
      }
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
      let output = {
        erm: '',
        err: false
      }
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
      let output = {
        erm: '',
        err: false
      }
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
      let output = {
        erm: '',
        err: false
      }
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
      let output = {
        erm: '',
        err: false
      }
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
      return { percentage: '', extra: ''}
    },
    go() {
      this.open = true;
      const nelacalc = new Calculators
      const calc = nelacalc.calcNELA(this.risk);
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
        extra: exp
      };
    },
  }
});
</script>
<style scoped>
ion-content {
  --background: #f0f9ff; /* Old browsers */
  --background: -moz-linear-gradient(top, #f0f9ff 0%, #cbebff 47%, #a1dbff 100%); /* FF3.6-15 */
  --background: -webkit-linear-gradient(top, #f0f9ff 0%,#cbebff 47%,#a1dbff 100%); /* Chrome10-25,Safari5.1-6 */
  --background: linear-gradient(to bottom, #f0f9ff 0%,#cbebff 47%,#a1dbff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  --filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0f9ff', endColorstr='#a1dbff',GradientType=0 ); /* IE6-9 */
}
</style>
