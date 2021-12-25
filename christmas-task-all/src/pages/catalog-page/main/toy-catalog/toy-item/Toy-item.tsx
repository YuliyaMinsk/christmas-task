import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appState, Toy } from '../../../../../common/types';
import { select } from '../../../../../redux/actions';
import './Toy-item.scss';

function ToyItem(props: Toy) { 

  const { toysData } = useSelector((state: appState) => state);

  const selectCardClass = toysData[parseInt(props.id)-1].select ? 'selected' : '';

  const urlToyImage = process.env.PUBLIC_URL + '/toys/' + props.id + '.png';

  const dispatch = useDispatch();

  return (
    <li className={"toy-item " + selectCardClass} onClick={() => dispatch(select(props.id))}>
      <h3 className="toy-title">{props.name}</h3>
      <img className="toy-image" src= {urlToyImage} />
      <div className="toy-description">
        <p>Количество: {props.count}</p>
        <p>Год покупки: {props.year}</p>
        <p>Форма: {props.shape}</p>
        <p>Цвет: {props.color}</p>
        <p>Размер: {props.size}</p>
        <p>Любимая? {props.favorite ? 'да' : 'нет'}</p>
      </div>      
    </li>
  );
}

export default ToyItem;


