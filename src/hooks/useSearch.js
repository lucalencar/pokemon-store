import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



export default function useSearch() {
    const [filteredData, setFilteredData] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [wordEntered, setWordEntered] = useState("");  

    function index(name) {
      return (pokemons.findIndex(poke => poke.name === name) + 1);
    }

    async function init() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118");
      const data = await response.json();
      setPokemons(data.results);
    }

    useEffect(() => {
      init();
    }, []);

  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        clearInput();
      }
    }

    return {
         handleFilter, clearInput, filteredData, wordEntered, handleKeyDown, pokemons, index
    }

}