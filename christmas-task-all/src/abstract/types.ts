import { toysData } from "./toys-data";

export interface Toy {
  id: string;
  name: string;
  count: string;
  year: string;
  shape: 'шар' | 'фигурка' | 'снежинка' | 'шишка' | 'колокольчик';
  color: 'белый' | 'красный' | 'желтый' | 'синий' | 'зелёный';
  size: 'большой' | 'средний' | 'малый';
  favorite: boolean;
  select: boolean;
}

export interface colorsName {
  white: boolean,
  yellow: boolean,
  red: boolean,
  blue: boolean,
  green: boolean,
}

export interface shapeName {
  ball: boolean,
  bell: boolean,
  cone: boolean,
  snowflake: boolean,
  figure: boolean,
}

export interface sizeName {
  big: boolean,
  medium: boolean,
  small: boolean,
}

export interface range {
  start: number,
  end: number,
}

export interface catalogState {
  colors: colorsName,
  shapes: shapeName,
  size: sizeName,
  favorite: boolean,
  count: range,
  year: range,
  sort: string,
  countSelected: number,
  search: string,
  toysData: Toy[],
}

export const defaultCatalogState: catalogState = {
  colors: {
    white: false,
    yellow: false,
    red: false,
    blue: false,
    green: false,
  },
  shapes: {
    ball: false,
    bell: false,
    cone: false,
    snowflake: false,
    figure: false,
  },
  size: {
    big: false,
    medium: false,
    small: false,
  },
  favorite: false,
  count: {
    start: 1,
    end: 12,    
  },
  year: {
    start: 1940,
    end: 2020,
  },
  sort: 'name-max',
  countSelected: 0,
  search: '',
  toysData: toysData,
}


export interface settings {
  snow: boolean,
  music: boolean,
}

export interface treeState {
  [x: string]: any;
  settings: settings,
}

export const defaultTreeState: treeState = {
  settings: {
    snow: false,
    music: false,
  }
};
