<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">PoRC v1.5</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" class="ion-text-center">PoRC v1.5</ion-title>
        </ion-toolbar>
      </ion-header>
    
<!-- <ion-header>
  <ion-navbar text-center>
    <ion-title>PoRC v1.0</ion-title>
  </ion-navbar>
</ion-header> -->
<ion-content class="ion-padding">
  <h2 center class="ion-text-center">Perioperative Risk Calculator</h2>
  <!-- <img src="/assets/imgs/surgery-1822458_1920.jpg"> -->
  <p v-if="passedAll">
    This app is for medical professionals.  It is used to generate morbidity and mortality risk estimates using the NELA and P-POSSUM risk prediction models.
  </p>
  <ion-row align-items-center v-if="passedAll">
    <ion-col class="ion-text-center">
      <img src="@/assets/imgs/combined.svg" @click="goNela()" style="max-width: 50%">
      <br />
      <ion-button size="default" @click="goNela()">NELA & P-POSSUM models</ion-button>
    </ion-col>
    <!-- <ion-col class="ion-text-center">
      <img src="@/assets/imgs/ppossum.svg" @click="goPPossum()" style="min-width: 100%">
      <ion-button size="default" @click="goPPossum()">P-POSSUM</ion-button></ion-col> -->
    </ion-row>
<p v-if="passedAll">&nbsp;</p>
<div class="bar ion-text-wrap" v-if="passedAll"><h1>This is <strong><ion-icon :icon="logoGithub"></ion-icon> open source</strong> software and uses a CE marked algorithm for risk prediction.</h1></div>
<div class="pass" v-if="passedAll"><h1><ion-icon :icon="checkmarkCircle"></ion-icon> PASSED app self-check [10/10]</h1></div>
<div class="fail" v-if="!passedAll"><h1><ion-icon :icon="closeCircle"></ion-icon> FAILED app self-check [{{ PassedTests }}/{{ TestCasesRun }} tests passed]</h1></div>
<div v-if="!passedAll"><p>As the self check failed, calculators are disabled.  Please report this error to jp@lomas.doctor</p></div>
<p style="text-align: center">&copy; 2022</p>
</ion-content>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonCol, IonIcon, IonRow, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { logoGithub, checkmarkCircle, closeCircle } from 'ionicons/icons';
import { Calculators } from '../components/calc';
import { store } from '../store'
export default  defineComponent({
  name: 'HomePage',
  components: { IonButton, IonCol, IonIcon, IonRow, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    console.log('Performing self test...');

const calcService = new Calculators();
var TestCasesRun = 0, PassedTests = 0;
   var FloatSafeTest = function(a: any, b:any) {
        return (a*100) === (b*100)
   };
   let TestData = {};
   let ExpectedResult = 0;
   let ExpectedMorbidity = 0;
   let ExpectedMortality = 0;
   let mortality: any = 0;
   let morbidity = 0;

   // NELA CALCULATOR TESTS
   TestData = JSON.parse('{"asa":1,"gender":2,"creatinine":"132","age":"43","cardiac":4,"respiratory":4,"ecg":2,"bp":"125","pulse":"54","hb":"","wcc":8,"urea":2.4,"sodium":"143","potassium":4.1,"gcs":1,"severity":4,"number":1,"blood":1,"soiling":2,"cancer":2,"cepod":2}');
   ExpectedResult = 0.7;
   mortality = calcService.calcNELA(TestData)?.mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"asa":8,"gender":1,"creatinine":"111","age":"67","cardiac":2,"respiratory":2,"ecg":4,"bp":"99","pulse":"117","hb":"","wcc":21.2,"urea":11.5,"sodium":"100","potassium":10,"gcs":4,"severity":8,"number":4,"blood":4,"soiling":1,"cancer":4,"cepod":8}');
   ExpectedResult = 78.3;
   mortality = calcService.calcNELA(TestData)?.mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"asa":16,"gender":2,"creatinine":"1200","age":"105","cardiac":8,"respiratory":8,"ecg":4,"bp":"45","pulse":"200","hb":"","wcc":65,"urea":89,"sodium":"178","potassium":1.1,"gcs":4,"severity":8,"number":4,"blood":8,"soiling":8,"cancer":8,"cepod":8}');
   ExpectedResult = 99.9;
   mortality = calcService.calcNELA(TestData)?.mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"asa":8,"gender":1,"creatinine":"128","age":"77","cardiac":4,"respiratory":4,"ecg":4,"bp":"102","pulse":"102","hb":"","wcc":5.4,"urea":7.8,"sodium":"139","potassium":5.1,"gcs":1,"severity":4,"number":1,"blood":2,"soiling":8,"cancer":2,"cepod":2}');
   ExpectedResult = 37.6;
   mortality = calcService.calcNELA(TestData)?.mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"asa":4,"gender":2,"creatinine":"101","age":"58","cardiac":4,"respiratory":8,"ecg":1,"bp":"184","pulse":"88","hb":"","wcc":5.2,"urea":8.1,"sodium":"148","potassium":4,"gcs":1,"severity":4,"number":2,"blood":1,"soiling":1,"cancer":1,"cepod":2}');
   ExpectedResult = 6.2;
   mortality = calcService.calcNELA(TestData)?.mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"age":"83","asa":2,"gender":2,"cardiac":1,"respiratory":2,"ecg":1,"bp":"182","pulse":"98","wcc":10.2,"urea":5.6,"creatinine":"111","sodium":"142","potassium":5.1,"gcs":2,"severity":4,"number":1,"blood":2,"soiling":4,"cancer":4,"cepod":8}');
   ExpectedResult = 15.6;
   mortality = calcService.calcNELA(TestData)?.mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   // P-POSSUM CALCULATOR TESTS
   TestData = JSON.parse('{"age":1,"cardiac":2,"respiratory":4,"ecg":8,"bp":1,"pulse":1,"hb":1,"wcc":2,"urea":1,"sodium":1,"potassium":1,"gcs":1,"severity":1,"number":4,"blood":2,"soiling":2,"cancer":2,"cepod":8}');
   ExpectedMorbidity = 82.3;
   ExpectedMortality = 11.3;
   morbidity = calcService.ppcalc(TestData, true).morbidity;
   mortality = calcService.ppcalc(TestData, true).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + '/' + morbidity + ' - Expected: ' + ExpectedMortality + '/' + ExpectedMorbidity);
   if ((FloatSafeTest(mortality,ExpectedMortality)) && (FloatSafeTest(morbidity,ExpectedMorbidity))) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"age":4,"cardiac":8,"respiratory":8,"ecg":8,"bp":8,"pulse":8,"hb":8,"wcc":4,"urea":8,"sodium":8,"potassium":8,"gcs":8,"severity":8,"number":8,"blood":8,"soiling":8,"cancer":8,"cepod":8}');
   ExpectedMorbidity = 100;
   ExpectedMortality = 100;
   morbidity = calcService.ppcalc(TestData, true).morbidity;
   mortality = calcService.ppcalc(TestData, true).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + '/' + morbidity + ' - Expected: ' + ExpectedMortality + '/' + ExpectedMorbidity);
   if ((FloatSafeTest(mortality,ExpectedMortality)) && (FloatSafeTest(morbidity,ExpectedMorbidity))) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"age":2,"cardiac":8,"respiratory":1,"ecg":4,"bp":4,"pulse":4,"hb":2,"wcc":4,"urea":2,"sodium":1,"potassium":1,"gcs":4,"severity":4,"number":4,"blood":4,"soiling":4,"cancer":4,"cepod":4}');
   ExpectedMorbidity = 99;
   ExpectedMortality = 71.4;
   morbidity = calcService.ppcalc(TestData, true).morbidity;
   mortality = calcService.ppcalc(TestData, true).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + '/' + morbidity + ' - Expected: ' + ExpectedMortality + '/' + ExpectedMorbidity);
   if ((FloatSafeTest(mortality,ExpectedMortality)) && (FloatSafeTest(morbidity,ExpectedMorbidity))) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"age":2,"cardiac":4,"respiratory":2,"ecg":4,"bp":2,"pulse":2,"hb":4,"wcc":2,"urea":8,"sodium":4,"potassium":1,"gcs":4,"severity":1,"number":8,"blood":1,"soiling":1,"cancer":8,"cepod":8}');
   ExpectedMorbidity = 99.6;
   ExpectedMortality = 84.8;
   morbidity = calcService.ppcalc(TestData, true).morbidity;
   mortality = calcService.ppcalc(TestData, true).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + '/' + morbidity + ' - Expected: ' + ExpectedMortality + '/' + ExpectedMorbidity);
   if ((FloatSafeTest(mortality,ExpectedMortality)) && (FloatSafeTest(morbidity,ExpectedMorbidity))) { PassedTests+=1; }
   TestCasesRun +=1;

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
      logoGithub, checkmarkCircle, closeCircle, passedAll, PassedTests, TestCasesRun, store
    }
  },
  methods: {
    goNela() {
      this.$router.push('/tabs/nela');
    },
    goPPossum() {
      this.$router.push('/tabs/p-possum');
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
.transparent {  border-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
 }
.pass {
      border-color: #28a54c;
    background-color: #33cd5f;
    background-image: linear-gradient(0deg, #28a54c, #28a54c 50%, transparent 50%);
    color: #fff;
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
  border-color: #e42112;
    background-color: #ef473a;
    background-image: linear-gradient(0deg, #e42112, #e42112 50%, transparent 50%);
    color: #fff;
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
  border-color: #919191;
    background-color: #8a8a8a;
    background-image: linear-gradient(0deg, #bcbcbc, #8a8a8a 50%, transparent 50%);
    color: #fff;
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
</style>