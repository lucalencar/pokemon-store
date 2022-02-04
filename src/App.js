import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.js';
import Carrinho from './pages/Carrinho/Carrinho.js';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Perfil from './pages/Perfil/Perfil.js';
import {Provider} from "react-redux";
import Store from "../src/redux/store";

function App() {
<<<<<<< HEAD
  return (
      
      <BrowserRouter basename="/">
        <Provider store={Store}>
        <GlobalStyle />
        <div>
         
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/details/:url" element={<Details />} /> */}
            
  
            {/* <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Carrinho" element={<Carrinho />} /> */}
            
          </Routes>
          </div>
       </Provider>
    </BrowserRouter>
  );
=======

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
        </Routes>
      </div>
    </ThemeProvider>
  </BrowserRouter>
);

>>>>>>> staging
}

export default App;
