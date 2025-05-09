import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { IonicVue } from '@ionic/vue'

// Mock CSS imports
jest.mock('@/assets/shared.css', () => ({}));

import Nela from '@/views/Nela.vue'

describe('Nela.vue', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    // Create a fresh Pinia instance for each test
    setActivePinia(createPinia())
  })

  afterEach(() => {
    // Clean up the component after each test
    if (wrapper) {
      wrapper.unmount()
    }
  })

  it('calculates NELA risk', async () => {
    // Mount the component with Ionic
    wrapper = mount(Nela, {
      global: {
        plugins: [IonicVue],
        stubs: {
          'ion-button': {
            template: '<button type="button" :disabled="$attrs.disabled" @click="$emit(\'click\')"><slot/></button>',
            props: ['disabled']
          },
          'ion-modal': {
            template: '<div class="modal" v-if="isOpen"><slot/></div>',
            props: ['isOpen']
          },
          'ion-content': {
            template: '<div><slot/></div>'
          },
          'ion-page': {
            template: '<div><slot/></div>'
          },
          'ion-grid': {
            template: '<div><slot/></div>'
          },
          'ion-row': {
            template: '<div><slot/></div>'
          },
          'ion-col': {
            template: '<div><slot/></div>'
          },
          'ion-header': {
            template: '<div><slot/></div>'
          },
          'ion-toolbar': {
            template: '<div><slot/></div>'
          },
          'ion-title': {
            template: '<div><slot/></div>'
          },
          'ion-buttons': {
            template: '<div><slot/></div>'
          },
          'ion-icon': {
            template: '<div><slot/></div>'
          },
          'ion-radio': {
            template: '<input type="radio" :value="$attrs.value" :checked="$attrs.checked" @change="$emit(\'ionChange\', $event)"><slot/></input>',
            props: ['value', 'checked']
          },
          'ion-radio-group': {
            template: '<div @change="$emit(\'ionChange\', $event)"><slot/></div>'
          },
          'ion-item': {
            template: '<div><slot/></div>'
          },
          'ion-label': {
            template: '<div><slot/></div>'
          },
          'ion-input': {
            template: '<input type="text" :value="$attrs.value" @input="$emit(\'ionChange\', $event)"><slot/></input>',
            props: ['value']
          }
        }
      }
    })
    
    // Set required fields
    await wrapper.setData({
      risk: {
        age: '65',
        asa: '3',
        albumin: '35',
        bp: '120',
        pulse: '80',
        urea: '5',
        gcs: '15',
        respiratory: '1',
        wcc: '10',
        cepod: '1',
        soiling: '1',
        cancer: '1',
        gender: '1',
        cardiac: '1',
        ecg: '1',
        severity: '1',
        number: '1',
        blood: '1',
        creatinine: '100',
        sodium: '140',
        potassium: '4',
        hb: '12',
        indNecrosis: '1',
        indIschaemia: '0',
        indAcidosis: '0',
        indColitis: '0',
        indPhlegmon: '0',
        indPneumoperitoneum: '0',
        indSepsisOther: '0',
        indIatrogenicInjury: '0',
        indAnastomoticLeak: '0',
        indPerforation: '0',
        indPeritonitis: '0',
        indAbdominalAbscess: '0',
        indIntestinalFistula: '0',
        indTenderSmallBowelObstruction: '0',
        indNonTenderSmallBowelObstruction: '0',
        indTenderLargeBowelObstruction: '0',
        indNonTenderLargeBowelObstruction: '0',
        indGastricOutletObstruction: '0',
        indIncarceratedHernia: '0',
        indHiatusHernia: '0',
        indVolvulus: '0',
        indInternalHernia: '0',
        indObstructingIncisionalHernia: '0',
        indIntussusception: '0',
        indPseudoObstruction: '0',
        indForeignBody: '0',
        indAbdominalWoundDehiscence: '0',
        indAbdominalCompartmentSyndrome: '0',
        indPlannedRelook: '0',
        indOther: '0',
        indHaemorrhage: '0',
        maxInd: 0
      }
    })

    // Call indicationChange to update maxInd
    await (wrapper.vm as any).indicationChange()

    // Find and click calculate button
    const button = wrapper.find('button')
    await button.trigger('click')

    // Call go() method directly to ensure calculation happens
    await (wrapper.vm as any).go()

    // Check if modal is open
    const modal = wrapper.find('.modal')
    expect(modal.exists()).toBe(true)
    
    // Check that results are displayed
    const resultValue = wrapper.find('.result-value')
    expect(resultValue.exists()).toBe(true)
    expect(resultValue.text()).toBeTruthy()
  })
})
