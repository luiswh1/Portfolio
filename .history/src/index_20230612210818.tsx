import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyles';
import ScrollUpButton from './Components/ScrollUpButton/ScrollUpButton';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ScrollUpButton showBelow={ 250 }/>
    <App />
  </React.StrictMode>
);
