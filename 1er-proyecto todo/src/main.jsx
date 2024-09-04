import React from 'react';
import { createRoot } from 'react-dom/client'
import { App } from './App/App.jsx'
import '@fontsource-variable/heebo';
import './index.css'
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
