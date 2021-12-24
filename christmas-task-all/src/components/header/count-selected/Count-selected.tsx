import React from 'react';
import { useSelector } from 'react-redux';

import { catalogState } from '../../../abstract/types';
import './Count-selected.scss';

function CountSelected() {

  const { countSelected } = useSelector((state: catalogState) => state);

  return (
    <div className="count-select">
        <span>{countSelected}</span>
    </div>
  );
}

export default CountSelected;