import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './styles/main.scss'
import reportWebVitals from './reportWebVitals';
import AppRoutes from './AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppRoutes/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
