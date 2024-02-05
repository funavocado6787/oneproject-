import { RouterLinkStub, shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Routing from '../pages/Routing.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

Vue.use(Vuetify)
import DisplayCode from '../components/displayCode.vue'
Vue.component(DisplayCode.name, DisplayCode);

const localVue = createLocalVue()
localVue.use(Vuex)

describe('routing.vue', () => {
    let store, state;

    beforeEach(() => {
        state = {
            routingSnippets: {}
        }
        store = new Vuex.Store({
            modules: {
                codeSnippet: {
                    namespaced: true,
                    actions: {
                        loadRoutingSnippets({commit}) {
                            commit('setRoutingSnippets', {
                                routing1: 'routing1',
                                routing2: 'routing2',
                                routing3: 'routing3'
                             });
                        }
                    },
                    getters: {
                        getRoutingSnippets: state => state.routingSnippets
                    },
                    state,
                    mutations: {
                        setRoutingSnippets(state, data) {
                            state.routingSnippets = data;
                        }
                    }
                }
            }
        })
    })

    test('Smoke Test - check home page renders by looking for some hard coded text', async () => {
        const wrapper = shallowMount(Routing, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Nuxt Routing');
    })

    test('routing snippet load call was made on creation', async () => {
        const wrapper = shallowMount(Routing, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Nuxt Routing');
        expect(Object.keys(state.routingSnippets).length).toBe(3);
    })

    test('routing made use of snippet 1', async () => {
        const wrapper = mount(Routing, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('routing1');
    })

    test('routing made use of snippet 2', async () => {
        const wrapper = mount(Routing, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('routing2');
    })

    test('routing made use of snippet 3', async () => {
        const wrapper = mount(Routing, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('routing3');
    })

    test('match snapshot', async () => {
        const wrapper = mount(Routing, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.element).toMatchSnapshot()
    })
})
