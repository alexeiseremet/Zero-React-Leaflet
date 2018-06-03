import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'
import App from './App/';
import './index.css';

render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
