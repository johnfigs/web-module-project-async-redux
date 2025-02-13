import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

import logger from 'redux-logger';
import thunk from 'redux-thunk';


import { reducer } from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
