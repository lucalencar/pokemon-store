import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global.js';
import Carrinho from './pages/Carrinho/Carrinho.js';
import Details from './pages/Details/Details.js';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Perfil from './pages/Perfil/Perfil.js';
import CarrinhoModal from './pages/Carrinho/CarrinhoModal.js';

function App() {
  return (
      <BrowserRouter basename="/">
        <GlobalStyle />
        <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/details" element={<Details />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/carrinhomodal" element={<CarrinhoModal />} />
          </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
