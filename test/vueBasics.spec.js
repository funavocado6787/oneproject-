import { RouterLinkStub, shallowMount, createLocalVue, mount } from '@vue/test-utils'
import VueBasics from '../pages/VueBasics'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.use(Vuetify)
import DisplayCode from '../components/displayCode.vue'
Vue.component(DisplayCode.name, DisplayCode);

const localVue = createLocalVue()
localVue.use(Vuex)

describe('vueBasics.vue', () => {
    let store, state;

    beforeEach(() => {
        state = {
            vueBasicsSnippets: {}
        }
        store = new Vuex.Store({
            modules: {
                codeSnippet: {
                    namespaced: true,
                    actions: {
                        loadVueBasicsSnippets({commit}) {
                            commit('setVueBasicsSnippets', {
                                basicComponent: 'basicComponent',
                             });
                        }
                    },
                    getters: {
                        getVueBasicsSnippets: state => state.vueBasicsSnippets
                    },
                    state,
                    mutations: {
                        setVueBasicsSnippets(state, data) {
                            state.vueBasicsSnippets = data;
                        }
                    }
                }
            }
        })
    })

    test('Smoke Test - check page renders by looking for some hard coded text', async () => {
        const wrapper = shallowMount(VueBasics, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Components');
    })

    test('vueBasics snippet load call was made on creation', async () => {
        const wrapper = shallowMount(VueBasics, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Components');
        expect(Object.keys(state.vueBasicsSnippets).length).toBe(1);
    })

    test('vueBasics made use of basicComponent', async () => {
        const wrapper = mount(VueBasics, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('basicComponent');
    })

    test('match snapshot', async () => {
        const wrapper = mount(VueBasics, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.element).toMatchSnapshot()
    })
})













