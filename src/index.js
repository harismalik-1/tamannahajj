import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/styles.scss';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
