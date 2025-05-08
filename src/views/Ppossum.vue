<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center">P-POSSUM</ion-title>
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
  <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Age</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.age">
                    <ion-item @click="risk.age = '1'"><ion-label text-wrap>&le;60 years</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.age = '2'"><ion-label text-wrap>61-70 years</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.age = '4'"><ion-label text-wrap>&ge;71 years</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Cardiac</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.cardiac">
                    <ion-item @click="risk.cardiac = '1'"><ion-label text-wrap>No cardiac failure</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.cardiac = '2'"><ion-label text-wrap>Diuretic, digoxin, Rx for angina or hypertension</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.cardiac = '4'"><ion-label text-wrap>Peripheral oedema, warfarin or CXR: borderline cardiomegaly</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.cardiac = '8'"><ion-label text-wrap>Raised JVP or CXR: cardiomegaly</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Respiratory</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.respiratory">
                    <ion-item @click="risk.respiratory = '1'"><ion-label text-wrap>No dyspnoea</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.respiratory = '2'"><ion-label text-wrap>Dyspnoea on exertion or CXR: mild COPD</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.respiratory = '4'"><ion-label text-wrap>Limiting dyspnoea, or CXR: moderate COPD</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.respiratory = '8'"><ion-label text-wrap>Dyspnoea at rest or CXR: fibrosis/consolidation</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>ECG</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.ecg">
                    <ion-item @click="risk.ecg = '1'"><ion-label text-wrap>Normal</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.ecg = '4'"><ion-label text-wrap>AF, rate 60-90 bpm</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.ecg = '8'"><ion-label text-wrap>Any other abnormal rhythm, &ge;5/min ectopics, Q waves, ST/T changes</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Systolic BP</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.bp">
                    <ion-item @click="risk.bp = '1'"><ion-label text-wrap>110 - 130 mmHg</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.bp = '2'"><ion-label text-wrap>100 - 109 or 131 - 170 mmHg</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.bp = '4'"><ion-label text-wrap>&ge;171, or 90 - 99 mmHg</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.bp = '8'"><ion-label text-wrap>&le; 89 mmHg</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Pulse Rate</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.pulse">
                    <ion-item @click="risk.pulse = '1'"><ion-label text-wrap>50 - 80 bpm</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.pulse = '2'"><ion-label text-wrap>40 - 49 or 81 -100 bpm</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.pulse = '4'"><ion-label text-wrap>101 - 120 bpm</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.pulse = '8'"><ion-label text-wrap>&le;39 or &ge;121 bpm</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Haemoglobin (g.dL<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.hb">
                    <ion-item @click="risk.hb = '1'"><ion-label text-wrap>13 - 16</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.hb = '2'"><ion-label text-wrap>11.5 - 12.9 or 16.1 - 17</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.hb = '4'"><ion-label text-wrap>10 - 11.4 or 17.1 - 18</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.hb = '8'"><ion-label text-wrap>&le;9.9 or &ge;18.1</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>White blood cells (x10<sup>12</sup> litre<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.wcc">
                    <ion-item @click="risk.wcc = '1'"><ion-label text-wrap>4.1 - 10</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.wcc = '2'"><ion-label text-wrap>10.1 - 20 or 3.1 - 4.0</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.wcc = '4'"><ion-label text-wrap>&ge;20.1 or &le;3.0</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Urea (mmol.L<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.urea">
                    <ion-item @click="risk.urea = '1'"><ion-label text-wrap>&le;7.5</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.urea = '2'"><ion-label text-wrap>7.6 - 10</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.urea = '4'"><ion-label text-wrap>10.1 - 15</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.urea = '8'"><ion-label text-wrap>&ge;15.1</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Sodium (mmol.L<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.sodium">
                    <ion-item @click="risk.sodium = '1'"><ion-label text-wrap>&ge;136 mmol/l</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.sodium = '2'"><ion-label text-wrap>131 - 135 mmol/l</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.sodium = '4'"><ion-label text-wrap>126 - 130 mmol/l</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.sodium = '8'"><ion-label text-wrap>&le;125 mmol/l</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Potassium (mmol.L<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.potassium">
                    <ion-item @click="risk.potassium = '1'"><ion-label text-wrap>3.5 - 5 mmol/l</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.potassium = '2'"><ion-label text-wrap>3.2 - 3.4 or 5.1 - 5.3 mmol/l</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.potassium = '4'"><ion-label text-wrap>2.9 - 3.1 or 5.4 - 5.9 mmol/l</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.potassium = '8'"><ion-label text-wrap>&le;2.8 or &ge;6.0 mmol/l</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>GCS</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.gcs">
                    <ion-item @click="risk.gcs = '1'"><ion-label text-wrap>15</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.gcs = '2'"><ion-label text-wrap>12 - 14</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.gcs = '4'"><ion-label text-wrap>9 - 11</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.gcs = '8'"><ion-label text-wrap>&le;8</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Operation type</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.severity">
                    <ion-item @click="risk.severity = '1'"><ion-label text-wrap>Minor Operation</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.severity = '2'"><ion-label text-wrap>Moderate Operation</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.severity = '4'"><ion-label text-wrap>Major Operation</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.severity = '8'"><ion-label text-wrap>Complex Major Operation</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Number of procedures</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.number">
                    <ion-item @click="risk.number = '1'"><ion-label text-wrap>One</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.number = '4'"><ion-label text-wrap>Two</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.number = '8'"><ion-label text-wrap>Three or more</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Operative blood loss</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.blood">
                    <ion-item @click="risk.blood = '1'"><ion-label text-wrap>&le; 100 mls</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.blood = '2'"><ion-label text-wrap>101 - 500 mls</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.blood = '4'"><ion-label text-wrap>501-999 mls</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.blood = '8'"><ion-label text-wrap>&ge; 1000 mls</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Peritoneal contamination</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.soiling">
                    <ion-item @click="risk.soiling = '1'"><ion-label text-wrap>No soiling</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.soiling = '2'"><ion-label text-wrap>Minor (serous fluid)</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.soiling = '4'"><ion-label text-wrap>Local pus</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.soiling = '8'"><ion-label text-wrap>Free bowel content, pus or blood</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Malignancy status</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.cancer">
                    <ion-item @click="risk.cancer = '1'"><ion-label text-wrap>Not malignant</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.cancer = '2'"><ion-label text-wrap>Primary malignancy only</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.cancer = '4'"><ion-label text-wrap>Malignancy and nodal metastases</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.cancer = '8'"><ion-label text-wrap>Malignancy and distant metastases</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Urgency / CEPOD</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.cepod">
                    <ion-item @click="risk.cepod = '1'"><ion-label text-wrap>Elective</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.cepod = '4'"><ion-label text-wrap>Urgent (within 24 hours)</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item @click="risk.cepod = '8'"><ion-label text-wrap>Emergency (within 2 hrs)</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
          <ion-grid><ion-row text-center align-items-center>
          <ion-col text-center><ion-button :disabled="!(checkParams())" type="button" @click="go()">
              Calculate
          </ion-button>
          <ion-button color="light" type="button" @click="reset()">
              Reset
          </ion-button>
          <!-- <ion-button color="light" type="button" @click="mock()">
              Mock
          </ion-button> -->
          </ion-col></ion-row>
          <ion-item color="danger" v-if="!(checkParams())">
            Some data fields are missing or invalid
          </ion-item>
        </ion-grid>
        <ion-modal :is-open="open">
              <ion-content>
                <ion-header>
          <ion-toolbar>
            <ion-title>P-POSSUM</ion-title>
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
              <p>P-POSSUM Mortality Risk:</p>
              <!-- <h1>{{ showResult().percentage }}</h1> -->
              <br>
              <!-- <div class="ion-text-left" v-if="showResult().extra === 'higher'"> -->
              This patient is <strong>higher risk</strong> and should:
              <ul><li>have active input by a consultant surgeon and consultant anaesthetist</li></ul>
              <!-- </div> -->
              <!-- <div class="ion-text-left" v-if="showResult().extra === 'high'"> -->
              This patient is <strong>high risk</strong> and should: <ul><li>receive care under direct supervision of consultant surgeon and consultant anaesthetist</li><li>be admitted to HDU or ITU post-operatively</li></ul>
              <!-- </div> -->
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
import { IonBackButton, IonButtons, IonIcon, IonModal, IonText, IonRadioGroup, IonButton, IonCardContent, IonCard, IonRadio, IonLabel, IonItem, IonRow, IonCol, IonList, IonGrid, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { Calculators } from '../components/calc';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

export default defineComponent({
  name: 'Tab4Page',
  components: { IonBackButton, IonButtons, IonIcon, IonModal, IonText, IonRadioGroup, IonButton, IonCardContent, IonCard, IonRadio, IonLabel, IonItem, IonRow, IonCol, IonList, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, DarkModeToggle },
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
        hb: '',
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
          hb: '',
          bp: '',
          pulse: '',
          urea: '',
          creatinine: '',
          sodium: '',
          potassium: '',
          wcc: '',
        }
      },
      mock() {
        this.risk = {
          age: '2',
          cepod: '4',
          soiling: '2',
          cancer: '2',
          blood: '2',
          number: '4',
          severity: '2',
          gcs: '2',
          asa: '2',
          gender: '2',
          cardiac: '2',
          respiratory: '2',
          ecg: '1',
          hb: '2',
          bp: '2',
          pulse: '2',
          urea: '2',
          creatinine: '2',
          sodium: '2',
          potassium: '2',
          wcc: '2',
        }
      },
      checkParams() {
        if (!this.risk.wcc) {
          return false
        }
        if (!this.risk.potassium) {
          return false
        }
        if (!this.risk.sodium) {
          return false
        }
        // if (!this.risk.creatinine) {
        //   return false
        // }
        if (!this.risk.urea) {
          return false
        }
        if (!this.risk.pulse) {
          return false
        }
        if (!this.risk.bp) {
          return false
        }
        if (!this.risk.hb) {
          return false
        }
        if (!this.risk.ecg) {
          return false
        }
        if (!this.risk.respiratory) {
          return false
        }
        if (!this.risk.cardiac) {
          return false
        }
        if (!this.risk.age) {
          return false
        }
        if (!this.risk.gcs) {
          return false
        }
        if (!this.risk.number) {
          return false
        }
        if (!this.risk.severity) {
          return false
        }
        if (!this.risk.cepod) {
          return false
        }
        if (!this.risk.soiling) {
          return false
        }
        if (!this.risk.cancer) {
          return false
        }
        return true
      },
      go() {
        const nelacalc = new Calculators();
        // const calc = nelacalc.calcNELA(this.risk);
        const pp = nelacalc.ppcalcOld(this.risk);
        console.log({ pp });
      }
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
h1, p {
  color: var(--ion-text-color);
}
</style>