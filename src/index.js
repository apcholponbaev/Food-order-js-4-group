import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProviderContext } from './store';
import { FoodProvider } from './store/FoodContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <FoodProvider>
  <ProviderContext>
   <App />
 </ProviderContext>
 </FoodProvider>
);


 










reportWebVitals();
