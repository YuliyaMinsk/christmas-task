import { createAction } from "@reduxjs/toolkit";

// CATALOG

export const FILTER_COLOR = 'FILTER_COLOR';

export const FILTER_SHAPE = 'FILTER_SHAPE';

export const FILTER_SIZE = 'FILTER_SIZE';

export const FILTER_FAVORITE = 'FILTER_FAVORITE';

export const RANGE_COUNT = 'RANGE_COUNT';
export const RANGE_YEAR = 'RANGE_YEAR';

export const SORT_CARDS = 'SORT_CARDS';

export const SET_TO_DEFAULT = 'SET_TO_DEFAULT';
export const ALL_CLEAR = 'ALL_CLEAR';

export const LOCAL_STORAGE_CLEAR = 'LOCAL_STORAGE_CLEAR';

export const SELECT = 'SELECT';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const SEARCH_CARDS = 'SEARCH_CARDS';
export const SEARCH_CLEAR = 'SEARCH_CLEAR';

export const filterColor = createAction<string, typeof FILTER_COLOR>(FILTER_COLOR);

export const filterShape = createAction<string, typeof FILTER_SHAPE>(FILTER_SHAPE);

export const filterSize = createAction<string, typeof FILTER_SIZE>(FILTER_SIZE);

export const filterFavorite = createAction(FILTER_FAVORITE);

export const rangeCount = createAction<string[], typeof RANGE_COUNT>(RANGE_COUNT);
export const rangeYear = createAction<string[], typeof RANGE_YEAR>(RANGE_YEAR);

export const sortCards = createAction<string, typeof SORT_CARDS>(SORT_CARDS);

export const setToDefault = createAction(SET_TO_DEFAULT);
export const allClear = createAction(ALL_CLEAR);

export const localStorageClear = createAction(LOCAL_STORAGE_CLEAR);

export const select = createAction<string, typeof SELECT>(SELECT);
export const closeModal = createAction(CLOSE_MODAL);

export const searchCards = createAction<string, typeof SEARCH_CARDS>(SEARCH_CARDS);
export const searchClear = createAction(SEARCH_CLEAR);

// TREE

export const SETTINGS_SNOW = 'SETTINGS_SNOW';
export const SETTINGS_MUSIC = 'SETTINGS_MUSIC';

export const SELECT_BACKGROUND = 'SELECT_BACKGROUND';
export const SELECT_TREE = 'SELECT_TREE';
export const SELECT_GARLAND = 'SELECT_GARLAND';

export const selectSnow = createAction(SETTINGS_SNOW);
export const selectMusic = createAction(SETTINGS_MUSIC);

export const selectBackground = createAction<string, typeof SELECT_BACKGROUND>(SELECT_BACKGROUND);
export const selectTree = createAction<string, typeof SELECT_TREE>(SELECT_TREE);
export const selectGarland = createAction<string, typeof SELECT_GARLAND>(SELECT_GARLAND);
