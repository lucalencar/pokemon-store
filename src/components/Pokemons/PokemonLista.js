/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { GetPokemonList } from '../../redux/action/pokemonActions'
import Cards from '../../components/Cards';
import ReactPaginate from 'react-paginate';
import * as S from "./styles"

import '../../assets/css/pagination.css'

const PokemonList = (props) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);
  React.useEffect(() => {
    FetchData(1)
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page))
  }

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>
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
      <div id='pokedex' className='courses-area section-padding40 fix'>
        <div className='container'>
          <S.Row>          
            {ShowData()}
          </S.Row>
        {!_.isEmpty(pokemonList.data) && (        
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-8'>
              <div className='section-tittle text-center mt-40'>
                <nav className="blog-pagination justify-content-center d-flex">
                  <ReactPaginate
                    pageCount={Math.ceil(pokemonList.count / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={(data) => FetchData(data.selected + 1)}
                    containerClassName={'pagination'}
                    nextLabel='>'
                    previousLabel='<'
                  />
                </nav>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </Fragment>
  )
};

export default PokemonList