import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CalculatorApp from './components/CalculatorApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculatorApp />
  </React.StrictMode>
);

reportWebVitals();
