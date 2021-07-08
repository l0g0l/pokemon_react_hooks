import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './Config/Routes';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

