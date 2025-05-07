import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { useThemeStore } from '@/store/theme';

describe('DarkModeToggle.vue', () => {
  beforeEach(() => {
    // Create a fresh Pinia instance for each test
    setActivePinia(createPinia());
  });

  it('renders the toggle button', () => {
    const wrapper = mount(DarkModeToggle, {
      global: {
        components: {
          IonButton,
          IonIcon,
        },
        plugins: [createPinia()],
      },
    });
    expect(wrapper.findComponent(IonButton).exists()).toBe(true);
    expect(wrapper.findComponent(IonIcon).exists()).toBe(true);
  });

  it('toggles theme when clicked', async () => {
    const wrapper = mount(DarkModeToggle, {
      global: {
        components: {
          IonButton,
          IonIcon,
        },
        plugins: [createPinia()],
      },
    });

    const store = useThemeStore();
    const initialTheme = store.isDark;

    const button = wrapper.findComponent(IonButton);
    await button.trigger('click');

    expect(store.isDark).toBe(!initialTheme);
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', (!initialTheme).toString());
  });
}); 