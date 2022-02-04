import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.js';
import Carrinho from './pages/Carrinho/Carrinho.js';
import Details from './pages/Details/Details.js';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Perfil from './pages/Perfil/Perfil.js';
import Cadastro from './pages/Cadastro/Cadastro.js';
import {Provider} from "react-redux";
import Store from "../src/redux/store";


function App() {
  return (
      
      <BrowserRouter basename="/">
        <Provider store={Store}>
        <GlobalStyle />
        <div>
         
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path="/login/Home" element={<Home />} />
  
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="/Cadastro" element={<Cadastro/>} />
            
          </Routes>
          </div>
       </Provider>   
    </BrowserRouter>
  );
}

export default App;
