import React, {useState, useEffect} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import * as S from "./styles";
import PokemonThumb from '../Pokemons/PokemonThumb';

const PokemonList = (props) => {

  // TELA CARREGAR MAIS

  const[allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

 const getAllPokemons = async () => {
   const res = await fetch(loadMore)
   const data = await res.json()

   setLoadMore(data.next)

   function createPokemonObject(results)  {
     results.forEach( async pokemon => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       const data =  await res.json()
       setAllPokemons( currentList => [...currentList, data])
       await allPokemons.sort((a, b) => a.id - b.id)
     })
   }
   createPokemonObject(data.results)
 }

useEffect(() => {
 getAllPokemons()
}, [])
  // TELA CARREGAR MAIS
 return (
   <div className="app-contaner">
     <div className="pokemon-container">
    
         {allPokemons.map( (pokemonStats, index) => 
           <PokemonThumb
             key={index}
             id={pokemonStats.id}
             image={pokemonStats.sprites.other.dream_world.front_default}
             name={pokemonStats.name}
             type={pokemonStats.types[0].type.name}
             
           />)}
      
         <S.Load className="load-more" onClick={() => getAllPokemons()}>Carregar mais...</S.Load>
      
     </div>
   
   </div>
 );
}

export default PokemonList