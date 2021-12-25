import { createStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { appState, defaultState } from '../common/types';
import reducer from './reducer';

const templateData = localStorage.getItem('save-settings');

const startState: appState = templateData !== null ? JSON.parse(templateData) : defaultState; 

const store = createStore(reducer, startState, devToolsEnhancer({}));

console.log('1', store); // TO DELETE
console.log('2', startState); // TO DELETE

store.subscribe(() => {
  localStorage.setItem('save-settings', JSON.stringify(store.getState()));
});

export default store;

