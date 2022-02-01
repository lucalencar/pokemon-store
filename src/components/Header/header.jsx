import * as S from "./header.css";
import React from 'react';
import Logo from "../../../src/img/Logo.svg";
import Music from "../Player/Music";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AiOutlineUser, AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import PokemonList from "../Pokemons/PokemonLista";


function Header() {


    return(
        <>
        <Navbar />

        <Music />

     

        <PokemonList />
      
        </>
    )




 }

 export default Header;