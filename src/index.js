import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux';
import Store from './Store';



ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
           <App/> 
        </Provider>
    </React.StrictMode>,
    document.querySelector('#root')
);

// Live Reloading fix
if (module.hot) {
    module.hot.accept();
}