import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appState } from '../../../../common/types';
import { selectSnow } from '../../../../redux/actions';
import './Snow.scss';

function Snow() {

  const { settings } = useSelector((state: appState) => state);
  
  const isActiveButtonSnow = (settings.snow) ? 'active' : '';

  const dispatch = useDispatch();

  return (
    <>      
      <button className={"button-snow " + isActiveButtonSnow} onClick={() => dispatch(selectSnow())}></button>
    </>
  );
}

export default Snow;