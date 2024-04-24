import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PresuProvider } from './Context/PresupuestoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PresuProvider>
      <App />
  </PresuProvider>

);


reportWebVitals();
