import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Use createRoot to manage the root element
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
); 