import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import Root from './components/Root'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunk, logger];

let store = createStore(
    todoApp,
    applyMiddleware(...middlewares)
);

render(
    <Root store={store}/>,
    document.getElementById('root')
);