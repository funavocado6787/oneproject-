import * as codeSnippets from '../../services/codeSnippet.service';

export default {
    namespaced: true,
    state: {
        eventBusSnippets: {},
        routingSnippets: {},
        vueBasicsSnippets: {},
        vuexActionsSnippets: {},
        vuexGettersSnippets: {},
        vuexSetupSnippets: {}
    },
    getters: {
        getEventBusSnippets: state => state.eventBusSnippets,
        getRoutingSnippets: state => state.routingSnippets,
        getVueBasicsSnippets: state => state.vueBasicsSnippets,
        getVuexActionsSnippets: state => state.vuexActionsSnippets,
        getVuexGettersSnippets: state => state.vuexGettersSnippets,
        getVuexSetupSnippets: state => state.vuexSetupSnippets
    },
    mutations: {
        setEventBusSnippets(state, data) {
            state.eventBusSnippets = data;
        },
        setRoutingSnippets(state, data) {
            state.routingSnippets = data;
        },
        setVueBasicsSnippets(state, data) {
            state.vueBasicsSnippets = data;
        },
        setVuexActionsSnippets(state, data) {
            state.vuexActionsSnippets = data;
        },
        setVuexGettersSnippets(state, data) {
            state.vuexGettersSnippets = data;
        },
        setVuexSetupSnippets(state, data) {
            state.vuexSetupSnippets = data;
        },
    },
    actions: {
        loadRoutingSnippets({commit}) {
            codeSnippets.loadRoutingSnippets().then(data => {
                commit('setRoutingSnippets', data);
            })
        },
        loadEventBusSnippets({commit}) {
            codeSnippets.loadEventBusSnippets().then(data => {
                commit('setEventBusSnippets', data);
            })
        },
        loadVueBasicsSnippets({commit}) {
            codeSnippets.loadVueBasicsSnippets().then(data => {
                commit('setVueBasicsSnippets', data);
            })
        },
        loadVuexActionsSnippets({commit}) {
            codeSnippets.loadVuexActionsSnippets().then(data => {
                commit('setVuexActionsSnippets', data);
            })
        },
        loadVuexGettersSnippets({commit}) {
            codeSnippets.loadVuexGettersSnippets().then(data => {
                commit('setVuexGettersSnippets', data);
            })
        },
        loadVuexSetupSnippets({commit}) {
            codeSnippets.loadVuexSetupSnippets().then(data => {
                commit('setVuexSetupSnippets', data);
            })
        }
    }
}
