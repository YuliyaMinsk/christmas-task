import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Constants } from '../../common/Constants';
import SnowFall from '../christmas-tree-page/settings/snow/snow-fall/Snow-fall';
import './Welcome-page.scss';

 function WelcomePage() {

  const navigate = useNavigate();

  return (
    <div className="welcome-page">            
      <p className="welcome-text">{Constants.WELCOME_TXT}</p>
      
      <Link className="welcome-button" to="/catalog">{Constants.MENU_CATALOG}</Link>
    </div> 
  );
}

export default WelcomePage;
