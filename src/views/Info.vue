<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center">Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
  <ion-card>
     <ion-card-header>
       <ion-avatar item-start>
         <img src="@/assets/imgs/jp.png">
       </ion-avatar>
       <ion-card-subtitle>Author</ion-card-subtitle>
       <ion-card-title>Dr JP Lomas</ion-card-title>

    
    
</ion-card-header>
<ion-card-content>
Consultant in Anaesthesia & Intensive Care Medicine and Open Source Developer
  <p style="text-align: center;"><br></p>
<p>This is open source software and is made with <ion-icon :icon="heart"></ion-icon> in Greater Manchester, UK.<br></p>
  <ion-list>
    <ion-item>
      <ion-icon :icon="logoTwitter" item-start></ion-icon>
      <a href="https://twitter.com/jplomas">@jplomas</a>
    </ion-item>
    <ion-item>
      <ion-icon :icon="globe" item-start></ion-icon>
      <a href="https://lomas.doctor">https://lomas.doctor</a>
    </ion-item>
    <ion-item>
      <ion-icon :icon="logoGithub" item-start></ion-icon>
      <a href="https://github.com/jplomas">github.com/jplomas</a>
    </ion-item>
  </ion-list>
</ion-card-content>
</ion-card>
  <ion-card>
  <ion-card-header><strong>Disclaimer</strong></ion-card-header>
  <ion-card-content><p>This risk calculator provides an estimate of the risk of mortality within 30 days of emergency abdominal surgery utilising published repository data. The NELA risk prediction model has been shown to be more accurate than the P-POSSUM model for patients undergoing emergency laparotomy.<br><br>This tool should not be used in isolation but as part of the overall clinical decision making process to aid multidisciplinary planning and discussions with the patient and their family.<br><br><b>The author is not responsible for decisions made by health care professionals and patients which are made based on the estimations provided by herein.</b></p></ion-card-content>
  </ion-card>
  <ion-card>
  <ion-card-header><strong>License</strong></ion-card-header>
  <ion-card-content><p>
    Copyright &copy; JP Lomas 2023
<br /><br />
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
<br /><br />
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
<br /><br />
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
  </ion-card-content>
  </ion-card>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonBackButton, IonCardTitle, IonCardSubtitle, IonItem, IonCard, IonCardHeader, IonCardContent, IonList, IonIcon, IonAvatar, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { logoTwitter, logoGithub, globe, heart } from 'ionicons/icons';

export default defineComponent({
  name: 'Tab3Page',
  components: { IonButtons, IonBackButton, IonCardTitle, IonCardSubtitle, IonItem, IonCard, IonCardHeader, IonCardContent, IonList, IonIcon, IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      logoTwitter, logoGithub, globe, heart
    };
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
