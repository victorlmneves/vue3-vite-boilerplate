import { shallowMount } from '@vue/test-utils'

// import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorld from "../../src/components/HelloWorld.vue";

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'HelloWorld Recommended IDE setup: VSCode + VolarSee README.md for more information. Vite Docs  | Vue 3 Docscount is: 0 Edit components/HelloWorld.vue to test hot module replacement.'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
