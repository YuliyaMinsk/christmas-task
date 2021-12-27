import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import { Constants } from '../../../common/Constants';
import { allClear, filterColorBlue, filterColorGreen, filterColorRed, filterColorWhite, filterColorYellow, filterFavorite, 
  filterShapeBall, filterShapeBell, filterShapeCone, filterShapeFigure, filterShapeSnowflake, filterSizeBig, 
  filterSizeMedium, filterSizeSmall, rangeCount, rangeYear, setToDefault, sortCards } from '../../../redux/actions';
import { appState } from '../../../common/types';
import './Filter.scss';

function Filter() {

  const { colors, shapes, size, favorite, count, year  } = useSelector((state: appState) => state);

  const isActiveButtonWhite= (colors.white) ? 'active' : '';
  const isActiveButtonYellow = (colors.yellow) ? 'active' : '';
  const isActiveButtonRed = (colors.red) ? 'active' : '';
  const isActiveButtonBlue = (colors.blue) ? 'active' : '';
  const isActiveButtonGreen = (colors.green) ? 'active' : '';

  const isActiveButtonBall = (shapes.ball) ? 'active' : '';
  const isActiveButtonBell = (shapes.bell) ? 'active' : '';
  const isActiveButtonCone = (shapes.cone) ? 'active' : '';
  const isActiveButtonSnowflake = (shapes.snowflake) ? 'active' : '';
  const isActiveButtonFigure = (shapes.figure) ? 'active' : '';

  const isActiveButtonBig = (size.big) ? 'active' : '';
  const isActiveButtonMedium = (size.medium) ? 'active' : '';
  const isActiveButtonSmall = (size.small) ? 'active' : '';

  const isActiveButtonFavorite = (favorite) ? 'active' : '';

  const dispatch = useDispatch();

  return (
    <div className="filter-box">
      <div className="filter-value">
        <h3 className="filter-title">{Constants.FILTER_VALUE}</h3>
        <div className="filter-list filter-shape">
          <p className="filter-name">{Constants.FILTER_SHAPE}</p>
          <button className={"button-shape button-ball " + isActiveButtonBall} onClick={() => dispatch(filterShapeBall())} ></button>
          <button className={"button-shape button-bell " + isActiveButtonBell} onClick={() => dispatch(filterShapeBell())} ></button>
          <button className={"button-shape button-cone " + isActiveButtonCone} onClick={() => dispatch(filterShapeCone())} ></button>
          <button className={"button-shape button-snowflake " + isActiveButtonSnowflake} onClick={() => dispatch(filterShapeSnowflake())} ></button>
          <button className={"button-shape button-figure " + isActiveButtonFigure} onClick={() => dispatch(filterShapeFigure())} ></button>
        </div>
        <div className="filter-list filter-color">
          <p className="filter-name">{Constants.FILTER_COLOR}</p>
          <button className={"button-color button-white " + isActiveButtonWhite} onClick={() => dispatch(filterColorWhite())}></button>
          <button className={"button-color button-yellow " + isActiveButtonYellow}  onClick={() => dispatch(filterColorYellow())}></button>
          <button className={"button-color button-red " + isActiveButtonRed} onClick={() => dispatch(filterColorRed())}></button>
          <button className={"button-color button-blue " + isActiveButtonBlue} onClick={() => dispatch(filterColorBlue())}></button>
          <button className={"button-color button-green " + isActiveButtonGreen} onClick={() => dispatch(filterColorGreen())}></button>
        </div>
        <div className="filter-list filter-size">
          <p className="filter-name">{Constants.FILTER_SIZE}</p>
          <button className={"button-size button-big " + isActiveButtonBig} onClick={() => dispatch(filterSizeBig())}></button>
          <button className={"button-size button-medium " + isActiveButtonMedium} onClick={() => dispatch(filterSizeMedium())}></button>
          <button className={"button-size button-small " + isActiveButtonSmall} onClick={() => dispatch(filterSizeSmall())}></button>
        </div>
        <div className="filter-list filter-favorite">
          <p className="filter-name">{Constants.FILTER_FAVORITE}</p>
          <div className="form-favorite-box">
            <button className={"button-color button-favorite " + isActiveButtonFavorite} onClick={() => dispatch(filterFavorite())}></button>
          </div>
        </div>
      </div>
      <div className="filter-range">
        <h3 className="filter-title">{Constants.FILTER_RANGE}</h3>
        <div className="filter-count">
          {Constants.FILTER_COUNT}
          <div className="range-box">
            <span className="range-num">{count.start}</span>
            <Nouislider range={{ min: 1, max: 12 }} start={[count.start, count.end]} step={1} onSlide={(e: string[]) => dispatch(rangeCount(e))} connect />
            <span className="range-num">{count.end}</span>
          </div>
        </div>
        <div className="filter-year">
          {Constants.FILTER_YEAR}
          <div className="range-box">
            <span className="range-num">{year.start}</span>
            <Nouislider range={{ min: 1940, max: 2020 }} start={[year.start, year.end]} step={1} onSlide={(e: string[]) => dispatch(rangeYear(e))} connect />
            <span className="range-num">{year.end}</span>
          </div>
        </div>
      </div>
      <div className="filter-sort">
        <h3 className="filter-title">{Constants.FILTER_SORT}</h3>
        <select className="filter-sort-select" onChange={(e) => dispatch(sortCards(e.target.value))}>
          <option selected disabled>{Constants.SORT_SELECT}</option>
          <option value="sort-name-max">{Constants.SORT_NAME_MAX}</option>
          <option value="sort-name-min">{Constants.SORT_NAME_MIN}</option>
          <option value="sort-year-max">{Constants.SORT_YEAR_MAX}</option>
          <option value="sort-year-min">{Constants.SORT_YEAR_MIN}</option>
        </select>
        <button className="button-default" onClick={() => dispatch(setToDefault())}>{Constants.FILTER_DEFAULT}</button>        
        <button className="button-default" onClick={() => {dispatch(allClear()); localStorage.clear();}}>{Constants.FILTER_SETTINGS}</button>        
      </div>
    </div>
  );
}

export default Filter;
