import { createAction } from "@reduxjs/toolkit";

export const SETTINGS_SNOW = 'SETTINGS_SNOW';
export const SETTINGS_MUSIC = 'SETTINGS_MUSIC';

export const selectSnow = createAction(SETTINGS_SNOW);
export const selectMusic = createAction(SETTINGS_MUSIC);
