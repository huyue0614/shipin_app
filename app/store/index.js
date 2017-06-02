import {createStore} from 'redux';
import reducers from  '../reducer';
export function configureStore(initState) {
    return createStore(reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined)
}