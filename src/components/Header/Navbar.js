import * as S from "./header.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../../src/img/Logo.svg";
// import useCart from "../../hooks/useCart";

export default function Navbar() {

    // const { cartList } = useCart();

    const navigate = useNavigate();

    return (
        <S.Nav>
        <S.Image> <img src={Logo} alt="" className="LogoPokemon" />  </S.Image>
        <S.Button>
            {/* <S.Contador> {cartList.total} </S.Contador> */}
            <AiOutlineShoppingCart className="IconeShop" size={25} onClick={() => navigate('../carrinho', { replace: true })} />
        </S.Button>
        <S.Button> <AiOutlineUser className="IconeUser" size={25} /> </S.Button>
        <S.Button> <AiOutlineLogout className="IconeLogOut" size={25} /> </S.Button>
    </S.Nav>
    )
}