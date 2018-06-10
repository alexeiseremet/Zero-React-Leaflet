import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'
import App from './App/';
import './index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
