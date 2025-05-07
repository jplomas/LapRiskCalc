import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import Info from '@/views/Info.vue';
import { 
  IonPage, 
  IonContent, 
  IonCard, 
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/vue';

describe('Info.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders the component', () => {
    const wrapper = mount(Info, {
      global: {
        components: {
          IonPage,
          IonContent,
          IonCard,
          IonCardContent,
          IonHeader,
          IonToolbar,
          IonTitle,
          IonButtons,
          IonButton,
          IonIcon
        },
        plugins: [createPinia()],
      },
    });

    // Check if main elements are rendered
    expect(wrapper.findComponent(IonPage).exists()).toBe(true);
    expect(wrapper.findComponent(IonContent).exists()).toBe(true);
    expect(wrapper.findAllComponents(IonCard).length).toBeGreaterThan(0);
  });

  it('displays the version number', () => {
    const wrapper = mount(Info, {
      global: {
        components: {
          IonPage,
          IonContent,
          IonCard,
          IonCardContent,
          IonHeader,
          IonToolbar,
          IonTitle,
          IonButtons,
          IonButton,
          IonIcon
        },
        plugins: [createPinia()],
      },
    });

    const versionElement = wrapper.find('.version-number');
    expect(versionElement.exists()).toBe(true);
    expect(versionElement.text()).toMatch(/v\d+\.\d+\.\d+/);
  });

  it('displays author information', () => {
    const wrapper = mount(Info, {
      global: {
        components: {
          IonPage,
          IonContent,
          IonCard,
          IonCardContent,
          IonHeader,
          IonToolbar,
          IonTitle,
          IonButtons,
          IonButton,
          IonIcon
        },
        plugins: [createPinia()],
      },
    });

    expect(wrapper.text()).toContain('Dr JP Lomas');
    expect(wrapper.text()).toContain('Consultant in Anaesthesia & Intensive Care Medicine');
  });

  it('contains social media links', () => {
    const wrapper = mount(Info, {
      global: {
        components: {
          IonPage,
          IonContent,
          IonCard,
          IonCardContent,
          IonHeader,
          IonToolbar,
          IonTitle,
          IonButtons,
          IonButton,
          IonIcon
        },
        plugins: [createPinia()],
      },
    });

    const links = wrapper.findAll('a');
    const hrefs = links.map(link => link.attributes('href'));
    
    expect(hrefs).toContain('https://twitter.com/jplomas');
    expect(hrefs).toContain('https://lomas.doctor');
    expect(hrefs).toContain('https://github.com/jplomas');
  });
}); 