import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.js';
import Carrinho from './pages/Carrinho/Carrinho.js';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Perfil from './pages/Perfil/Perfil.js';
import { ThemeProvider } from "styled-components";
import useTheme from './hooks/useChangeTheme.js';

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
            <Route path="/Home" element={<Home />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="/Perfil" element={<Perfil />} />
            
          </Routes>
          </div>
       </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
