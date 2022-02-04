import * as S from "./header.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../../src/img/Logo.svg";
<<<<<<< HEAD
import useCart from "../../hooks/useCart";
=======
import {Link} from 'react-router-dom'

>>>>>>> 8be054c91633bd96ca6447d1e92d11167e26cc79

export default function Navbar() {

    const { cartList } = useCart();

    const navigate = useNavigate();

    return (
        <S.Nav>
            <S.Image> 
            <Link to='/Home'>
                <img src={Logo} alt="" className="LogoPokemon"/> 
                </Link>
             </S.Image>
            <S.Button> 
                <S.Contador>  0   </S.Contador>
                <Link to='/Carrinho'>
                <AiOutlineShoppingCart className="IconeShop" size={25} /> 
                </Link>
            </S.Button>
            <S.Button> 
            <Link to='/Perfil'>
                <AiOutlineUser className="IconeUser" size={25} /> 
                </Link>
             </S.Button>
            <S.Button> 
            <Link to='/'>
                <AiOutlineLogout className="IconeLogOut" size={25} /> 
                </Link>
                </S.Button>
        </S.Nav>
    )
}

