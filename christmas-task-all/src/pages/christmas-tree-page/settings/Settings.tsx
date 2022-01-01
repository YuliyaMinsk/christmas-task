import React from 'react';
import { useDispatch } from 'react-redux';

import Music from './music/Music';
import Snow from './snow/Snow';
import { Constants } from '../../../common/Constants';
import { allClear } from '../../../redux/actions';
import './Settings.scss';

 function Settings() {

  const dispatch = useDispatch();

  return (
    <div className='settings'>   
      <div className='options'>
        <Music />
        <Snow />
      </div>   
      <button className="button-default page-tree" onClick={() => {dispatch(allClear()); localStorage.clear();}}>{Constants.FILTER_SETTINGS}</button>
    </div>
  );
}

export default Settings;
