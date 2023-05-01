import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import cursor context provider 
import CursorProvider from './context/CursorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <CursorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorProvider>

  
);
