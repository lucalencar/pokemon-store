import React from 'react';
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