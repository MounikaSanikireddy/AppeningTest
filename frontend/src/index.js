import React from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from 'react-dom';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    
    </BrowserRouter> */}
    <App />
    
  </React.StrictMode>
);


