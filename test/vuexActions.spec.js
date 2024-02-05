import { RouterLinkStub, shallowMount, createLocalVue, mount } from '@vue/test-utils'
import VuexActions from '../pages/vuexActions'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.use(Vuetify)
import DisplayCode from '../components/displayCode.vue'
Vue.component(DisplayCode.name, DisplayCode);

const localVue = createLocalVue()
localVue.use(Vuex)

describe('VuexActions.vue', () => {
    let store, state;

    beforeEach(() => {
        state = {
            vuexActionsSnippets: {}
        }
        store = new Vuex.Store({
            modules: {
                codeSnippet: {
                    namespaced: true,
                    actions: {
                        loadVuexActionsSnippets({commit}) {
                            commit('setVuexActionsSnippets', {
                                vuexActions1: 'vuexActions1',
                                vuexActions2: 'vuexActions2'
                             });
                        }
                    },
                    getters: {
                        getVuexActionsSnippets: state => state.vuexActionsSnippets
                    },
                    state,
                    mutations: {
                        setVuexActionsSnippets(state, data) {
                            state.vuexActionsSnippets = data;
                        }
                    }
                }
            }
        })
    })

    test('Smoke Test - check page renders by looking for some hard coded text', async () => {
        const wrapper = shallowMount(VuexActions, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Vuex - Actions');
    })

    test('vuexActions snippet load call was made on creation', async () => {
        const wrapper = shallowMount(VuexActions, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Vuex - Actions');
        expect(Object.keys(state.vuexActionsSnippets).length).toBe(2);
    })

    test('vuexActions made use of vuexActions1', async () => {
        const wrapper = mount(VuexActions, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('vuexActions1');
    })

    test('vuexActions made use of vuexActions2', async () => {
        const wrapper = mount(VuexActions, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('vuexActions2');
    })

    test('match snapshot', async () => {
        const wrapper = mount(VuexActions, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.element).toMatchSnapshot()
    })
})













