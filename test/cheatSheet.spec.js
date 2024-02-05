import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount } from '@vue/test-utils'

Vue.use(Vuetify)
import DisplayCode from '../components/displayCode.vue'
Vue.component(DisplayCode.name, DisplayCode);
import Panel from '../components/panel.vue';
Vue.component(Panel.name, Panel);

import CheatSheet from '../pages/cheatSheet.vue'

describe('CheatSheet.vue', () => {
    it('should render the a title - SMOKEY', () => {
        const wrapper = shallowMount(CheatSheet, {})

        expect(wrapper.find('h3').text()).toBeTruthy()
    })

    it('should match the basic snapshot', () => {
        const wrapper = shallowMount(CheatSheet, {})

        expect(wrapper.element).toMatchSnapshot()
    })
})