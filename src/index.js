import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <App /> 
    </Router>
  </React.StrictMode>,
)

reportWebVitals()