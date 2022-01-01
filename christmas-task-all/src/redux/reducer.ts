import { createReducer } from "@reduxjs/toolkit";

import { ALL_CLEAR, CLOSE_MODAL, FILTER_COLOR, FILTER_FAVORITE, FILTER_SHAPE, 
  FILTER_SIZE, RANGE_COUNT, RANGE_YEAR, SEARCH_CARDS, SEARCH_CLEAR, 
  SELECT, SELECT_BACKGROUND, SELECT_GARLAND, SELECT_TREE, SETTINGS_MUSIC, SETTINGS_SNOW, SET_TO_DEFAULT, SORT_CARDS} from "./actions";
import { appState, defaultState } from "../common/types";

const reducer = createReducer(defaultState, {
  [FILTER_COLOR]: (state: appState, { payload }: { payload: string }) => {
    switch (payload) {
      case 'white': state.colors.white = !state.colors.white; break;
      case 'yellow': state.colors.yellow = !state.colors.yellow; break;
      case 'red': state.colors.red = !state.colors.red; break;
      case 'blue': state.colors.blue = !state.colors.blue; break;
      case 'green': state.colors.green = !state.colors.green; break;
    }   
  }, 
  [FILTER_SHAPE]: (state: appState, { payload }: { payload: string } ) => {
    switch (payload) {
      case 'ball': state.shapes.ball = !state.shapes.ball; break;
      case 'bell': state.shapes.bell = !state.shapes.bell; break;
      case 'cone': state.shapes.cone = !state.shapes.cone; break;
      case 'snowflake': state.shapes.snowflake = !state.shapes.snowflake; break;
      case 'figure': state.shapes.figure = !state.shapes.figure; break;
    }
  }, 

  [FILTER_SIZE]: (state: appState, { payload }: { payload: string } ) => {
    switch (payload) {
      case 'big': state.size.big = !state.size.big; break;
      case 'medium': state.size.medium = !state.size.medium; break;
      case 'small': state.size.small = !state.size.small; break;
    }
  },

  [FILTER_FAVORITE]: (state: appState ) => {
    state.favorite = !state.favorite;
  },
  
  [RANGE_COUNT]: (state: appState,  { payload }: { payload: string[] }) => {
    state.count.start = parseInt(payload[0]);
    state.count.end = parseInt(payload[1]);
  },
  [RANGE_YEAR]: (state: appState,  { payload }: { payload: string[] }) => {
    state.year.start = parseInt(payload[0]);
    state.year.end = parseInt(payload[1]);
  },

  [SORT_CARDS]: (state: appState, { payload }: { payload: string } ) => {
    state.sort = payload;
  },
  
  [SET_TO_DEFAULT]: (state: appState ) => {
    state.colors = defaultState.colors;
    state.shapes = defaultState.shapes;
    state.size = defaultState.size;
    state.favorite = defaultState.favorite;
    state.count = defaultState.count;
    state.year = defaultState.year;
  },
  [ALL_CLEAR]: (state: appState ) => {
    state.colors = defaultState.colors;
    state.shapes = defaultState.shapes;
    state.size = defaultState.size;
    state.favorite = defaultState.favorite;
    state.count = defaultState.count;
    state.year = defaultState.year;
    state.sort = defaultState.sort;
    state.countSelected = defaultState.countSelected;
    state.toysData = defaultState.toysData;

    state.settings.snow = defaultState.settings.snow;
    state.settings.music = defaultState.settings.music;
    state.tree = defaultState.tree;
    state.background = defaultState.background;
    state.garland = defaultState.garland;
  },

  [SELECT]: (state: appState, { payload }: { payload: string }) => {
    if (state.toysData[parseInt(payload)-1].select) {
      state.toysData[parseInt(payload)-1].select = false;
      state.countSelected--;
    } else {
      if (state.countSelected != 20) {
        state.toysData[parseInt(payload)-1].select = true;
      }
      state.countSelected++;
    }
  },
  [CLOSE_MODAL]: (state: appState ) => {
    state.countSelected--;
  },

  [SEARCH_CARDS]: (state: appState, { payload }: { payload: string }) => {
    state.search = payload;
    state.search = state.search.toLowerCase();
  },
  [SEARCH_CLEAR]: (state: appState ) => {
    state.search = '';
  },

  [SETTINGS_SNOW]: (state: appState ) => {
    state.settings.snow = !state.settings.snow;
  },
  [SETTINGS_MUSIC]: (state: appState ) => {
    state.settings.music = !state.settings.music;
  },
  [SELECT_TREE]: (state: appState, { payload }: { payload: string } ) => {
    state.tree = payload;    
  },
  [SELECT_BACKGROUND]: (state: appState, { payload }: { payload: string } ) => {
    state.background = payload;
  },
  [SELECT_GARLAND]: (state: appState, { payload }: { payload: string } ) => {
    state.garland = payload;
  },
});

export default reducer;

