import React from 'react';
import {render} from 'react-dom';
import App from  './containers/index'
import {Provider} from 'react-redux';
import {configureStore} from './store';
let store=configureStore(); //将store注入到应用中
render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,document.getElementById('root'));