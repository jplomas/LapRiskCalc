<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>NELA score</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">NELA score</ion-title>
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
          <ion-col text-center><ion-button :disabled="(checkParams())" type="button" @click="go()">
              Calculate
          </ion-button>
          <ion-button color="light" type="button" @click="reset()">
              Reset
          </ion-button></ion-col></ion-row>
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
            <ion-col>
              foo
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

export default defineComponent({
  name: 'NelaPage',
  components: { IonButtons, IonIcon, IonModal, IonText, IonRadioGroup, IonButton, IonInput, IonCardContent, IonCard, IonRadio, IonLabel, IonItem, IonRow, IonCol, IonList, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data: () => ({
    ready: false,
    open: false,
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
    reset() {
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
    go() {
      this.open = true;
      console.log(this.risk);
      console.log(this.calcNELA(this.risk));
    },
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
      return { mortality: mortality, error: { state: false, message: 'PASSED' } }
    }
  },
  NELADATACHECK(risk: any) {
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
  },
  ppcalc(risk: any) {
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
    return { morbidity, mortality}
  }
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
