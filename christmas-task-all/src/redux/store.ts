import { combineReducers, createStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { catalogState, defaultCatalogState, defaultTreeState, treeState } from '../abstract/types';
import catalogReducer from './reducer-catalog';
import treeReducer from './reducer-tree';

const templateData = localStorage.getItem('save-settings');

const startState: catalogState = templateData !== null ? JSON.parse(templateData) : defaultCatalogState; 

const store = createStore(combineReducers({ catalogReducer, treeReducer}), 
  { catalogReducer: startState, treeReducer: defaultTreeState }, 
  devToolsEnhancer({}));

store.subscribe(() => {
  localStorage.setItem('save-settings', JSON.stringify(store.getState()));
});

export default store;

