<template>
  <ion-button @click="toggleDarkMode">
    <ion-icon :icon="darkMode ? moon : sunny" slot="icon-only"></ion-icon>
  </ion-button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { moon, sunny } from 'ionicons/icons';
import { useThemeStore } from '@/store/theme';

export default defineComponent({
  name: 'DarkModeToggle',
  components: {
    IonButton,
    IonIcon,
  },
  setup() {
    const themeStore = useThemeStore();
    
    const darkMode = computed(() => themeStore.isDark);
    
    const toggleDarkMode = () => {
      themeStore.toggleTheme();
    };

    return {
      darkMode,
      toggleDarkMode,
      moon,
      sunny,
    };
  },
});
</script> 