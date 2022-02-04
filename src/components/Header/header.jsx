import * as S from "./header.css";
import React from 'react';
import Logo from "../../../src/img/Logo.svg";
import Music from "../Player/Music";
import Navbar from "./Navbar";
import PokemonList from "../Pokemons/PokemonLista";


function Header() {


    return (
        <>
            <Navbar />

            <Music />

            <PokemonList />

        </>
    )
}

export default Header;