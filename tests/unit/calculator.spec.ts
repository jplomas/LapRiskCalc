import { mount } from '@vue/test-utils'
import { IonicVue } from '@ionic/vue'
import HomePage from '@/views/Home.vue'
import { store } from '@/store'
import { createApp } from 'vue'

// Import our setup file
import './setup'

// Initialize Ionic
const app = createApp({}).use(IonicVue)

describe('Home.vue', () => {
  beforeEach(() => {
    // Reset store state before each test
    store.pass = false
    
    // Reset mocks
    jest.spyOn(localStorage, 'getItem').mockReturnValue(null)
    jest.spyOn(document.documentElement.classList, 'contains').mockReturnValue(false)
  })

  it('Passes self-check', async () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [IonicVue],
        provide: {
          app
        }
      }
    })
    
    // Wait for component to finish mounting and run self-check
    await wrapper.vm.$nextTick()
    await new Promise(resolve => setTimeout(resolve, 100)) // Give time for Ionic components to initialize
    
    // Verify the self-check message appears
    expect(wrapper.text()).toContain('PASSED app self-check')
    expect(store.pass).toBe(true)
  })
})
