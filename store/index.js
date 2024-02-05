import Vue from 'vue'
import Vuex from 'vuex'
import historyModule from './modules/history';
import codeSnippetModule from './modules/codeSnippet';
Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({
        modules: {
            history: historyModule,
            codeSnippet: codeSnippetModule
        }
    })
}
export default store