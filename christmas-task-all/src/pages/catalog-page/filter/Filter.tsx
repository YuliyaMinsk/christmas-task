import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import { Constants } from '../../../common/Constants';
import { allClear, filterColor, filterFavorite, filterShape, filterSize, 
  rangeCount, rangeYear, setToDefault, sortCards } from '../../../redux/actions';
import { appState } from '../../../common/types';
import './Filter.scss';

function Filter() {

  const { colors, shapes, size, favorite, count, year  } = useSelector((state: appState) => state);

  const classesButtonWhite= (colors.white) ? 'button-color button-white active' : 'button-color button-white';
  const classesButtonYellow = (colors.yellow) ? 'button-color button-yellow active' : 'button-color button-yellow';
  const classesButtonRed = (colors.red) ? 'button-color button-red active' : 'button-color button-red';
  const classesButtonBlue = (colors.blue) ? 'button-color button-blue active' : 'button-color button-blue';
  const classesButtonGreen = (colors.green) ? 'button-color button-green active' : 'button-color button-green';

  const classesButtonBall = (shapes.ball) ? 'button-shape button-ball active' : 'button-shape button-ball';
  const classesButtonBell = (shapes.bell) ? 'button-shape button-bell active' : 'button-shape button-bell';
  const classesButtonCone = (shapes.cone) ? 'button-shape button-cone active' : 'button-shape button-cone';
  const classesButtonSnowflake = (shapes.snowflake) ? 'button-shape button-snowflake active' : 'button-shape button-snowflake';
  const classesButtonFigure = (shapes.figure) ? 'button-shape button-figure active' : 'button-shape button-figure';

  const classesButtonBig = (size.big) ? 'button-size button-big active' : 'button-size button-big';
  const classesButtonMedium = (size.medium) ? 'button-size button-medium active' : 'button-size button-medium';
  const classesButtonSmall = (size.small) ? 'button-size button-small active' : 'button-size button-small';

  const classesButtonFavorite = (favorite) ? 'button-color button-favorite active' : 'button-color button-favorite';

  const dispatch = useDispatch();

  return (
    <div className="filter-box">
      <div className="filter-value">
        <h3 className="filter-title">{Constants.FILTER_VALUE}</h3>
        <div className="filter-list filter-shape">
          <p className="filter-name">{Constants.FILTER_SHAPE}</p>
          <button className={classesButtonBall} onClick={() => dispatch(filterShape('ball'))} ></button>
          <button className={classesButtonBell} onClick={() => dispatch(filterShape('bell'))} ></button>
          <button className={classesButtonCone} onClick={() => dispatch(filterShape('cone'))} ></button>
          <button className={classesButtonSnowflake} onClick={() => dispatch(filterShape('snowflake'))} ></button>
          <button className={classesButtonFigure} onClick={() => dispatch(filterShape('figure'))} ></button>
        </div>
        <div className="filter-list filter-color">
          <p className="filter-name">{Constants.FILTER_COLOR}</p>
          <button className={classesButtonWhite} onClick={() => dispatch(filterColor('white'))}></button>
          <button className={classesButtonYellow}  onClick={() => dispatch(filterColor('yellow'))}></button>
          <button className={classesButtonRed} onClick={() => dispatch(filterColor('red'))}></button>
          <button className={classesButtonBlue} onClick={() => dispatch(filterColor('blue'))}></button>
          <button className={classesButtonGreen} onClick={() => dispatch(filterColor('green'))}></button>
        </div>
        <div className="filter-list filter-size">
          <p className="filter-name">{Constants.FILTER_SIZE}</p>
          <button className={classesButtonBig} onClick={() => dispatch(filterSize('big'))}></button>
          <button className={classesButtonMedium} onClick={() => dispatch(filterSize('medium'))}></button>
          <button className={classesButtonSmall} onClick={() => dispatch(filterSize('small'))}></button>
        </div>
        <div className="filter-list filter-favorite">
          <p className="filter-name">{Constants.FILTER_FAVORITE}</p>
          <div className="form-favorite-box">
            <button className={classesButtonFavorite} onClick={() => dispatch(filterFavorite())}></button>
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
        <select className="filter-sort-select" defaultValue={Constants.SORT_SELECT} onChange={(event) => dispatch(sortCards(event.target.value))}>
          <option disabled>{Constants.SORT_SELECT}</option>
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
