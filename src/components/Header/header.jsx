import * as S from "./header.css";
import React from 'react';
import Logo from "../../../src/img/Logo.svg";
import Music from "../Player/Music";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AiOutlineUser, AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import PokemonList from "../Pokemons/PokemonLista";


function Header() {


    return (
        <>
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

            <Music />

        <PokemonList />
      
        </>
    )
 }

 export default Header;
