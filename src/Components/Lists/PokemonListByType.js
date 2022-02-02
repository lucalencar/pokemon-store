import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonAllByType } from "../../actions/pokemonActions";
import PokemonCard from "../PokemonCard/PokemonCard";
import {
  ListContainer,
  ListGrid,
  LoadMoreBtn,
  NoMore,
} from "./PokemonList.elements";
import { MdExpandMore } from "react-icons/md";

const PokemonListByType = (props) => {
  const type = props.match.params.type;
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(24);
  const perPage = 24;
  const pokemonSearch = useSelector((state) => state.PokemonSearch);
  const pokemonCard = useSelector((state) => state.PokemonCard);

  useEffect(() => {
    dispatch(GetPokemonAllByType(type));
  }, [type]);

  const loadMore = () => {
    setLoaded(loaded + perPage);
  };

  const ShowList = () => {
    if (!_.isEmpty(pokemonSearch.results)) {
      return (
        <>
          <ListGrid>
            {pokemonSearch.results.slice(0, loaded).map((pokemon) => {
              return ShowPokeInfo(pokemon.pokemon);
            })}
          </ListGrid>
        </>
      );
    }

    if (pokemonSearch.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonSearch.errorMsg !== "") {
      return <p>{pokemonSearch.errorMsg}</p>;
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

  const ShowButton = () => {
    if (loaded >= pokemonSearch.count) {
      return <NoMore>Você está vendo todos!</NoMore>;
    } else {
      return (
        <LoadMoreBtn onClick={() => loadMore()}>
          Carregar mais <MdExpandMore />
        </LoadMoreBtn>
      );
    }
  };

  return (
    <ListContainer>
      {ShowList()}
      {ShowButton()}
    </ListContainer>
  );
};

export default PokemonListByType;
