import * as S from "./header.css";
import React from 'react';
import Logo from "../../../src/img/Logo.svg";
import Music from "../Player/Music";
import {Link} from 'react-router-dom'


import { AiOutlineUser, AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import PokemonList from "../Pokemons/PokemonLista";
function Header() {

    return(
        <>
        <S.Nav>
            <S.Image> 
            <Link to='/Home'>
                <img src={Logo} alt="" className="LogoPokemon"/> 
                </Link>
             </S.Image>
            <S.Button> 
                <S.Contador>  0   </S.Contador>
                <AiOutlineShoppingCart className="IconeShop" size={25} /> 
            </S.Button>
            <S.Button> <AiOutlineUser className="IconeUser" size={25} /> </S.Button>
            <S.Button> <AiOutlineLogout className="IconeLogOut" size={25} /> </S.Button>
        </S.Nav>

        <Music />

     

        <PokemonList />
      
        </>
    )




 }

 export default Header;