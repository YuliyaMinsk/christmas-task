import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { showEstimate } from './common/estimate';
import './index.scss';

showEstimate();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
