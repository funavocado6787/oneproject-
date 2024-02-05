
import Store from '../../store/modules/codeSnippet';

describe('CodeSnippet Store tests', () => {
    const canReadAndWrite = (mutationProp, stateProp, getterProp) => {
        Store.mutations[mutationProp](Store.state, 'test');
        expect(Store.state[stateProp]).toBe('test');
        expect(Store.getters[getterProp](Store.state)).toBe('test');
    }

    it('should set and get the event bus snippets', () => {
        canReadAndWrite('setEventBusSnippets', 'eventBusSnippets', 'getEventBusSnippets')
    })

    it('should set and get the routing snippets', () => {
        canReadAndWrite('setRoutingSnippets', 'routingSnippets', 'getRoutingSnippets')
    })

    it('should set and get the vue basics snippets', () => {
        canReadAndWrite('setVueBasicsSnippets', 'vueBasicsSnippets', 'getVueBasicsSnippets')
    })

    it('should set and get the vue actions snippets', () => {
        canReadAndWrite('setVuexActionsSnippets', 'vuexActionsSnippets', 'getVuexActionsSnippets')
    })

    it('should set and get the vuex Getters snippets', () => {
        canReadAndWrite('setVuexGettersSnippets', 'vuexGettersSnippets', 'getVuexGettersSnippets')
    })

    it('should set and get the vuex Getters snippets', () => {
        canReadAndWrite('setVuexSetupSnippets', 'vuexSetupSnippets', 'getVuexSetupSnippets')
    })
})