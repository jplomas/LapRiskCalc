<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watch } from 'vue';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useThemeStore } from '@/store/theme';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const themeStore = useThemeStore();
    const route = useRoute();

    onBeforeMount(() => {
      themeStore.initTheme();
    });

    // Watch for route changes and reapply theme
    watch(() => route.path, () => {
      themeStore.applyTheme();
    });

    // Watch for theme changes
    watch(() => themeStore.isDark, () => {
      themeStore.applyTheme();
    });
  },
});
</script>