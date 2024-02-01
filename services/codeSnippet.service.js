
export const loadRoutingSnippets = () => {
    return new Promise(function(resolve, reject) {
        resolve({
            routing1: `<nuxt-link to="/component">Link Text</nuxt-link>`,
            routing2:
`    import Home from 'components/Home/home';
    import Contact from 'components/Contact/contact';
    import NotFound from 'components/NotFound/notFound';
    const routes = [{
        name: 'home',
        path: '/',
        component: Home
    }, {
        name: 'contact',
        path: '/contact',
        component: Contact
    }, {
        path: '*',
        component: NotFound
    }];

    export default routes;`,
        routing3: `$router.push('home');`
        });
    })
}

export const loadEventBusSnippets = () => {
    return new Promise(function(resolve, reject) {
        resolve({
            eventBus1:
`    import Vue from 'vue';
    export const EventBus = new Vue();`,
            eventBus2:
`    import { EventBus } from './event-bus.js';

    export default {
        data() {
            return {
                someData: 'payload'
            }
        }
        methods: {
            sendEvent() {
                EventBus.$emit('i-got-clicked', this.someData); // i-got-clicked = event name
            }
        }
    }`,
            eventBus3:
`    import { EventBus } from './event-bus.js';
    export default {
        created() {
            // Listen for the i-got-clicked event and its data.
            EventBus.$on('i-got-clicked', data => {
                console.log(data);
            });
        }
    }`
        });
    })
}

export const loadVueBasicsSnippets = () => {
    return new Promise(function(resolve, reject) {
        resolve({
            basicComponent:
`    import Vue from 'vue';
    import template from './template.html';
    import anotherComponent from '../anothercomponent/anothercomponent'

    export default {
        mixins: [aMixin],
        components: {
            anotherComponent
        }
        template,
        props: {
            a: String/Number/Object,
            b: [String, Number],
            c: {
                type: String,
                default: 'foo'
            },
        },
        data(){
            return {
                message: 'hi',
                basicObject: { message: 'foo'}
            }
        },
        methods:{
            talk(){
                console.write(this.message);
            }
        },
        computed: {
            aComputedProperty: function() {
                return this.message + 'there';
            }
        },
        watch: {
            message: function(newVal, oldVal) {
                console.log('new value' + newVal);
            },
            'basicObject.message': function (newVal,OldVal) {
                console.log('property of an object');
            }
        },
        created: function () {
            console.log('component created);
        },
        mounted: function () {
            console.log('component mounted);
        },
    };`
        });
    })
}

export const loadVuexSetupSnippets = () => {
    return new Promise(function(resolve, reject) {
        resolve({
            vuex1: `npm install vuex`,
            vuex2:
`    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    const state = {
        someParam : false
    }
    // create the store and add the json state object
    const store = new Vuex.Store({
        state
    })
    export default store`,
            vuex3:
`    import Vue from 'vue'
    import store from './vuex/index.js'

    const app = new Vue({
        store
    })

    export { app, store }`
        });
    })
}

export const loadVuexActionsSnippets = () => {
    return new Promise(function(resolve, reject) {
        resolve({
            vuexActions1:
`    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)
        const state = {
            someParam: false
        }
        const store = new Vuex.Store({
            state,
            getters:{
            someParam: (state) => {
                return state.someParam;
            }
        },
        actions:{
            updateSomeParam({ commit }) {
                commit('updateSomeParam')
            }
        },
        mutations:{
            updateSomeParam(state) {
                state.someParam = false;
            }
        },
    })`,
            vuexActions2:
`    import { mapGetters, mapActions } from 'vuex'
    export default {
        methods:{
            ...mapActions(['updateSomeParam']),
            ...mapActions({ 'updateSomeParam': 'updateSomeParam' }),
            // with namespaces
            ...mapActions('namespace', ['updateSomeParam','updateSomeParam']),
            ...mapActions({'updateSomeParam': 'namespace/updateSomeParam'})
        },
        computed:{
            ...mapGetters(['someParam']),
            ...mapGetters({'someParam': 'someParam'}),
            // with namespaces
            ...mapGetters({'someParam', 'namespace/someParam'})
        }
    }`
        });
    })
}

export const loadVuexGettersSnippets = () => {
    return new Promise(function(resolve, reject) {
        resolve({
            vuexGetters1:
`    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)
        const state = {
            someParam: false
        }
        const store = new Vuex.Store({
            state,
            getters:{
                someParam: state => state.someParam
            }
        }
    })`,
    vuexGetters2:
`    import { mapGetters } from 'vuex'

    export default {
        computed:{
            ...mapGetters(['someParam']),
            ...mapGetters({'someParam': 'someParam'}),
            // with namespaces
            ...mapGetters({'someParam', 'namespace/someParam'})
        }
    }`
        });
    })
}