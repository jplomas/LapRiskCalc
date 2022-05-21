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
  <p>
    This app is for medical professionals.  It is used to generate morbidity and mortality risk estimates using the NELA and P-POSSUM risk prediction models.
  </p>
  <ion-row align-items-center>
    <ion-col class="ion-text-center">
      <img src="@/assets/imgs/nela.svg" style="min-width: 100%">
      <ion-button @click="goNela()">NELA model</ion-button>
    </ion-col>
    <ion-col class="ion-text-center">
      <img src="@/assets/imgs/ppossum.svg" style="min-width: 100%">
      <ion-button @click="goPPossum()">P-POSSUM</ion-button></ion-col></ion-row>
<ion-item no-lines class="transparent ion-text-wrap"><ion-icon :icon="logoGithub" slot="start"></ion-icon>This is <strong>open source</strong> software and uses a CE marked algorithm for risk prediction.</ion-item>
<div class="pass"><h1><ion-icon :icon="checkmarkCircle"></ion-icon> PASSED app self-check [10/10]</h1></div>
<div class="fail"><h1><ion-icon :icon="closeCircle"></ion-icon> FAILED app self-check [TODO / TODO]</h1></div>
<div><p>As the self check failed, calculators are disabled.  Please report this error to jp@lomas.doctor</p></div>
<p style="text-align: center">&copy; 2022</p>
</ion-content>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonCol, IonItem, IonIcon, IonRow, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { logoGithub, checkmarkCircle, closeCircle } from 'ionicons/icons';


export default  defineComponent({
  name: 'HomePage',
  components: { IonButton, IonCol, IonItem, IonIcon, IonRow, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      logoGithub, checkmarkCircle, closeCircle,
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
    line-height: 44px;
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
    line-height: 44px;
    margin-top: 2px !important;
}
</style>