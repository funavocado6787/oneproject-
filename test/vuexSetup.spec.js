import { RouterLinkStub, shallowMount, createLocalVue, mount } from '@vue/test-utils'
import VuexSetup from '../pages/vuexSetup'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.use(Vuetify)
import DisplayCode from '../components/displayCode.vue'
Vue.component(DisplayCode.name, DisplayCode);

const localVue = createLocalVue()
localVue.use(Vuex)

describe('VuexSetup.vue', () => {
    let store, state;

    beforeEach(() => {
        state = {
            vuexSetupSnippets: {}
        }
        store = new Vuex.Store({
            modules: {
                codeSnippet: {
                    namespaced: true,
                    actions: {
                        loadVuexSetupSnippets({commit}) {
                            commit('setVuexSetupSnippets', {
                                vuex1: 'vuex1',
                                vuex2: 'vuex2',
                                vuex3: 'vuex3'
                             });
                        }
                    },
                    getters: {
                        getVuexSetupSnippets: state => state.vuexSetupSnippets
                    },
                    state,
                    mutations: {
                        setVuexSetupSnippets(state, data) {
                            state.vuexSetupSnippets = data;
                        }
                    }
                }
            }
        })
    })

    test('Smoke Test - check page renders by looking for some hard coded text', async () => {
        const wrapper = shallowMount(VuexSetup, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('State Management (Vuex)');
    })

    test('vuexSetup snippet load call was made on creation', async () => {
        const wrapper = shallowMount(VuexSetup, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('State Management (Vuex)');
        expect(Object.keys(state.vuexSetupSnippets).length).toBe(3);
    })

    test('vuexSetup made use of vuex1', async () => {
        const wrapper = mount(VuexSetup, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('vuex1');
    })

    test('vuexSetup made use of vuex2', async () => {
        const wrapper = mount(VuexSetup, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('vuex2');
    })

    test('vuexSetup made use of vuex3', async () => {
        const wrapper = mount(VuexSetup, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('vuex3');
    })

    test('match snapshot', async () => {
        const wrapper = mount(VuexSetup, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.element).toMatchSnapshot()
    })
})













