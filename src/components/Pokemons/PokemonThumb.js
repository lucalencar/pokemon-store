import React from 'react'
import * as S from "./styles";
const PokemonThumb = ({ image, name, type }) => {
    const style = type + " thumb-container";
    return (
        <S.list>   
        <S.Pokemon>
            {/* <div className="number"><small>#0{id}</small></div> */}
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3 className="NomePokemon">{name}</h3>
                <small className="TipoPokemon">Pokemon tipo {type}</small>
                <S.Detalhes> + detalhes </S.Detalhes>
            </div>
            <S.Button> Adicionar ao carrinho </S.Button>
        </S.Pokemon>
        </S.list>   
    )
}

export default PokemonThumb