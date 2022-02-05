import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.js';
import Carrinho from './pages/Carrinho/Carrinho.js';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Perfil from './pages/Perfil/Perfil.js';
import { ThemeProvider } from "styled-components";
import useTheme from './hooks/useChangeTheme.js';
import Password from "../src/pages/Password/Password";
import Cadastro from "../src/pages/Cadastro/Cadastro";

function App() {

  const { theme } = useTheme();

return (
  <BrowserRouter basename="/">
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/password" element={<Password />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </ThemeProvider>
  </BrowserRouter>
);

}

export default App;
