import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './pages/login/login';
import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>,
);
