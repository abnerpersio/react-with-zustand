import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import './ui/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
