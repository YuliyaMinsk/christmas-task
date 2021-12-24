import React from 'react';
import { useSelector } from 'react-redux';

import { Constants } from '../../../../abstract/Constants';
import ToyItem from './toy-item/Toy-item';
import { catalogState, Toy } from "../../../../abstract/types";
import './Toy-catalog.scss';
import Modal from './modal/Modal';

function ToyCatalog() {

  const { colors, shapes, size, favorite, count, year, sort, countSelected, search, toysData } = useSelector((state: catalogState) => state);

  let toysFilteredData = toysData.filter(item => {
    if (((colors.white) && (item.color === 'белый')) || 
        ((colors.yellow) && (item.color === 'желтый')) ||
        ((colors.red) && (item.color === 'красный')) ||
        ((colors.blue) && (item.color === 'синий')) ||
        ((colors.green) && (item.color === 'зелёный'))) {
      return true;
    }      
    if ((!colors.white) && (!colors.yellow) && (!colors.red) && (!colors.blue) && (!colors.green)) {
      return true;
    }
    return false;
  });

  toysFilteredData = toysFilteredData.filter(item => {
    if (((shapes.ball) && (item.shape=== 'шар')) || 
        ((shapes.bell) && (item.shape === 'колокольчик')) ||
        ((shapes.cone) && (item.shape === 'шишка')) ||
        ((shapes.snowflake) && (item.shape === 'снежинка')) ||
        ((shapes.figure) && (item.shape === 'фигурка'))) {
      return true;
    }      
    if ((!shapes.ball) && (!shapes.bell) && (!shapes.cone) && (!shapes.snowflake) && (!shapes.figure)) {
      return true;
    }
    return false;
  });

  toysFilteredData = toysFilteredData.filter(item => {
    if (((size.big) && (item.size === 'большой')) || 
        ((size.medium) && (item.size === 'средний')) ||
        ((size.small) && (item.size === 'малый'))) {
      return true;
    }      
    if ((!size.big) && (!size.medium) && (!size.small)) {
      return true;
    }
    return false;
  });

  toysFilteredData = toysFilteredData.filter(item => {
    if (favorite) {
     if (item.favorite) {
      return true;
      }    
      return false;
    }
    return true;
  });

  toysFilteredData = toysFilteredData.filter(item => {
    if ((count.start <= parseInt(item.count)) && 
        (count.end >= parseInt(item.count))) {
      return true;
    }      
    return false;
  });

  toysFilteredData = toysFilteredData.filter(item => {
    if ((year.start <= parseInt(item.year)) && 
        (year.end >= parseInt(item.year))) {
      return true;
    }      
    return false;
  });

  toysFilteredData = toysFilteredData.filter(item => {
    if (item.name.toLowerCase().includes(search)) {
      return true;
    }      
    return false;
  });

  if (sort === 'sort-name-max') {
    toysFilteredData = toysFilteredData.sort((a, b) => {
      if (a.name > b.name) {return 1;}
      if (a.name < b.name) {return -1;}
      return 0;
    });
  } else if (sort === 'sort-name-min') {
    toysFilteredData = toysFilteredData.sort((a, b) => {
      if (a.name < b.name) {return 1;}
      if (a.name > b.name) {return -1;}
      return 0;
    });
  } else if (sort === 'sort-year-max') {
    toysFilteredData = toysFilteredData.sort(compareYearInc);
  } else if (sort === 'sort-year-min') {
    toysFilteredData = toysFilteredData.sort(compareYearDec);
  } 

  const toyElements = toysFilteredData.map(item => (<ToyItem key={item.id} {...item} />));

  return (
    <>
    <ul className="toy-list">
      {toyElements}
    </ul>
    {(countSelected > 20) && <Modal />}
    {(toyElements.length === 0) && <p className="sorry-text">{Constants.SORRY_TEXT}</p>}
    </>
  );
}

function compareYearInc(a: Toy, b: Toy) {
  return parseInt(a.year) - parseInt(b.year);
}

function compareYearDec(a: Toy, b: Toy) {
  return parseInt(b.year) - parseInt(a.year);
}

export default ToyCatalog;
