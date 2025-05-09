import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { IonicVue } from '@ionic/vue';

// Mock CSS imports
jest.mock('@/assets/shared.css', () => ({}));

// Mock image imports
jest.mock('@/assets/imgs/jp.png', () => 'jp.png');

import Info from '@/views/Info.vue';

describe('Info.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const mountWithStubs = () => {
    return mount(Info, {
      global: {
        plugins: [IonicVue],
        stubs: {
          'ion-content': {
            template: '<div class="ion-content"><slot/></div>'
          },
          'ion-page': {
            template: '<div class="ion-page"><slot/></div>'
          },
          'ion-grid': {
            template: '<div class="ion-grid"><slot/></div>'
          },
          'ion-row': {
            template: '<div class="ion-row"><slot/></div>'
          },
          'ion-col': {
            template: '<div class="ion-col"><slot/></div>'
          },
          'ion-card': {
            template: '<div class="ion-card"><slot/></div>'
          },
          'ion-card-content': {
            template: '<div class="ion-card-content"><slot/></div>'
          },
          'ion-header': {
            template: '<div class="ion-header"><slot/></div>'
          },
          'ion-toolbar': {
            template: '<div class="ion-toolbar"><slot/></div>'
          },
          'ion-title': {
            template: '<div class="ion-title"><slot/></div>'
          },
          'ion-buttons': {
            template: '<div class="ion-buttons"><slot/></div>'
          },
          'ion-button': {
            template: '<button class="ion-button"><slot/></button>'
          },
          'ion-icon': {
            template: '<span class="ion-icon"><slot/></span>'
          },
          'ion-list': {
            template: '<div class="ion-list"><slot/></div>'
          },
          'ion-item': {
            template: '<div class="ion-item"><slot/></div>'
          },
          'ion-img': {
            template: '<img class="ion-img" :src="src" />'
          }
        }
      }
    });
  };

  it('renders the component', () => {
    const wrapper = mountWithStubs();
    expect(wrapper.find('.ion-page').exists()).toBe(true);
    expect(wrapper.find('.ion-content').exists()).toBe(true);
    expect(wrapper.findAll('.ion-card').length).toBeGreaterThan(0);
  });

  it('displays the version number', () => {
    const wrapper = mountWithStubs();
    const versionElement = wrapper.find('.version-number');
    expect(versionElement.exists()).toBe(true);
    expect(versionElement.text()).toMatch(/v\d+\.\d+\.\d+/);
  });

  it('displays author information', () => {
    const wrapper = mountWithStubs();
    expect(wrapper.text()).toContain('Author');
    expect(wrapper.text()).toContain('Dr JP Lomas');
  });

  it('contains social media links', () => {
    const wrapper = mountWithStubs();
    const links = wrapper.findAll('a');
    const hrefs = links.map(link => link.attributes('href'));
    
    expect(hrefs).toContain('https://twitter.com/jplomas');
    expect(hrefs).toContain('https://lomas.doctor');
    expect(hrefs).toContain('https://github.com/jplomas');
  });
}); 