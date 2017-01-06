import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getInventoryListItems} from './actions/inventoryItemsActions';
import configureStore from './stores/ConfigureStore';
import App from './App.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
