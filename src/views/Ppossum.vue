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
                <ion-list radio-group>
                <ion-radio-group v-model="risk.cardiac">
                    <ion-item><ion-label text-wrap>No cardiac failure</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Diuretic, digoxin, Rx for angina or hypertension</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Peripheral oedema, warfarin or CXR: borderline cardiomegaly</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Raised JVP or CXR: cardiomegaly</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Respiratory</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.respiratory">
                    <ion-item><ion-label text-wrap>No dyspnoea</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Dyspnoea on exertion or CXR: mild COPD</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Limiting dyspnoea, or CXR: moderate COPD</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Dyspnoea at rest or CXR: fibrosis/consolidation</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>ECG</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.ecg">
                    <ion-item><ion-label text-wrap>Normal</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>AF, rate 60-90 bpm</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Any other abnormal rhythm, &ge;5/min ectopics, Q waves, ST/T changes</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Systolic BP</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.bp">
                    <ion-item><ion-label text-wrap>110 - 130 mmHg</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>100 - 109 or 131 - 170 mmHg</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>&ge;171, or 90 - 99 mmHg</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>&le; 89 mmHg</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Pulse Rate</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.pulse">
                    <ion-item><ion-label text-wrap>50 - 80 bpm</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>40 - 49 or 81 -100 bpm</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>101 - 120 bpm</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>&le;39 or &ge;121 bpm</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Haemoglobin (g.dL<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.hb">
                    <ion-item><ion-label text-wrap>13 - 16</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>11.5 - 12.9 or 16.1 - 17</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>10 - 11.4 or 17.1 - 18</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>&le;9.9 or &ge;18.1</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>White blood cells (x10<sup>12</sup> litre<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.wcc">
                    <ion-item><ion-label text-wrap>4.1 - 10</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>10.1 - 20 or 3.1 - 4.0</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>&ge;20.1 or &le;3.0</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Urea (mmol.L<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.urea">
                    <ion-item><ion-label text-wrap>&le;7.5</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>7.6 - 10</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>10.1 - 15</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>&ge;15.1</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Sodium (mmol.L<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.sodium">
                <ion-item><ion-label text-wrap>&ge;136 mmol/l</ion-label><ion-radio value=1></ion-radio></ion-item>
                <ion-item><ion-label text-wrap>131 - 135 mmol/l</ion-label><ion-radio value=2></ion-radio></ion-item>
                <ion-item><ion-label text-wrap>126 - 130 mmol/l</ion-label><ion-radio value=4></ion-radio></ion-item>
                <ion-item><ion-label text-wrap>&le;125 mmol/l</ion-label><ion-radio value=8></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Potassium (mmol.L<sup>-1</sup>)</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.potassium">
                <ion-item><ion-label text-wrap>3.5 - 5 mmol/l</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                <ion-item><ion-label text-wrap>3.2 - 3.4 or 5.1 - 5.3 mmol/l</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                <ion-item><ion-label text-wrap>2.9 - 3.1 or 5.4 - 5.9 mmol/l</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                <ion-item><ion-label text-wrap>&le;2.8 or &ge;6.0 mmol/l</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>GCS</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.gcs">
                <ion-item><ion-label text-wrap>15</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                <ion-item><ion-label text-wrap>12 - 14</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                <ion-item><ion-label text-wrap>9 - 11</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                <ion-item><ion-label text-wrap>&le;8</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Operation type</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.severity">
                    <ion-item><ion-label text-wrap>Minor Operation</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Moderate Operation</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Major Operation</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Complex Major Operation</ion-label><ion-radio value="8" slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Number of procedures</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.number">
                    <ion-item><ion-label text-wrap>One</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Two</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Three or more</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Operative blood loss</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.blood">
                    <ion-item><ion-label text-wrap>&le; 100 mls</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>101 - 500 mls</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>501-999 mls</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>&ge; 1000 mls</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Peritoneal contamination</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.soiling">
                    <ion-item><ion-label text-wrap>No soiling</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Minor (serous fluid)</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Local pus</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Free bowel content, pus or blood</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Malignancy status</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.cancer">
                    <ion-item><ion-label text-wrap>Not malignant</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Primary malignancy only</ion-label><ion-radio value=2 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Malignancy and nodal metastases</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Malignancy and distant metastases</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
                </ion-radio-group>
                </ion-list>
</ion-card-content></ion-card>
        <ion-card><ion-card-content>
            <div class="item item-divider item-text-wrap"><strong>Urgency / CEPOD</strong></div>
                <ion-list radio-group>
                <ion-radio-group v-model="risk.cepod">
                    <ion-item><ion-label text-wrap>Elective</ion-label><ion-radio value=1 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Urgent (within 24 hours)</ion-label><ion-radio value=4 slot="start"></ion-radio></ion-item>
                    <ion-item><ion-label text-wrap>Emergency (within 2 hrs)</ion-label><ion-radio value=8 slot="start"></ion-radio></ion-item>
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
