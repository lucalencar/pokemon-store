import React, { useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPokeName } from "../../redux/action/pokemonActionsSingle";
import { POKE_KEY } from "../../redux/reducers/PokemonDetailsReducer";
import { MdCatchingPokemon } from "react-icons/md";

import * as S from "./styles";
import "./styles.css";

const Details = () => {
  let dispatch = useDispatch();

  let pokemonName = useParams().url;

  // carrega o nome do pokemon
  useEffect(() => {
    dispatch(loadPokeName(pokemonName));
  }, []);

  //  pega o state contendo a url pela POKE_KEY( extraída do Reducer )
  let viewPoke = useSelector((state) => {
    return state[POKE_KEY];
  });

  return (
    <S.Div>
      <div className="detailContainer" class="flex-container">
        <div className="detailContent centered">
          {
          Object.keys(viewPoke.pokeUrlData).length === 0 ? null: 
            <Fragment>
              <h6>{pokemonName}</h6>
              <img
                className="img-details"
                src={
                  viewPoke.pokeUrlData.sprites.other.dream_world.front_default
                }
                alt=""
                width="110"
                height="110"
              />
              <p>Habilidades</p>
              <div className="div-ability">
                <h4>{viewPoke.pokeUrlData.abilities[0].ability.name}</h4>
                <h4>{viewPoke.pokeUrlData.abilities[1].ability.name}</h4>
              </div>

              <p>Características</p>
              <p>
                O <i>{pokemonName.toUpperCase()}</i> é um Pokémon do tipo principal <i>{viewPoke.pokeUrlData.types[0].type.name}</i>,
                 tem o peso aproximado de <i>{viewPoke.pokeUrlData.weight}kg</i> podendo chegar
                até <i>{viewPoke.pokeUrlData.height}m</i> de altura.
              </p>
              
              <p> O <i>{pokemonName.toUpperCase()}</i> tem como 4 principais ataques: </p>
              <div className="moves">
              <h1>{viewPoke.pokeUrlData.moves[0].move.name}</h1>
              <h1>{viewPoke.pokeUrlData.moves[1].move.name}</h1>
              <h1>{viewPoke.pokeUrlData.moves[2].move.name}</h1>
              <h1>{viewPoke.pokeUrlData.moves[3].move.name}</h1>
              </div>
              <div>
               <p>Sprites</p>
                <img
                  className="sprites-details"
                  src={viewPoke.pokeUrlData.sprites.front_default}
                  alt=""
                  width="70"
                  height="70"
                />
                <img
                  className="sprites-details"
                  src={viewPoke.pokeUrlData.sprites.back_default}
                  alt=""
                  width="70"
                  height="70"
                />
                <img
                  className="sprites-details"
                  src={viewPoke.pokeUrlData.sprites.front_shiny}
                  alt=""
                  width="70"
                  height="70"
                />
                <img
                  className="sprites-details"
                  src={viewPoke.pokeUrlData.sprites.back_shiny}
                  alt=""
                  width="70"
                  height="70"
                />
                </div>
                <div>
                  <S.Button>
                    <MdCatchingPokemon color="black" cursor="pointer" size="50px"/>
                    </S.Button>
                                        
              <Link to="/home">
                <h3 className="b-back">
                  BACK
                </h3>
              </Link>
              </div>
            </Fragment>
          
          }
        </div>
      </div>
    </S.Div>
  )
}

export default Details