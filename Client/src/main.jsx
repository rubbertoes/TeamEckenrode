import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);
