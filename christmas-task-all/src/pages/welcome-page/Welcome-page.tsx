import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Constants } from '../../common/Constants';
import './Welcome-page.scss';

 function WelcomePage() {

  const navigate = useNavigate();

  return (
    <div className="welcome-page">      
      <p className="welcome-text">{Constants.WELCOME_TXT}</p>
      
      <button className="welcome-button" onClick={() => navigate("/catalog")}>{Constants.WELCOME_BUTTON}</button>
    </div>
  );
}

export default WelcomePage;