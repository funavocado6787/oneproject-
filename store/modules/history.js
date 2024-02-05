import loadHistories from '../../services/history.service';

export default {
    namespaced: true,
    state: {
        clients: []
    },
    getters: {
        getClients: state => {
            return state.clients;
        }
    },
    mutations: {
        setClients(state, clients) {
            state.clients = clients;
        }
    },
    actions: {
        loadHistories({commit}) {
            loadHistories().then(data => {
                commit('setClients', data);
            })
        }
    }
}
