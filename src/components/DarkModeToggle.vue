<template>
  <ion-button @click="toggleDarkMode">
    <ion-icon :icon="darkMode ? moon : sunny" slot="icon-only"></ion-icon>
  </ion-button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { moon, sunny } from 'ionicons/icons';

export default defineComponent({
  name: 'DarkModeToggle',
  components: {
    IonButton,
    IonIcon,
  },
  setup() {
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
        document.body.style.setProperty('--ion-scrollbar-color', 'var(--ion-color-medium)');
        document.body.style.setProperty('--ion-scrollbar-background', 'transparent');
        document.body.style.setProperty('--ion-radio-background', '#1e1e1e');
        document.body.style.setProperty('--ion-radio-color', '#ffffff');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.style.setProperty('--ion-background-gradient-start', '#f8fafc');
        document.body.style.setProperty('--ion-background-gradient-middle', '#e2e8f0');
        document.body.style.setProperty('--ion-background-gradient-end', '#cbd5e1');
        document.body.style.setProperty('--ion-background-color', '#ffffff');
        document.body.style.setProperty('--ion-text-color', '#000000');
        document.body.style.setProperty('--ion-tab-bar-background', '#f7f7f7');
        document.body.style.setProperty('--ion-toolbar-background', '#f7f7f7');
        document.body.style.setProperty('--ion-item-background', '#ffffff');
        document.body.style.setProperty('--ion-card-background', '#ffffff');
        document.body.style.setProperty('--ion-scrollbar-color', 'var(--ion-color-medium)');
        document.body.style.setProperty('--ion-scrollbar-background', 'transparent');
        document.body.style.setProperty('--ion-radio-background', '#ffffff');
        document.body.style.setProperty('--ion-radio-color', '#000000');
      }
    };

    onMounted(() => {
      // Initialize theme on component mount
      if (darkMode.value) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        document.body.style.setProperty('--ion-background-gradient-start', '#1e1e1e');
        document.body.style.setProperty('--ion-background-gradient-middle', '#2a2a2a');
        document.body.style.setProperty('--ion-background-gradient-end', '#333333');
        document.body.style.setProperty('--ion-background-color', '#121212');
        document.body.style.setProperty('--ion-text-color', '#ffffff');
        document.body.style.setProperty('--ion-tab-bar-background', '#1f1f1f');
        document.body.style.setProperty('--ion-toolbar-background', '#1f1f1f');
        document.body.style.setProperty('--ion-item-background', '#1e1e1e');
        document.body.style.setProperty('--ion-card-background', '#1e1e1e');
        document.body.style.setProperty('--ion-scrollbar-color', 'var(--ion-color-medium)');
        document.body.style.setProperty('--ion-scrollbar-background', 'transparent');
        document.body.style.setProperty('--ion-radio-background', '#1e1e1e');
        document.body.style.setProperty('--ion-radio-color', '#ffffff');
      }
    });

    return {
      darkMode,
      toggleDarkMode,
      moon,
      sunny,
    };
  },
});
</script> 