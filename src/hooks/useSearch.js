import { useState } from "react";
import { useEffect } from "react";

export default function useSearch() {
    const [filteredData, setFilteredData] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [wordEntered, setWordEntered] = useState("");  

//funcion pra encontrar o id do pokemon baseado no nome
    function index(name) {
      return (pokemons.findIndex(poke => poke.name === name) + 1);
    }

//function para puxar os pokemons da pokeapi para utilizar no search bar
    async function init() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898");
      const data = await response.json();
      setPokemons(data.results);
    }

    useEffect(() => {
      init();
    }, []);

  //const para filtrar o input e retornar o nome do pokemon
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
  //const para limpar o input através do button
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
//const para limpar o imput via esq key
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        clearInput();
      }
    }

    return {
         handleFilter, clearInput, filteredData, wordEntered, handleKeyDown, pokemons, index
    }

}