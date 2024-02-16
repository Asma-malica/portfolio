// Example using createRoot in index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Replace with your main component

const root = document.getElementById('root');

// Use createRoot to render your app
const rootInstance = ReactDOM.createRoot(root);

rootInstance.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
