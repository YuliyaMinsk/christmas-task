import { createReducer } from "@reduxjs/toolkit";

import { SETTINGS_MUSIC, SETTINGS_SNOW } from "./actions-tree";
import { defaultTreeState, treeState } from "../abstract/types";


const treeReducer = createReducer(defaultTreeState, {
  [SETTINGS_SNOW]: (state: treeState ) => {
    state.settings.snow = !state.settings.snow;
  },
  [SETTINGS_MUSIC]: (state: treeState ) => {
    state.settings.music = !state.settings.music;
  },
});

export default treeReducer;