<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" v-if="store.pass">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/nela">
          <ion-icon :icon="calculator" />
          <ion-label>Calculate</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/info">
          <ion-icon :icon="informationCircle" />
          <ion-label>Info</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { calculator, home, informationCircle } from 'ionicons/icons';
import { store } from '../store'

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      calculator, home, informationCircle
    }
  },
  data() {
    return {
      store
    }
  }
});
</script>
