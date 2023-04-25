import { mount } from '@vue/test-utils'
import Tab1Page from '@/views/Home.vue'

describe('Home.vue', () => {
  it('Passes self-check', () => {
    const wrapper = mount(Tab1Page)
    expect(wrapper.text()).toMatch('PASSED app self-check')
  })
})
