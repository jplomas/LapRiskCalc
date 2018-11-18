import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NELAPage } from '../nela/nela';
import { PPOSSUMPage } from '../ppossum/ppossum';
import { Calculators } from '../../providers/calculators';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab2Root = NELAPage;
  tab3Root = PPOSSUMPage;

  constructor(public navCtrl: NavController, public calcService: Calculators) {}
  selfCheck = { status: 'in progress', PassedTests: 0, TestCasesRun: 0 };
  goNELA() { if (this.selfCheck.status === 'PASS') { this.navCtrl.parent.select(1);} }
  goPPOSSUM() { if (this.selfCheck.status === 'PASS') { this.navCtrl.parent.select(2); } }
  Check() { return this.selfCheck.status }
  didPass() { if (this.selfCheck.status === 'PASS') { return true } else { return false }}
  didFail() { if (this.selfCheck.status === 'PASS') { return false } else { return true }}
  ionViewDidLoad() {
       var TestCasesRun = 0, PassedTests = 0;
   var FloatSafeTest = function(a,b) {
        return (a*100) === (b*100)
   };
   let TestData = {};
   let ExpectedResult = 0;
   let ExpectedMorbidity = 0;
   let ExpectedMortality = 0;
   let mortality = 0;
   let morbidity = 0;

   // NELA CALCULATOR TESTS
   TestData = JSON.parse('{"asa":1,"gender":2,"creatinine":"132","age":"43","cardiac":4,"respiratory":4,"ecg":2,"bp":"125","pulse":"54","hb":"","wcc":8,"urea":2.4,"sodium":"143","potassium":4.1,"gcs":1,"severity":4,"number":1,"blood":1,"soiling":2,"cancer":2,"cepod":2}');
   ExpectedResult = 1.1;
   mortality = this.calcService.calcNELA(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"asa":8,"gender":1,"creatinine":"111","age":"67","cardiac":2,"respiratory":2,"ecg":4,"bp":"99","pulse":"117","hb":"","wcc":21.2,"urea":11.5,"sodium":"100","potassium":10,"gcs":4,"severity":8,"number":4,"blood":4,"soiling":1,"cancer":4,"cepod":8}');
   ExpectedResult = 78.0;
   mortality = this.calcService.calcNELA(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"asa":16,"gender":2,"creatinine":"1200","age":"105","cardiac":8,"respiratory":8,"ecg":4,"bp":"45","pulse":"200","hb":"","wcc":65,"urea":89,"sodium":"178","potassium":1.1,"gcs":4,"severity":8,"number":4,"blood":8,"soiling":8,"cancer":8,"cepod":8}');
   ExpectedResult = 99.8;
   mortality = this.calcService.calcNELA(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"asa":8,"gender":1,"creatinine":"128","age":"77","cardiac":4,"respiratory":4,"ecg":4,"bp":"102","pulse":"102","hb":"","wcc":5.4,"urea":7.8,"sodium":"139","potassium":5.1,"gcs":1,"severity":4,"number":1,"blood":2,"soiling":8,"cancer":2,"cepod":2}');
   ExpectedResult = 41.7;
   mortality = this.calcService.calcNELA(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"asa":4,"gender":2,"creatinine":"101","age":"58","cardiac":4,"respiratory":8,"ecg":1,"bp":"184","pulse":"88","hb":"","wcc":5.2,"urea":8.1,"sodium":"148","potassium":4,"gcs":1,"severity":4,"number":2,"blood":1,"soiling":1,"cancer":1,"cepod":2}');
   ExpectedResult = 6.2;
   mortality = this.calcService.calcNELA(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"age":"83","asa":2,"gender":2,"cardiac":1,"respiratory":2,"ecg":1,"bp":"182","pulse":"98","wcc":10.2,"urea":5.6,"creatinine":"111","sodium":"142","potassium":5.1,"gcs":2,"severity":4,"number":1,"blood":2,"soiling":4,"cancer":4,"cepod":8}');
   ExpectedResult = 25.5;
   mortality = this.calcService.calcNELA(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + ' - Expected: ' + ExpectedResult);
   if (FloatSafeTest(mortality,ExpectedResult)) { PassedTests+=1; }
   TestCasesRun +=1;

   // P-POSSUM CALCULATOR TESTS
   TestData = JSON.parse('{"age":1,"cardiac":2,"respiratory":4,"ecg":8,"bp":1,"pulse":1,"hb":1,"wcc":2,"urea":1,"sodium":1,"potassium":1,"gcs":1,"severity":1,"number":4,"blood":2,"soiling":2,"cancer":2,"cepod":8}');
   ExpectedMorbidity = 82.3;
   ExpectedMortality = 11.3;
   morbidity = this.calcService.ppcalc(TestData).morbidity;
   mortality = this.calcService.ppcalc(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + '/' + morbidity + ' - Expected: ' + ExpectedMortality + '/' + ExpectedMorbidity);
   if ((FloatSafeTest(mortality,ExpectedMortality)) && (FloatSafeTest(morbidity,ExpectedMorbidity))) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"age":4,"cardiac":8,"respiratory":8,"ecg":8,"bp":8,"pulse":8,"hb":8,"wcc":4,"urea":8,"sodium":8,"potassium":8,"gcs":8,"severity":8,"number":8,"blood":8,"soiling":8,"cancer":8,"cepod":8}');
   ExpectedMorbidity = 100;
   ExpectedMortality = 100;
   morbidity = this.calcService.ppcalc(TestData).morbidity;
   mortality = this.calcService.ppcalc(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + '/' + morbidity + ' - Expected: ' + ExpectedMortality + '/' + ExpectedMorbidity);
   if ((FloatSafeTest(mortality,ExpectedMortality)) && (FloatSafeTest(morbidity,ExpectedMorbidity))) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"age":2,"cardiac":8,"respiratory":1,"ecg":4,"bp":4,"pulse":4,"hb":2,"wcc":4,"urea":2,"sodium":1,"potassium":1,"gcs":4,"severity":4,"number":4,"blood":4,"soiling":4,"cancer":4,"cepod":4}');
   ExpectedMorbidity = 99;
   ExpectedMortality = 71.4;
   morbidity = this.calcService.ppcalc(TestData).morbidity;
   mortality = this.calcService.ppcalc(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + '/' + morbidity + ' - Expected: ' + ExpectedMortality + '/' + ExpectedMorbidity);
   if ((FloatSafeTest(mortality,ExpectedMortality)) && (FloatSafeTest(morbidity,ExpectedMorbidity))) { PassedTests+=1; }
   TestCasesRun +=1;

   TestData = JSON.parse('{"age":2,"cardiac":4,"respiratory":2,"ecg":4,"bp":2,"pulse":2,"hb":4,"wcc":2,"urea":8,"sodium":4,"potassium":1,"gcs":4,"severity":1,"number":8,"blood":1,"soiling":1,"cancer":8,"cepod":8}');
   ExpectedMorbidity = 99.6;
   ExpectedMortality = 84.8;
   morbidity = this.calcService.ppcalc(TestData).morbidity;
   mortality = this.calcService.ppcalc(TestData).mortality;
   console.log('Test case ' + (TestCasesRun+1) + ' result: ' + mortality + '/' + morbidity + ' - Expected: ' + ExpectedMortality + '/' + ExpectedMorbidity);
   if ((FloatSafeTest(mortality,ExpectedMortality)) && (FloatSafeTest(morbidity,ExpectedMorbidity))) { PassedTests+=1; }
   TestCasesRun +=1;

   if (PassedTests === TestCasesRun) {
       // PASS
       // $scope.selftest = "<div class=\"bar bar-balanced\"><h1 class=\"title\">Check status: OK [" + PassedTests + "/" + TestCasesRun + "]</h1></div>";
       // $scope.selftestBOOL = false;
       console.log('self test = PASS');
       this.selfCheck = { status: 'PASS', PassedTests, TestCasesRun };
       this.calcService.selfCheck = true;
   } else {
       // FAIL
       // $scope.selftest = "<div class=\"bar bar-assertive\"><h1 class=\"title\">Check status: FAIL [" + PassedTests + "/" + TestCasesRun + "]</h1></div>";
       // $scope.selftestBOOL = true;
       console.log('self test = FAIL');
       this.selfCheck = { status: 'FAIL', PassedTests, TestCasesRun };
   }


  }
}
