import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider>
      <App/>
    </Provider>
  </>
);

