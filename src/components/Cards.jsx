import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import Badges from "../components/Badges";
import * as S from "../components/Pokemons/Cards.style";

const Cards = ({ url }) => {
  const imgURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const png = ".png";
  const [pokemon, setPokemon] = useState({ types: [] });
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => setPokemon(res));
  }, []);

  function zeroFill(number, width) {
    width -= number.toString().length;
    if (width > 0) {
      return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
    }
    return number + "";
  }

  return (
    <Fragment>
      <S.Card>
        <div className="properties properties2 mb-30">
          <div className="properties__card">
            <div className="properties__img overlay1">
            <Link to={`/details/${pokemon.name}`}>
              <img
                src={`${imgURL}${pokemon.id}${png}`}
                className="ImgPokemon"
                alt={pokemon.name}
              />
              </Link>
            </div>
            <div className="properties__caption">
              <h3 className="NomePokemon">{pokemon.name}</h3>
              <S.TipoPokemon>
                {" "}
                Pokemon Tipo
                {pokemon.types.map((item) => (
                  <Badges key={item.id} {...item} />
                ))}
              </S.TipoPokemon>
              
              <S.Price> R$1000,00</S.Price>
              <S.Button> Adicionar ao carrinho</S.Button>
            </div>
          </div>
        </div>
      </S.Card>
    </Fragment>
  );
};

export default Cards;
