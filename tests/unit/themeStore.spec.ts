import { setActivePinia, createPinia } from 'pinia';
import { useThemeStore } from '@/store/theme';
import { nextTick } from 'vue';

// Import our setup file to ensure mocks are in place
import './setup';

describe('Theme Store', () => {
  let store: ReturnType<typeof useThemeStore>;

  beforeEach(() => {
    // Create a fresh Pinia instance for each test
    setActivePinia(createPinia());
    
    // Reset localStorage mock
    (localStorage.getItem as jest.Mock).mockReset();
    (localStorage.setItem as jest.Mock).mockReset();
    
    // Reset document mock methods
    (document.documentElement.classList.add as jest.Mock).mockReset();
    (document.documentElement.classList.remove as jest.Mock).mockReset();
    (document.documentElement.classList.contains as jest.Mock).mockReset();
    (document.documentElement.setAttribute as jest.Mock).mockReset();
    (document.body.classList.add as jest.Mock).mockReset();
    (document.body.classList.remove as jest.Mock).mockReset();
    (document.body.style.setProperty as jest.Mock).mockReset();

    // Mock window.matchMedia for initial state
    (window.matchMedia as jest.Mock).mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  it('initializes with dark mode from localStorage', async () => {
    (localStorage.getItem as jest.Mock).mockReturnValue('true');
    store = useThemeStore();
    
    // Wait for watch callback to be called
    await nextTick();
    await nextTick();
    
    expect(store.isDark).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'true');
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('dark');
    expect(document.body.classList.add).toHaveBeenCalledWith('dark');
  });

  it('initializes with light mode from localStorage', async () => {
    (localStorage.getItem as jest.Mock).mockReturnValue('false');
    store = useThemeStore();
    
    // Wait for watch callback to be called
    await nextTick();
    await nextTick();
    
    expect(store.isDark).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'false');
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('light');
    expect(document.body.classList.add).toHaveBeenCalledWith('light');
  });

  it('initializes with system preference when no localStorage value', async () => {
    (localStorage.getItem as jest.Mock).mockReturnValue(null);
    (window.matchMedia as jest.Mock).mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    
    store = useThemeStore();
    
    // Wait for watch callback to be called
    await nextTick();
    await nextTick();
    
    expect(store.isDark).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'true');
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('dark');
    expect(document.body.classList.add).toHaveBeenCalledWith('dark');
  });

  it('toggles theme state', async () => {
    store = useThemeStore();
    
    // Set initial state to light
    store.isDark = false;
    await nextTick();
    await nextTick();
    
    // Toggle to dark
    store.toggleTheme();
    await nextTick();
    await nextTick();
    
    expect(store.isDark).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'true');
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('dark');
    expect(document.body.classList.add).toHaveBeenCalledWith('dark');
    
    // Toggle back to light
    store.toggleTheme();
    await nextTick();
    await nextTick();
    
    expect(store.isDark).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'false');
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('light');
    expect(document.body.classList.add).toHaveBeenCalledWith('light');
  });

  it('applies dark theme correctly', async () => {
    store = useThemeStore();
    
    // Clear any previous calls
    (document.documentElement.classList.remove as jest.Mock).mockClear();
    (document.body.classList.remove as jest.Mock).mockClear();
    (document.documentElement.classList.add as jest.Mock).mockClear();
    (document.body.classList.add as jest.Mock).mockClear();
    (document.documentElement.setAttribute as jest.Mock).mockClear();
    (document.body.style.setProperty as jest.Mock).mockClear();

    // Set to dark mode
    store.isDark = true;
    store.applyTheme();
    await nextTick();
    
    // Check class manipulations
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('dark');
    expect(document.body.classList.add).toHaveBeenCalledWith('dark');
    
    // Check attribute and style manipulations
    expect(document.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-background-gradient-start', '#1e1e1e');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-background-gradient-middle', '#2a2a2a');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-background-gradient-end', '#333333');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-background-color', '#121212');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-text-color', '#ffffff');
  });

  it('applies light theme correctly', async () => {
    store = useThemeStore();
    
    // Clear any previous calls
    (document.documentElement.classList.remove as jest.Mock).mockClear();
    (document.body.classList.remove as jest.Mock).mockClear();
    (document.documentElement.classList.add as jest.Mock).mockClear();
    (document.body.classList.add as jest.Mock).mockClear();
    (document.documentElement.setAttribute as jest.Mock).mockClear();
    (document.body.style.setProperty as jest.Mock).mockClear();
    
    // Set to light mode
    store.isDark = false;
    store.applyTheme();
    await nextTick();
    
    // Check class manipulations
    expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.body.classList.remove).toHaveBeenCalledWith('dark', 'light');
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('light');
    expect(document.body.classList.add).toHaveBeenCalledWith('light');
    
    // Check attribute and style manipulations
    expect(document.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'light');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-background-gradient-start', '#f8fafc');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-background-gradient-middle', '#e2e8f0');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-background-gradient-end', '#cbd5e1');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-background-color', '#ffffff');
    expect(document.body.style.setProperty).toHaveBeenCalledWith('--ion-text-color', '#000000');
  });

  it('persists theme preference in localStorage', async () => {
    store = useThemeStore();
    
    // Set initial state to light
    store.isDark = false;
    await nextTick();
    await nextTick();
    
    // Toggle to dark
    store.toggleTheme();
    await nextTick();
    await nextTick();
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'true');
    
    // Toggle back to light
    store.toggleTheme();
    await nextTick();
    await nextTick();
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'false');
  });
}); 