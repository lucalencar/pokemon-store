import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {Store, persistor} from "./redux/store";


ReactDOM.render(
  <React.StrictMode>
  <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
    
        <App />
       
      </PersistGate>
    </Provider>  </React.StrictMode>,
  document.getElementById('root')
);