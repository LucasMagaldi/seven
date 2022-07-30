import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import './index.css';

import { theme } from './styles/theme';
import GlobalStyles from './styles/global-styles';
import App from './templates/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
      <GlobalStyles/>   
  </React.StrictMode>
);
