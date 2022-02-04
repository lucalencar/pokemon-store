<<<<<<< HEAD
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { GetPokemonList } from '../../redux/action/pokemonActions'
import Cards from '../../components/Cards';
import ReactPaginate from 'react-paginate';
import * as S from "./styles"
import CarregarPoke from "../../../src/img/pokebola.gif";

import '../../assets/css/pagination.css'
=======
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import * as S from "./styles";
import PokemonThumb from '../Pokemons/PokemonThumb';
>>>>>>> staging

const PokemonList = (props) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);
  React.useEffect(() => {
    FetchData(1)
  }, []);

<<<<<<< HEAD
  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page))
  }

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>  
      <img src={CarregarPoke} 
      alt=""
      className='PokeCarregar' 
      
      /> </p>
    }

    if (!_.isEmpty(pokemonList.data)) {
      return(
        <Fragment>
          {pokemonList.data.map(item => 
            <Cards key={item.id} {...item} />
          )}
        </Fragment>
      )
    }

    if (pokemonList.errorMsg !== '') {
      return <p>{pokemonList.errorMsg}</p>
    }

    return <p>Não encontrado</p>
  };

  return(
    <Fragment>
      <div id='pokedex'>
        <div>
          <S.Row>   
         
            {ShowData()}
          </S.Row>
        {!_.isEmpty(pokemonList.data) && (        
          <div>
                <nav className="blog-pagination">
                  <ReactPaginate
                    pageCount={Math.ceil(pokemonList.count / 16)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={(data) => FetchData(data.selected + 1)}
                    containerClassName={'pagination'}
                    nextLabel='>'
                    previousLabel='<'
                  />
                </nav>
          </div>
        )}
        </div>
      </div>
    </Fragment>
  )
};
=======
  // TELA CARREGAR MAIS

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')


  function preco(index) {
    const price = (Math.random() * ((300 * index) - (5 * index)) + (5 * index));
    return price;
  }


  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons();
  }, [])
  // TELA CARREGAR MAIS
  return (
    <div className="app-contaner">
      <S.Pokecontainer>

        {allPokemons.map((pokemonStats, index) =>
          <PokemonThumb
            key={index}
            id={pokemonStats.id}
            image={pokemonStats.sprites.other.dream_world.front_default}
            name={pokemonStats.name}
            type={pokemonStats.types[0].type.name}
            price={preco(`${index + 1}`)}
          />)}

        <S.Load className="load-more" onClick={() => getAllPokemons()}>Carregar mais...</S.Load>

      </S.Pokecontainer>

    </div>
  );
}
>>>>>>> staging

export default PokemonList