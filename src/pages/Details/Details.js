import React, {useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadPokeName } from '../../redux/action/pokemonActionsSingle'
import { POKE_KEY } from '../../redux/reducers/PokemonDetailsReducer'
import * as S from "./styles";
import './styles.css';

const Details = () => {


  let dispatch = useDispatch()

  let pokemonName = useParams().url

  // carrega o nome do pokemon
  useEffect(() => {
       dispatch(loadPokeName(pokemonName))
  }, [])

    //  pega o state contendo a url pela POKE_KEY( dados de um extraída do store )
      let viewPoke = useSelector((state) => {
        return state[POKE_KEY];
      });

  return (
    
      <S.Div>
      
    <div class="flex-item" className="detailContent">
      {
        Object.keys(viewPoke.pokeUrlData).length === 0? null:
        <Fragment>
            <h6>{pokemonName}</h6>
        <img src={viewPoke.pokeUrlData.sprites.other.dream_world.front_default} alt="" width='70' height='70'/>

          <p>Habilidades</p>
        <div class="flex-item" className="div-info">
        <h4>{viewPoke.pokeUrlData.abilities[0].ability.name}</h4>
        <h4>{viewPoke.pokeUrlData.abilities[1].ability.name}</h4>
        

        <p>Tipo primitivo</p>
        <h4>{viewPoke.pokeUrlData.types[0].type.name}</h4>
        
          <p>Sprites</p>
        <img src={viewPoke.pokeUrlData.sprites.front_default} alt="" width='70' height='70'/>
        <img src={viewPoke.pokeUrlData.sprites.back_default} alt="" width='70' height='70'/>
        </div>
       <S.Button >CART</S.Button>
       
        </Fragment>
      }
     
        
    </div> 
    </S.Div>
   
   );
};

export default Details