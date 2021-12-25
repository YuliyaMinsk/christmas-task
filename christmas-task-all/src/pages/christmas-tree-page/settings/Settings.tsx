import React from 'react';

import Music from './music/Music';
import Snow from './snow/Snow';

import './Settings.scss';

 function Settings() {
  return (
    <div className='settings'>      
      <Music />
      <Snow />
    </div>
  );
}

export default Settings;