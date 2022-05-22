<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">P-POSSUM</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="ion-text-center" size="large">P-POSSUM</ion-title>
        </ion-toolbar>
      </ion-header>
        <ion-item>
          <ion-text>
                  <br />Select the appropriate option from each category then click the calculate button.<br><br>
          </ion-text>
        </ion-item>
<ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Age</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.age">
                    <ion-item><ion-label text-wrap>&le;60 years</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>61-70 years</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>&ge;71 years</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Cardiac</strong></div>
                <ion-list radio-group v-model="risk.cardiac">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>No cardiac failure</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>Diuretic, digoxin, Rx for angina or hypertension</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>Peripheral oedema, warfarin or CXR: borderline cardiomegaly</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>Raised JVP or CXR: cardiomegaly</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Respiratory</strong></div>
                <ion-list radio-group v-model="risk.respiratory">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>No dyspnoea</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>Dyspnoea on exertion or CXR: mild COPD</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>Limiting dyspnoea, or CXR: moderate COPD</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>Dyspnoea at rest or CXR: fibrosis/consolidation</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>ECG</strong></div>
                <ion-list radio-group v-model="risk.ecg">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>Normal</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>AF, rate 60-90 bpm</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>Any other abnormal rhythm, &ge;5/min
                      ectopics, Q waves, ST/T changes</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Systolic BP</strong></div>
                <ion-list radio-group v-model="risk.bp">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>110 - 130 mmHg</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>100 - 109 or 131 - 170 mmHg</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>&ge;171, or 90 - 99 mmHg</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>&le; 89 mmHg</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Pulse Rate</strong></div>
                <ion-list radio-group v-model="risk.pulse">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>50 - 80 bpm</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>40 - 49 or 81 -100 bpm</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>101 - 120 bpm</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>&le;39 or &ge;121 bpm</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Haemoglobin (g.dL<sup>-1</sup>)</strong></div>
                <ion-list radio-group v-model="risk.hb">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>13 - 16</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>11.5 - 12.9 or 16.1 - 17</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>10 - 11.4 or 17.1 - 18</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>&le;9.9 or &ge;18.1</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>White blood cells (x10<sup>12</sup> litre<sup>-1</sup>)</strong></div>
                <ion-list radio-group v-model="risk.wcc">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>4.1 - 10</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>10.1 - 20 or 3.1 - 4.0</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>&ge;20.1 or &le;3.0</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Urea (mmol.L<sup>-1</sup>)</strong></div>
                <ion-list radio-group v-model="risk.urea">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>&le;7.5</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>7.6 - 10</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>10.1 - 15</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>&ge;15.1</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Sodium (mmol.L<sup>-1</sup>)</strong></div>
                <ion-list radio-group v-model="risk.sodium">
                <ion-radio-group>
                <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>&ge;136 mmol/l</ion-label></ion-item>
                <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>131 - 135 mmol/l</ion-label></ion-item>
                <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>126 - 130 mmol/l</ion-label></ion-item>
                <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>&le;125 mmol/l</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Potassium (mmol.L<sup>-1</sup>)</strong></div>
                <ion-list radio-group v-model="risk.potassium">
                <ion-radio-group>
                <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>3.5 - 5 mmol/l</ion-label></ion-item>
                <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>3.2 - 3.4 or 5.1 - 5.3 mmol/l</ion-label></ion-item>
                <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>2.9 - 3.1 or 5.4 - 5.9 mmol/l</ion-label></ion-item>
                <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>&le;2.8 or &ge;6.0 mmol/l</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>GCS</strong></div>
                <ion-list radio-group v-model="risk.gcs">
                <ion-radio-group>
                <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>15</ion-label></ion-item>
                <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>12 - 14</ion-label></ion-item>
                <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>9 - 11</ion-label></ion-item>
                <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>&le;8</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Operation type</strong></div>
                <ion-list radio-group v-model="risk.severity">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>Minor Operation</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>Moderate Operation</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>Major Operation</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>Complex Major Operation</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Number of procedures</strong></div>
                <ion-list radio-group v-model="risk.number">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>One</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>Two</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>Three or more</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Operative blood loss</strong></div>
                <ion-list radio-group v-model="risk.blood">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>&le; 100 mls</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>101 - 500 mls</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>501-999 mls</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>&ge; 1000 mls</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Peritoneal contamination</strong></div>
                <ion-list radio-group v-model="risk.soiling">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>No soiling</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>Minor (serous fluid)</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>Local pus</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>Free bowel content, pus or blood</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Malignancy status</strong></div>
                <ion-list radio-group v-model="risk.cancer">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>Not malignant</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=2></ion-radio><ion-label>Primary malignancy only</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>Malignancy and nodal metastases</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>Malignancy and distant metastases</ion-label></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Urgency / CEPOD</strong></div>
                <ion-list radio-group v-model="risk.cepod">
                <ion-radio-group>
                    <ion-item text-wrap><ion-radio value=1></ion-radio><ion-label>Elective</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=4></ion-radio><ion-label>Urgent (within 24 hours)</ion-label></ion-item>
                    <ion-item text-wrap><ion-radio value=8></ion-radio><ion-label>Emergency (within 2 hrs)</ion-label></ion-item>
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
import { IonButtons, IonIcon, IonModal, IonText, IonRadioGroup, IonButton, IonCardContent, IonCard, IonRadio, IonLabel, IonItem, IonRow, IonCol, IonList, IonGrid, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { Calculators } from '../components/calc';

export default defineComponent({
  name: 'Tab3Page',
  components: { IonButtons, IonIcon, IonModal, IonText, IonRadioGroup, IonButton, IonCardContent, IonCard, IonRadio, IonLabel, IonItem, IonRow, IonCol, IonList, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
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
        // to do
      },
      checkParams() {
        // todo
      },
    },
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
