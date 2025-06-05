import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppStateProvider } from './AppState';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );


const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('找不到 #root 元素，请检查 public/index.html');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);