import { createReducer } from "@reduxjs/toolkit";

import { ALL_CLEAR, CLOSE_MODAL, FILTER_COLOR_BLUE, FILTER_COLOR_GREEN, FILTER_COLOR_RED, FILTER_COLOR_WHITE, FILTER_COLOR_YELLOW, 
  FILTER_FAVORITE, FILTER_SHAPE_BALL, FILTER_SHAPE_BELL, FILTER_SHAPE_CONE, FILTER_SHAPE_FIGURE, FILTER_SHAPE_SNOWFLAKE, 
  FILTER_SIZE_BIG, FILTER_SIZE_MEDIUM, FILTER_SIZE_SMALL, RANGE_COUNT, RANGE_YEAR, SEARCH_CARDS, SEARCH_CLEAR, 
  SELECT, SELECT_BACKGROUND, SELECT_GARLAND, SELECT_TREE, SETTINGS_MUSIC, SETTINGS_SNOW, SET_TO_DEFAULT, SORT_CARDS} from "./actions";
import { appState, defaultState } from "../common/types";

const reducer = createReducer(defaultState, {
  [FILTER_COLOR_WHITE]: (state: appState) => {
    state.colors.white = !state.colors.white;
  },
  [FILTER_COLOR_YELLOW]: (state: appState ) => {
    state.colors.yellow = !state.colors.yellow;
  },
  [FILTER_COLOR_RED]: (state: appState ) => {
    state.colors.red = !state.colors.red;
  },
  [FILTER_COLOR_BLUE]: (state: appState ) => {
    state.colors.blue = !state.colors.blue;
  },
  [FILTER_COLOR_GREEN]: (state: appState ) => {
    state.colors.green = !state.colors.green;
  },

  [FILTER_SHAPE_BALL]: (state: appState ) => {
    state.shapes.ball = !state.shapes.ball;
  },
  [FILTER_SHAPE_BELL]: (state: appState ) => {
    state.shapes.bell = !state.shapes.bell;
  },
  [FILTER_SHAPE_CONE]: (state: appState ) => {
    state.shapes.cone = !state.shapes.cone;
  },
  [FILTER_SHAPE_SNOWFLAKE]: (state: appState ) => {
    state.shapes.snowflake = !state.shapes.snowflake;
  },
  [FILTER_SHAPE_FIGURE]: (state: appState ) => {
    state.shapes.figure = !state.shapes.figure;
  },

  [FILTER_SIZE_BIG]: (state: appState ) => {
    state.size.big = !state.size.big;
  },
  [FILTER_SIZE_MEDIUM]: (state: appState ) => {
    state.size.medium = !state.size.medium;
  },
  [FILTER_SIZE_SMALL]: (state: appState ) => {
    state.size.small = !state.size.small;
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

