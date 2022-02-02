import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonAll } from "../../actions/pokemonActions";
import PokemonCard from "../PokemonCard/PokemonCard";
import {
  ListContainer,
  ListGrid,
  SearchCount,
  LoadMoreBtn,
} from "./PokemonList.elements";
import { MdExpandMore } from "react-icons/md";

const PokemonList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  /* const page = useSelector((state) => state.Page); */
  const pokemonList = useSelector((state) => state.PokemonList);
  const pokemonCard = useSelector((state) => state.PokemonCard);

  useEffect(() => {
    dispatch(GetPokemonAll(page));
    setPage(page + 1);
    /* dispatch(NextPage()); */
  }, []);

  const loadMore = () => {
    dispatch(GetPokemonAll(page));
    /* dispatch(NextPage()); */

    setPage(page + 1);
  };

  const ShowList = () => {
    if (!_.isEmpty(pokemonList.results)) {
      return (
        <>
          <ListGrid>
           
            {pokemonList.results.map((pokemon) => {
              return ShowPokeInfo(pokemon);
            })}
          </ListGrid>
        </>
      );
    }

    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  const ShowPokeInfo = (pokemonFromList) => {
    if (!_.isEmpty(pokemonCard.data)) {
      return (
        <PokemonCard
          pokemonFromList={pokemonFromList}
          pokemonData={pokemonCard.data[pokemonFromList.name]}
        />
      );
    }

    if (pokemonCard.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonCard.errorMsg !== "") {
      return <p>{pokemonCard.errorMsg}</p>;
    }

    return <p>Não foi possivel carregar</p>;
  };

  return (
    <ListContainer>
      {ShowList()}
      <LoadMoreBtn onClick={() => loadMore()}>
        Carregue mais <MdExpandMore />
      </LoadMoreBtn>
    </ListContainer>
  );
};

export default PokemonList;
