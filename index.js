import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { addCharacterById } from './actions';

const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
//if you want to acces to the general data => action by default return state
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2));


ReactDOM.render(
    <Provider store={store}>
        <App program="react" />
    </Provider>,
    document.getElementById('root')
);
