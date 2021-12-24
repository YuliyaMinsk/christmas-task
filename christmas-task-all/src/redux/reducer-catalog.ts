import { createReducer } from "@reduxjs/toolkit";

import { ALL_CLEAR, CLOSE_MODAL, FILTER_COLOR_BLUE, FILTER_COLOR_GREEN, FILTER_COLOR_RED, FILTER_COLOR_WHITE, FILTER_COLOR_YELLOW, 
  FILTER_FAVORITE, FILTER_SHAPE_BALL, FILTER_SHAPE_BELL, FILTER_SHAPE_CONE, FILTER_SHAPE_FIGURE, FILTER_SHAPE_SNOWFLAKE, 
  FILTER_SIZE_BIG, FILTER_SIZE_MEDIUM, FILTER_SIZE_SMALL, RANGE_COUNT, RANGE_YEAR, SEARCH_CARDS, SEARCH_CLEAR, 
  SELECT, SET_TO_DEFAULT, SORT_CARDS} from "./actions-catalog";
import { catalogState, defaultCatalogState } from "../abstract/types";

const catalogReducer = createReducer(defaultCatalogState, {
  [FILTER_COLOR_WHITE]: (state: catalogState) => {
    state.colors.white = !state.colors.white;
  },
  [FILTER_COLOR_YELLOW]: (state: catalogState ) => {
    state.colors.yellow = !state.colors.yellow;
  },
  [FILTER_COLOR_RED]: (state: catalogState ) => {
    state.colors.red = !state.colors.red;
  },
  [FILTER_COLOR_BLUE]: (state: catalogState ) => {
    state.colors.blue = !state.colors.blue;
  },
  [FILTER_COLOR_GREEN]: (state: catalogState ) => {
    state.colors.green = !state.colors.green;
  },

  [FILTER_SHAPE_BALL]: (state: catalogState ) => {
    state.shapes.ball = !state.shapes.ball;
  },
  [FILTER_SHAPE_BELL]: (state: catalogState ) => {
    state.shapes.bell = !state.shapes.bell;
  },
  [FILTER_SHAPE_CONE]: (state: catalogState ) => {
    state.shapes.cone = !state.shapes.cone;
  },
  [FILTER_SHAPE_SNOWFLAKE]: (state: catalogState ) => {
    state.shapes.snowflake = !state.shapes.snowflake;
  },
  [FILTER_SHAPE_FIGURE]: (state: catalogState ) => {
    state.shapes.figure = !state.shapes.figure;
  },

  [FILTER_SIZE_BIG]: (state: catalogState ) => {
    state.size.big = !state.size.big;
  },
  [FILTER_SIZE_MEDIUM]: (state: catalogState ) => {
    state.size.medium = !state.size.medium;
  },
  [FILTER_SIZE_SMALL]: (state: catalogState ) => {
    state.size.small = !state.size.small;
  },

  [FILTER_FAVORITE]: (state: catalogState ) => {
    state.favorite = !state.favorite;
  },
  
  [RANGE_COUNT]: (state: catalogState,  { payload }: { payload: string[] }) => {
    state.count.start = parseInt(payload[0]);
    state.count.end = parseInt(payload[1]);
  },
  [RANGE_YEAR]: (state: catalogState,  { payload }: { payload: string[] }) => {
    state.year.start = parseInt(payload[0]);
    state.year.end = parseInt(payload[1]);
  },

  [SORT_CARDS]: (state: catalogState, { payload }: { payload: string } ) => {
    state.sort = payload;
  },
  
  [SET_TO_DEFAULT]: (state: catalogState ) => {
    state.colors = defaultCatalogState.colors;
    state.shapes = defaultCatalogState.shapes;
    state.size = defaultCatalogState.size;
    state.favorite = defaultCatalogState.favorite;
    state.count = defaultCatalogState.count;
    state.year = defaultCatalogState.year;
  },
  [ALL_CLEAR]: (state: catalogState ) => {
    state.colors = defaultCatalogState.colors;
    state.shapes = defaultCatalogState.shapes;
    state.size = defaultCatalogState.size;
    state.favorite = defaultCatalogState.favorite;
    state.count = defaultCatalogState.count;
    state.year = defaultCatalogState.year;
    state.sort = defaultCatalogState.sort;
    state.countSelected = defaultCatalogState.countSelected;
    state.toysData = defaultCatalogState.toysData;
  },

  [SELECT]: (state: catalogState, { payload }: { payload: string }) => {
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
  [CLOSE_MODAL]: (state: catalogState ) => {
    state.countSelected--;
  },

  [SEARCH_CARDS]: (state: catalogState, { payload }: { payload: string }) => {
    state.search = payload;
    state.search = state.search.toLowerCase();
  },
  [SEARCH_CLEAR]: (state: catalogState ) => {
    state.search = '';
  },
});

export default catalogReducer;

