import { RouterLinkStub, shallowMount, createLocalVue, mount } from '@vue/test-utils'
import EventBus from '../pages/eventBus.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.use(Vuetify)
import DisplayCode from '../components/displayCode.vue'
Vue.component(DisplayCode.name, DisplayCode);

const localVue = createLocalVue()
localVue.use(Vuex)

describe('eventBus.vue', () => {
    let store, state;

    beforeEach(() => {
        state = {
            eventBusSnippets: {}
        }
        store = new Vuex.Store({
            modules: {
                codeSnippet: {
                    namespaced: true,
                    actions: {
                        loadEventBusSnippets({commit}) {
                            commit('setEventBusSnippets', {
                                eventBus1: 'eventBus1',
                                eventBus2: 'eventBus2',
                                eventBus3: 'eventBus3'
                             });
                        }
                    },
                    getters: {
                        getEventBusSnippets: state => state.eventBusSnippets
                    },
                    state,
                    mutations: {
                        setEventBusSnippets(state, data) {
                            state.eventBusSnippets = data;
                        }
                    }
                }
            }
        })
    })

    test('Smoke Test - check home page renders by looking for some hard coded text', async () => {
        const wrapper = shallowMount(EventBus, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Event Bus');
    })

    test('eventBus snippet load call was made on creation', async () => {
        const wrapper = shallowMount(EventBus, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.find('h3').text()).toContain('Event Bus');
        expect(Object.keys(state.eventBusSnippets).length).toBe(3);
    })

    test('eventBus made use of snippet 1', async () => {
        const wrapper = mount(EventBus, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('eventBus1');
    })

    test('eventBus made use of snippet 2', async () => {
        const wrapper = mount(EventBus, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('eventBus2');
    })

    test('eventBus made use of snippet 3', async () => {
        const wrapper = mount(EventBus, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('eventBus3');
    })


    test('match snapshot', async () => {
        const wrapper = mount(EventBus, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            store, localVue
        })

        expect(wrapper.element).toMatchSnapshot()
    })
})













