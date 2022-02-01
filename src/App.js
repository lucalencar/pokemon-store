import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.js';
import { ThemeProvider } from 'styled-components';
import Carrinho from './pages/Carrinho/Carrinho.js';
import Details from './pages/Details/Details.js';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Perfil from './pages/Perfil/Perfil.js';
<<<<<<< HEAD
import useTheme from './hooks/useChangeTheme.js';
=======
import {Provider} from "react-redux";
import Store from "../src/redux/store";
>>>>>>> laiza


function App() {

  const { theme } = useTheme();

  return (
<<<<<<< HEAD
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
=======
      
      <BrowserRouter basename="/">
        <Provider store={Store}>
>>>>>>> laiza
        <GlobalStyle />
        <div>
         
          <Routes>
          {/* <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/details" element={<Details />} />
<<<<<<< HEAD
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </div>
      </ThemeProvider>
=======
            <Route path="/carrinho" element={<Carrinho />} /> */}
            
          </Routes>
          </div>
       </Provider>   
>>>>>>> laiza
    </BrowserRouter>
  );
}

export default App;
