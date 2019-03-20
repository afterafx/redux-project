import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cards, boards } from './data';
import rootReducer from './reducers';
import * as Actions from './actions';
import './index.css';
import App from './App';

const store = createStore(rootReducer, {
  cards,
  boards,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
