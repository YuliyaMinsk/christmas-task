import { createAction } from "@reduxjs/toolkit";

// CATALOG

export const FILTER_COLOR_WHITE = 'FILTER_COLOR_WHITE';
export const FILTER_COLOR_YELLOW = 'FILTER_COLOR_YELLOW';
export const FILTER_COLOR_RED = 'FILTER_COLOR_RED';
export const FILTER_COLOR_BLUE = 'FILTER_COLOR_BLUE';
export const FILTER_COLOR_GREEN = 'FILTER_COLOR_GREEN';

export const FILTER_SHAPE_BALL = 'FILTER_SHAPE_BALL';
export const FILTER_SHAPE_BELL = 'FILTER_SHAPE_BELL';
export const FILTER_SHAPE_CONE = 'FILTER_SHAPE_CONE';
export const FILTER_SHAPE_SNOWFLAKE = 'FILTER_SHAPE_SNOWFLAKE';
export const FILTER_SHAPE_FIGURE = 'FILTER_SHAPE_FIGURE';

export const FILTER_SIZE_BIG = 'FILTER_SIZE_BIG';
export const FILTER_SIZE_MEDIUM = 'FILTER_SIZE_MEDIUM';
export const FILTER_SIZE_SMALL = 'FILTER_SIZE_SMALL';

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

export const filterColorWhite = createAction(FILTER_COLOR_WHITE);
export const filterColorYellow = createAction(FILTER_COLOR_YELLOW);
export const filterColorRed = createAction(FILTER_COLOR_RED);
export const filterColorBlue = createAction(FILTER_COLOR_BLUE);
export const filterColorGreen = createAction(FILTER_COLOR_GREEN);

export const filterShapeBall = createAction(FILTER_SHAPE_BALL);
export const filterShapeBell = createAction(FILTER_SHAPE_BELL);
export const filterShapeCone = createAction(FILTER_SHAPE_CONE);
export const filterShapeSnowflake = createAction(FILTER_SHAPE_SNOWFLAKE);
export const filterShapeFigure = createAction(FILTER_SHAPE_FIGURE);

export const filterSizeBig = createAction(FILTER_SIZE_BIG);
export const filterSizeMedium = createAction(FILTER_SIZE_MEDIUM);
export const filterSizeSmall = createAction(FILTER_SIZE_SMALL);

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
