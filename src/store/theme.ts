import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

// Initialize theme from localStorage or system preference
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme !== null) {
    return savedTheme === 'true';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(getInitialTheme());

  // Watch for changes and save to localStorage
  watch(isDark, (newValue) => {
    localStorage.setItem('darkMode', newValue.toString());
    applyTheme();
  });

  function toggleTheme() {
    isDark.value = !isDark.value;
  }

  function applyTheme() {
    // Remove existing theme classes first
    document.documentElement.classList.remove('dark', 'light');
    document.body.classList.remove('dark', 'light');
    
    // Update the dark mode class on all required elements
    document.documentElement.classList.add(isDark.value ? 'dark' : 'light');
    document.body.classList.add(isDark.value ? 'dark' : 'light');
    
    // Force Ionic components to update their theme
    if (isDark.value) {
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
  }

  function initTheme() {
    applyTheme();
  }

  return {
    isDark,
    toggleTheme,
    applyTheme,
    initTheme
  };
}); 