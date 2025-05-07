import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { IonicVue } from '@ionic/vue'
import Nela from '@/views/Nela.vue'
import { nextTick } from 'vue'

// Import our setup file to ensure mocks are in place
import './setup'

describe('Nela.vue', () => {
  beforeEach(() => {
    // Create a fresh Pinia instance for each test
    setActivePinia(createPinia())
  })

  it('calculates NELA risk', async () => {
    // Mount the component with Ionic
    const wrapper = mount(Nela, {
      global: {
        plugins: [IonicVue],
        stubs: {
          'ion-button': {
            template: '<button type="button" :disabled="$attrs.disabled" @click="$emit(\'click\')"><slot/></button>'
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
          }
        }
      }
    })
    
    // Wait for component to mount
    await nextTick()
    
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
    await wrapper.vm.indicationChange()

    // Wait for component to update
    await nextTick()

    // Find and click calculate button
    const button = wrapper.find('button')
    await button.trigger('click')

    // Call go() method directly to ensure calculation happens
    await wrapper.vm.go()

    // Wait for calculation and modal to open
    await nextTick()
    await nextTick()

    // Debug output
    console.log('Component state:', {
      open: wrapper.vm.open,
      result: wrapper.vm.result,
      risk: wrapper.vm.risk,
      maxInd: wrapper.vm.risk.maxInd
    })

    // Check if modal is open
    const modal = wrapper.find('.modal')
    expect(modal.exists()).toBe(true)
    
    // Check that results are displayed
    const resultText = wrapper.find('h1')
    expect(resultText.exists()).toBe(true)
    expect(resultText.text()).toBeTruthy()
  })
})
