import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PresuProvider } from './Context/PresupuestoContext';
import { UserProvider } from './Context/userContext';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <UserProvider>

    <PresuProvider>

      <App />
      
    </PresuProvider>

  </UserProvider>

);


reportWebVitals();
