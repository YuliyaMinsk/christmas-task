import { createStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer, { appState, defaultState } from './reducers';

const templateData = localStorage.getItem('save-settings');
export const startState: appState = templateData !== null ? JSON.parse(templateData) : defaultState; 

const store = createStore(reducer, startState, devToolsEnhancer({}));

store.subscribe(() => {
  localStorage.setItem('save-settings', JSON.stringify(store.getState()));
});

export default store;

