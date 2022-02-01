import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.js';
import Carrinho from './pages/Carrinho/Carrinho.js';
import Details from './pages/Details/Details.js';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Perfil from './pages/Perfil/Perfil.js';
import {Provider} from "react-redux";
import Store from "../src/redux/store";
import Modal from './components/Modal/modal.component';

// import { ModalProvider } from './hooks/modal.context';


function App() {
  return (
      
      <BrowserRouter basename="/">
        <Provider store={Store}>
        {/* <ModalProvider> */}
        <GlobalStyle />
        <div>
         
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/details/:url" element={<Details />} />
            
  
            {/* <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Carrinho" element={<Carrinho />} /> */}
            
          </Routes>
          </div>
       {/* </ModalProvider>    */}
       </Provider>
    </BrowserRouter>
  );
}

export default App;
