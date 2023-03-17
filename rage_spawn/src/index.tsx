import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Spawn from './Spawn';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Spawn />
  </React.StrictMode>
);
