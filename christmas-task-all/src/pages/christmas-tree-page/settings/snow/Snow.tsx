import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { appState } from '../../../../common/types';
import { selectSnow } from '../../../../redux/actions';
import './Snow.scss';

function Snow() {

  const { settings } = useSelector((state: appState) => state);
  
  const classesButtonSnow = (settings.snow) ? 'button-snow active' : 'button-snow';

  const dispatch = useDispatch();

  return (
    <>      
      <button className={classesButtonSnow} onClick={() => dispatch(selectSnow())}></button>
    </>
  );
}

export default Snow;