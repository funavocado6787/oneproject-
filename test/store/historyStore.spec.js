
import Store from '../../store/modules/history';

describe('CodeSnippet Store tests', () => {
    const canReadAndWrite = (mutationProp, stateProp, getterProp) => {
        Store.mutations[mutationProp](Store.state, 'test');
        expect(Store.state[stateProp]).toBe('test');
        expect(Store.getters[getterProp](Store.state)).toBe('test');
    }

    it('should set and get the event bus snippets', () => {
        canReadAndWrite('setClients', 'clients', 'getClients')
    })
})