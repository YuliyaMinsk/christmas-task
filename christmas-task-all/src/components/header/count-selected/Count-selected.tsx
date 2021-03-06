import React from 'react';
import { useSelector } from 'react-redux';

import { appState } from '../../../common/types';
import './Count-selected.scss';

function CountSelected() {

  const { countSelected } = useSelector((state: appState) => state);

  return (
    <div className="count-select">
        <span>{countSelected}</span>
    </div>
  );
}

export default CountSelected;