import { RouterLinkStub, shallowMount, createLocalVue, mount } from '@vue/test-utils'
import VuexGetters from '../pages/vuexGetters'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.use(Vuetify)
import DisplayCode from '../components/displayCode.vue'
Vue.component(DisplayCode.name, DisplayCode);

const localVue = createLocalVue()
localVue.use(Vuex)

describe('VuexGetters.vue', () => {
    let store, state;

    beforeEach(() => {
        state = {
            vuexGettersSnippets: {}
        }
        store = new Vuex.Store({
            modules: {
                codeSnippet: {
                    namespaced: true,
                    actions: {
                        loadVuexGettersSnippets({commit}) {
                            commit('setVuexGettersSnippets', {
                                vuexGetters1: 'vuexGetters1',
                                vuexGetters2: 'vuexGetters2'
                             });
                        }
                    },
                    getters: {
                        getVuexGettersSnippets: state => state.vuexGettersSnippets
                    },
                    state,
                    mutations: {
                        setVuexGettersSnippets(state, data) {
                            state.vuexGettersSnippets = data;
                        }
                    }
                }
            }
        })
    })

    test('Smoke Test - check page renders by looking for some hard coded text', async () => {
        const wrapper = shallowMount(VuexGetters, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Vuex - Getters');
    })

    test('vuexGetters snippet load call was made on creation', async () => {
        const wrapper = shallowMount(VuexGetters, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Vuex - Getters');
        expect(Object.keys(state.vuexGettersSnippets).length).toBe(2);
    })

    test('vuexGetters made use of vuexGetters1', async () => {
        const wrapper = mount(VuexGetters, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('vuexGetters1');
    })

    test('vuexGetters made use of vuexGetters2', async () => {
        const wrapper = mount(VuexGetters, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('vuexGetters2');
    })

    test('match snapshot', async () => {
        const wrapper = mount(VuexGetters, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.element).toMatchSnapshot()
    })
})













