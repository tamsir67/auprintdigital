import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BoutiqueContextProvider from './Context/BoutiqueContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BoutiqueContextProvider>
    <App />
  </BoutiqueContextProvider>
);