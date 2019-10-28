import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './components/field'
import fieldReducer from './redux/fieldReducer'

const reducers = combineReducers({
    field: fieldReducer
})


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
    , document.getElementById('root'));

