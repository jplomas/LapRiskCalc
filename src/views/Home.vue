<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">PoRC v1.9</ion-title>
        <ion-buttons slot="end">
          <dark-mode-toggle></dark-mode-toggle>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-content class="ion-padding"> -->
        
        <!-- <img src="/assets/imgs/surgery-1822458_1920.jpg"> -->
                <ion-item>
          <ion-text>
            <h2 center class="ion-text-center">Perioperative Risk Calculator</h2>
        <p v-if="passedAll">
          This app is for medical professionals. It is used to generate
          laparotomy mortality risk estimates using the NELA (Parsimonious and Legacy) and P-POSSUM risk
          prediction models.
        </p>
        </ion-text>
        </ion-item>
        <ion-grid>
          <ion-row align-items-center v-if="passedAll">
            <ion-col size="4" class="ion-text-center">
              <ion-img
                :src="require('@/assets/imgs/nela.svg')"
                @click="goNela()"
                style="width: 100%"
              ></ion-img>
              <br />
              <ion-button expand="block" size="default" @click="goNela()"
                >Parsimonious <br />NELA (2023)</ion-button
              >
            </ion-col>
            <ion-col size="4" class="ion-text-center">
              <ion-img
                :src="require('@/assets/imgs/nela-legacy.svg')"
                @click="goNelaLegacy()"
              />
              <br />
              <ion-button expand="block" size="default" @click="goNelaLegacy()"
                >Legacy NELA <br />
                (2020 update)</ion-button
              >
            </ion-col>
            <ion-col size="4" class="ion-text-center">
              <ion-img
                :src="require('@/assets/imgs/ppossum.svg')"
                @click="goPPossum()"
              />
              <br />
              <ion-button expand="block" size="default" @click="goPPossum()"
                >P-POSSUM <br />
                (1998)</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
        <p v-if="passedAll">&nbsp;</p>
        <div class="bar ion-text-wrap" v-if="passedAll">
          <h1>
            This is
            <strong
              ><ion-icon :icon="logoGithub"></ion-icon> open source</strong
            >
            software<br /><br />It uses the public NELA algorithm at
            data.nela.org.uk/riskcalculator
          </h1>
        </div>
        <div class="pass" v-if="passedAll">
          <h1>
            <ion-icon :icon="checkmarkCircle"></ion-icon> PASSED app self-check
            [{{ TestCasesRun }}/{{ TestCasesRun }}]
          </h1>
        </div>
        <div class="fail" v-if="!passedAll">
          <h1>
            <ion-icon :icon="closeCircle"></ion-icon> FAILED app self-check [{{
              PassedTests
            }}/{{ TestCasesRun }} tests passed]
          </h1>
        </div>
        <div v-if="!passedAll">
          <p>
            As the self check failed, calculation is disabled. Please report
            this error to jp@lomas.doctor
          </p>
        </div>
        <p style="text-align: center">&copy; 2025</p>
      </ion-content>
    <!-- </ion-content> -->
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonText,
  IonItem,
  IonIcon,
  IonRow,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonImg,
} from '@ionic/vue';
import { logoGithub, checkmarkCircle, closeCircle, moon, sunny } from 'ionicons/icons';
import { Calculators } from '../components/calc';
import { store } from '../store';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import '@/assets/shared.css';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonButton,
    IonText,
    IonItem,
    IonButtons,
    IonCol,
    IonIcon,
    IonRow,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonImg,
    DarkModeToggle,
  },
  setup() {
    console.log('Performing self test...');
    const darkMode = ref(localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches);

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      
      // Update the dark mode class on all required elements
      document.documentElement.classList.toggle('dark', darkMode.value);
      document.body.classList.toggle('dark', darkMode.value);
      
      // Store the preference
      localStorage.setItem('darkMode', darkMode.value.toString());
      
      // Force Ionic components to update their theme
      if (darkMode.value) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.style.setProperty('--ion-background-gradient-start', '#1e1e1e');
        document.body.style.setProperty('--ion-background-gradient-middle', '#2a2a2a');
        document.body.style.setProperty('--ion-background-gradient-end', '#333333');
        document.body.style.setProperty('--ion-background-color', '#121212');
        document.body.style.setProperty('--ion-text-color', '#ffffff');
        document.body.style.setProperty('--ion-tab-bar-background', '#1f1f1f');
        document.body.style.setProperty('--ion-toolbar-background', '#1f1f1f');
        document.body.style.setProperty('--ion-item-background', '#1e1e1e');
        document.body.style.setProperty('--ion-card-background', '#1e1e1e');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.style.setProperty('--ion-background-gradient-start', '#f8fafc');
        document.body.style.setProperty('--ion-background-gradient-middle', '#e2e8f0');
        document.body.style.setProperty('--ion-background-gradient-end', '#cbd5e1');
        document.body.style.setProperty('--ion-background-color', '#ffffff');
        document.body.style.setProperty('--ion-text-color', '#000000');
        document.body.style.setProperty('--ion-tab-bar-background', '#ffffff');
        document.body.style.setProperty('--ion-toolbar-background', '#ffffff');
        document.body.style.setProperty('--ion-item-background', '#ffffff');
        document.body.style.setProperty('--ion-card-background', '#ffffff');
      }
    };

    onMounted(() => {
      // Initialize dark mode based on stored preference or system preference
      const prefersDark = darkMode.value;
      
      // Set initial theme
      document.documentElement.classList.toggle('dark', prefersDark);
      document.body.classList.toggle('dark', prefersDark);
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      
      // Set initial CSS variables
      if (prefersDark) {
        document.body.style.setProperty('--ion-background-gradient-start', '#1e1e1e');
        document.body.style.setProperty('--ion-background-gradient-middle', '#2a2a2a');
        document.body.style.setProperty('--ion-background-gradient-end', '#333333');
        document.body.style.setProperty('--ion-background-color', '#121212');
        document.body.style.setProperty('--ion-text-color', '#ffffff');
        document.body.style.setProperty('--ion-tab-bar-background', '#1f1f1f');
        document.body.style.setProperty('--ion-toolbar-background', '#1f1f1f');
        document.body.style.setProperty('--ion-item-background', '#1e1e1e');
        document.body.style.setProperty('--ion-card-background', '#1e1e1e');
      } else {
        document.body.style.setProperty('--ion-background-gradient-start', '#f8fafc');
        document.body.style.setProperty('--ion-background-gradient-middle', '#e2e8f0');
        document.body.style.setProperty('--ion-background-gradient-end', '#cbd5e1');
        document.body.style.setProperty('--ion-background-color', '#ffffff');
        document.body.style.setProperty('--ion-text-color', '#000000');
        document.body.style.setProperty('--ion-tab-bar-background', '#ffffff');
        document.body.style.setProperty('--ion-toolbar-background', '#ffffff');
        document.body.style.setProperty('--ion-item-background', '#ffffff');
        document.body.style.setProperty('--ion-card-background', '#ffffff');
      }
    });

    const calcService = new Calculators();
    let TestCasesRun = 0,
      PassedTests = 0;
    const FloatSafeTest = function (a: any, b: any) {
      return a * 100 === b * 100;
    };
    // let ExpectedMorbidity = 0;
    // let ExpectedMortality = 0;
    let mortality: any = 0;
    // let morbidity = 0;

    const TestData = [
      {
        age: 55,
        asa: 5,
        albumin: 55,
        pulse: 55,
        bp: 55,
        urea: 5,
        wcc: 5.5,
        gcs: 15,
        cancer: 8,
        respiratory: 4,
        cepod: 3,
        soiling: 4,
        indHaemorrhage: false,
        indAbdominalWoundDehiscence: false,
        indAbdominalCompartmentSyndrome: false,
        indPlannedRelook: true,
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
      {
        age: 87,
        asa: 5,
        albumin: 31,
        pulse: 98,
        bp: 134,
        urea: 2.3,
        wcc: 11.3,
        gcs: 13,
        cancer: 2,
        respiratory: 8,
        cepod: 8,
        soiling: 1,
        indHaemorrhage: true,
        indAbdominalWoundDehiscence: true,
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
        indIatrogenicInjury: true,
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
      {
        age: 61,
        asa: 4,
        albumin: 17,
        pulse: 120,
        bp: 176,
        urea: 6.1,
        wcc: 11.2,
        gcs: 14,
        cancer: 4,
        respiratory: 2,
        cepod: 3,
        soiling: 4,
        indHaemorrhage: false,
        indAbdominalWoundDehiscence: false,
        indAbdominalCompartmentSyndrome: false,
        indPlannedRelook: false,
        indOther: false,
        indTenderSmallBowelObstruction: true,
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
        indPhlegmon: true,
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
      {
        age: 33,
        asa: 2,
        albumin: 29,
        pulse: 100,
        bp: 132,
        urea: 4.3,
        wcc: 21.3,
        gcs: 15,
        cancer: 1,
        respiratory: 1,
        cepod: 8,
        soiling: 2,
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
        indInternalHernia: true,
        indObstructingIncisionalHernia: false,
        indIntussusception: false,
        indPseudoObstruction: false,
        indForeignBody: false,
        indPhlegmon: false,
        indPneumoperitoneum: true,
        indSepsisOther: true,
        indIatrogenicInjury: false,
        indAnastomoticLeak: false,
        indPeritonitis: false,
        indPerforation: false,
        indAbdominalAbscess: false,
        indIntestinalFistula: false,
        indNecrosis: false,
        indIschaemia: false,
        indColitis: false,
        indAcidosis: true,
      },
      {
        age: 49,
        asa: 3,
        albumin: 18,
        pulse: 90,
        bp: 81,
        urea: 23.2,
        wcc: 13.6,
        gcs: 13,
        cancer: 8,
        respiratory: 1,
        cepod: 8,
        soiling: 8,
        indHaemorrhage: true,
        indAbdominalWoundDehiscence: false,
        indAbdominalCompartmentSyndrome: true,
        indPlannedRelook: false,
        indOther: false,
        indTenderSmallBowelObstruction: false,
        indNonTenderSmallBowelObstruction: false,
        indTenderLargeBowelObstruction: false,
        indNonTenderLargeBowelObstruction: false,
        indGastricOutletObstruction: false,
        indIncarceratedHernia: false,
        indHiatusHernia: false,
        indVolvulus: true,
        indInternalHernia: false,
        indObstructingIncisionalHernia: false,
        indIntussusception: false,
        indPseudoObstruction: false,
        indForeignBody: false,
        indPhlegmon: true,
        indPneumoperitoneum: false,
        indSepsisOther: true,
        indIatrogenicInjury: false,
        indAnastomoticLeak: false,
        indPeritonitis: true,
        indPerforation: false,
        indAbdominalAbscess: false,
        indIntestinalFistula: false,
        indNecrosis: true,
        indIschaemia: true,
        indColitis: false,
        indAcidosis: true,
      },
      {
        age: 67,
        asa: 2,
        albumin: 30,
        pulse: 98,
        bp: 132,
        urea: 5.3,
        wcc: 11.2,
        gcs: 15,
        cancer: 2,
        respiratory: 4,
        cepod: 3,
        soiling: 2,
        indHaemorrhage: false,
        indAbdominalWoundDehiscence: false,
        indAbdominalCompartmentSyndrome: false,
        indPlannedRelook: false,
        indOther: false,
        indTenderSmallBowelObstruction: false,
        indNonTenderSmallBowelObstruction: false,
        indTenderLargeBowelObstruction: true,
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
      {
        age: 39,
        asa: 2,
        albumin: 33,
        pulse: 69,
        bp: 164,
        urea: 2.9,
        wcc: 17.9,
        gcs: 15,
        cancer: 1,
        respiratory: 1,
        cepod: 8,
        soiling: 8,
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
        indForeignBody: true,
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
      {
        age: 77,
        asa: 2,
        albumin: 33,
        pulse: 69,
        bp: 164,
        urea: 2.9,
        wcc: 17.9,
        gcs: 15,
        cancer: 1,
        respiratory: 1,
        cepod: 8,
        soiling: 8,
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
        indForeignBody: true,
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
      {
        age: 77,
        asa: 2,
        albumin: 33,
        pulse: 69,
        bp: 164,
        urea: 2.9,
        wcc: 17.9,
        gcs: 15,
        cancer: 4,
        respiratory: 1,
        cepod: 8,
        soiling: 8,
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
        indForeignBody: true,
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
      {
        age: 77,
        asa: 3,
        albumin: 33,
        pulse: 69,
        bp: 164,
        urea: 2.9,
        wcc: 17.9,
        gcs: 15,
        cancer: 4,
        respiratory: 1,
        cepod: 8,
        soiling: 8,
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
        indForeignBody: true,
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
    ];
    const ExpectedResult = [
      22.73, 57.52, 37.62, 0.55, 69.13, 3.79, 0.26, 3.14, 5.1, 10.1,
    ];
    for (let i = 0; i < ExpectedResult.length; i++) {
      mortality = calcService.NelaV2(TestData[i])?.mortality;
      console.log(
        'Test case ' +
          (TestCasesRun + 1) +
          ' result: ' +
          mortality +
          ' - Expected: ' +
          ExpectedResult[i]
      );
      if (FloatSafeTest(mortality, ExpectedResult[i])) {
        PassedTests += 1;
      }
      TestCasesRun += 1;
    }

    // LEGACY NELA CALCULATOR TESTS
    let TestDataLegacy = null;
    let ExpectedResultLegacy = null;
    TestDataLegacy = JSON.parse(
      '{"asa":1,"gender":2,"creatinine":"132","age":"43","cardiac":4,"respiratory":4,"ecg":2,"bp":"125","pulse":"54","hb":"","wcc":8,"urea":2.4,"sodium":"143","potassium":4.1,"gcs":1,"severity":4,"number":1,"blood":1,"soiling":2,"cancer":2,"cepod":2}'
    );
    ExpectedResultLegacy = 0.7;
    mortality = calcService.calcNELA(TestDataLegacy)?.mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        ' - Expected: ' +
        ExpectedResultLegacy
    );
    if (FloatSafeTest(mortality, ExpectedResultLegacy)) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    TestDataLegacy = JSON.parse(
      '{"asa":8,"gender":1,"creatinine":"111","age":"67","cardiac":2,"respiratory":2,"ecg":4,"bp":"99","pulse":"117","hb":"","wcc":21.2,"urea":11.5,"sodium":"100","potassium":10,"gcs":4,"severity":8,"number":4,"blood":4,"soiling":1,"cancer":4,"cepod":8}'
    );
    ExpectedResultLegacy = 78.1;
    mortality = calcService.calcNELA(TestDataLegacy)?.mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        ' - Expected: ' +
        ExpectedResultLegacy
    );
    if (FloatSafeTest(mortality, ExpectedResultLegacy)) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    TestDataLegacy = JSON.parse(
      '{"asa":16,"gender":2,"creatinine":"1200","age":"105","cardiac":8,"respiratory":8,"ecg":4,"bp":"45","pulse":"200","hb":"","wcc":65,"urea":89,"sodium":"178","potassium":1.1,"gcs":4,"severity":8,"number":4,"blood":8,"soiling":8,"cancer":8,"cepod":8}'
    );
    ExpectedResultLegacy = 99.9;
    mortality = calcService.calcNELA(TestDataLegacy)?.mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        ' - Expected: ' +
        ExpectedResultLegacy
    );
    if (FloatSafeTest(mortality, ExpectedResultLegacy)) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    TestDataLegacy = JSON.parse(
      '{"asa":8,"gender":1,"creatinine":"128","age":"77","cardiac":4,"respiratory":4,"ecg":4,"bp":"102","pulse":"102","hb":"","wcc":5.4,"urea":7.8,"sodium":"139","potassium":5.1,"gcs":1,"severity":4,"number":1,"blood":2,"soiling":8,"cancer":2,"cepod":2}'
    );
    ExpectedResultLegacy = 37.5;
    mortality = calcService.calcNELA(TestDataLegacy)?.mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        ' - Expected: ' +
        ExpectedResultLegacy
    );
    if (FloatSafeTest(mortality, ExpectedResultLegacy)) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    TestDataLegacy = JSON.parse(
      '{"asa":4,"gender":2,"creatinine":"101","age":"58","cardiac":4,"respiratory":8,"ecg":1,"bp":"184","pulse":"88","hb":"","wcc":5.2,"urea":8.1,"sodium":"148","potassium":4,"gcs":1,"severity":4,"number":2,"blood":1,"soiling":1,"cancer":1,"cepod":2}'
    );
    ExpectedResultLegacy = 6.3;
    mortality = calcService.calcNELA(TestDataLegacy)?.mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        ' - Expected: ' +
        ExpectedResultLegacy
    );
    if (FloatSafeTest(mortality, ExpectedResultLegacy)) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    TestDataLegacy = JSON.parse(
      '{"age":"83","asa":2,"gender":2,"cardiac":1,"respiratory":2,"ecg":1,"bp":"182","pulse":"98","wcc":10.2,"urea":5.6,"creatinine":"111","sodium":"142","potassium":5.1,"gcs":2,"severity":4,"number":1,"blood":2,"soiling":4,"cancer":4,"cepod":8}'
    );
    ExpectedResultLegacy = 15.8;
    mortality = calcService.calcNELA(TestDataLegacy)?.mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        ' - Expected: ' +
        ExpectedResultLegacy
    );
    if (FloatSafeTest(mortality, ExpectedResultLegacy)) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    // P-POSSUM CALCULATOR TESTS
    TestDataLegacy = JSON.parse(
      '{"age":1,"cardiac":2,"respiratory":4,"ecg":8,"bp":1,"pulse":1,"hb":1,"wcc":2,"urea":1,"sodium":1,"potassium":1,"gcs":1,"severity":1,"number":4,"blood":2,"soiling":2,"cancer":2,"cepod":8}'
    );
    let ExpectedMorbidity = 82.3;
    let ExpectedMortality = 11.3;
    let morbidity = calcService.ppcalc(TestDataLegacy, true).morbidity;
    mortality = calcService.ppcalc(TestDataLegacy, true).mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        '/' +
        morbidity +
        ' - Expected: ' +
        ExpectedMortality +
        '/' +
        ExpectedMorbidity
    );
    if (
      FloatSafeTest(mortality, ExpectedMortality) &&
      FloatSafeTest(morbidity, ExpectedMorbidity)
    ) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    TestDataLegacy = JSON.parse(
      '{"age":4,"cardiac":8,"respiratory":8,"ecg":8,"bp":8,"pulse":8,"hb":8,"wcc":4,"urea":8,"sodium":8,"potassium":8,"gcs":8,"severity":8,"number":8,"blood":8,"soiling":8,"cancer":8,"cepod":8}'
    );
    ExpectedMorbidity = 100;
    ExpectedMortality = 100;
    morbidity = calcService.ppcalc(TestDataLegacy, true).morbidity;
    mortality = calcService.ppcalc(TestDataLegacy, true).mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        '/' +
        morbidity +
        ' - Expected: ' +
        ExpectedMortality +
        '/' +
        ExpectedMorbidity
    );
    if (
      FloatSafeTest(mortality, ExpectedMortality) &&
      FloatSafeTest(morbidity, ExpectedMorbidity)
    ) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    TestDataLegacy = JSON.parse(
      '{"age":2,"cardiac":8,"respiratory":1,"ecg":4,"bp":4,"pulse":4,"hb":2,"wcc":4,"urea":2,"sodium":1,"potassium":1,"gcs":4,"severity":4,"number":4,"blood":4,"soiling":4,"cancer":4,"cepod":4}'
    );
    ExpectedMorbidity = 99;
    ExpectedMortality = 71.4;
    morbidity = calcService.ppcalc(TestDataLegacy, true).morbidity;
    mortality = calcService.ppcalc(TestDataLegacy, true).mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        '/' +
        morbidity +
        ' - Expected: ' +
        ExpectedMortality +
        '/' +
        ExpectedMorbidity
    );
    if (
      FloatSafeTest(mortality, ExpectedMortality) &&
      FloatSafeTest(morbidity, ExpectedMorbidity)
    ) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    TestDataLegacy = JSON.parse(
      '{"age":2,"cardiac":4,"respiratory":2,"ecg":4,"bp":2,"pulse":2,"hb":4,"wcc":2,"urea":8,"sodium":4,"potassium":1,"gcs":4,"severity":1,"number":8,"blood":1,"soiling":1,"cancer":8,"cepod":8}'
    );
    ExpectedMorbidity = 99.6;
    ExpectedMortality = 84.8;
    morbidity = calcService.ppcalc(TestDataLegacy, true).morbidity;
    mortality = calcService.ppcalc(TestDataLegacy, true).mortality;
    console.log(
      'Test case ' +
        (TestCasesRun + 1) +
        ' result: ' +
        mortality +
        '/' +
        morbidity +
        ' - Expected: ' +
        ExpectedMortality +
        '/' +
        ExpectedMorbidity
    );
    if (
      FloatSafeTest(mortality, ExpectedMortality) &&
      FloatSafeTest(morbidity, ExpectedMorbidity)
    ) {
      PassedTests += 1;
    }
    TestCasesRun += 1;

    let passedAll = false;

    if (PassedTests === TestCasesRun) {
      store.pass = true;
      passedAll = true;
      // PASS
      // $scope.selftest = "<div class=\"bar bar-balanced\"><h1 class=\"title\">Check status: OK [" + PassedTests + "/" + TestCasesRun + "]</h1></div>";
      // $scope.selftestBOOL = false;
      console.log('self test = PASS');
      //  this.selfCheck = { status: 'PASS', PassedTests, TestCasesRun };
      //  calcService.selfCheck = true;
    } else {
      passedAll = false;

      // FAIL
      // $scope.selftest = "<div class=\"bar bar-assertive\"><h1 class=\"title\">Check status: FAIL [" + PassedTests + "/" + TestCasesRun + "]</h1></div>";
      // $scope.selftestBOOL = true;
      console.log('self test = FAIL');
      //  this.selfCheck = { status: 'FAIL', PassedTests, TestCasesRun };
    }
    return {
      logoGithub,
      checkmarkCircle,
      closeCircle,
      moon,
      sunny,
      darkMode,
      toggleDarkMode,
      passedAll,
      PassedTests,
      TestCasesRun,
      store,
    };
  },
  methods: {
    goNela() {
      this.$router.push('/tabs/nela');
    },
    goNelaLegacy() {
      this.$router.push('/tabs/legacy');
    },
    goPPossum() {
      this.$router.push('/tabs/p-possum');
    },
  },
});
</script>
<style scoped>
ion-button {
  /* reduce button text size on small screens */
  font-size: 10px;
  @media only screen and (min-width: 501px) {
    font-size: 14px;
  }
}
ion-content {
  --background: var(--ion-background-gradient-start);
  --background: -moz-linear-gradient(
    top,
    var(--ion-background-gradient-start) 0%,
    var(--ion-background-gradient-middle) 50%,
    var(--ion-background-gradient-end) 100%
  );
  --background: -webkit-linear-gradient(
    top,
    var(--ion-background-gradient-start) 0%,
    var(--ion-background-gradient-middle) 50%,
    var(--ion-background-gradient-end) 100%
  );
  --background: linear-gradient(
    to bottom,
    var(--ion-background-gradient-start) 0%,
    var(--ion-background-gradient-middle) 50%,
    var(--ion-background-gradient-end) 100%
  );
}
.transparent {
  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
}
.pass {
  border-color: var(--ion-color-success);
  background-color: var(--ion-color-success);
  background-image: linear-gradient(
    0deg,
    var(--ion-color-success-shade),
    var(--ion-color-success-shade) 50%,
    transparent 50%
  );
  color: var(--ion-color-success-contrast);
  top: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  right: 0;
  left: 0;
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  height: 44px;
  position: relative;
  border: none;
  background-position: bottom;
  background-size: 100% 1px;
  background-repeat: no-repeat;
}
.pass h1 {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  margin: 0 10px;
  min-width: 30px;
  height: 43px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 17px;
  font-weight: 500;
  line-height: 42px;
  margin-top: 2px !important;
}
.fail {
  border-color: var(--ion-color-danger);
  background-color: var(--ion-color-danger);
  background-image: linear-gradient(
    0deg,
    var(--ion-color-danger-shade),
    var(--ion-color-danger-shade) 50%,
    transparent 50%
  );
  color: var(--ion-color-danger-contrast);
  top: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  right: 0;
  left: 0;
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  height: 44px;
  position: relative;
  border: none;
  background-position: bottom;
  background-size: 100% 1px;
  background-repeat: no-repeat;
}
.fail h1 {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  margin: 0 10px;
  min-width: 30px;
  height: 43px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 17px;
  font-weight: 500;
  line-height: 42px;
  margin-top: 2px !important;
}
.bar {
  border-color: var(--ion-color-medium);
  background-color: var(--ion-color-medium);
  background-image: linear-gradient(
    0deg,
    var(--ion-color-medium-tint),
    var(--ion-color-medium) 50%,
    transparent 50%
  );
  color: var(--ion-color-medium-contrast);
  top: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  right: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  position: relative;
  border: none;
  background-position: bottom;
  background-size: 100% 1px;
  background-repeat: no-repeat;
  vertical-align: middle;
}
.bar h1 {
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  margin: 0 10px;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  margin-top: 2px !important;
  vertical-align: middle;
}
.bar .icon-inner {
  vertical-align: middle;
}
p,
h2 {
  color: var(--ion-text-color);
}
</style>
