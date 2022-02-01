import React from 'react'
import * as S from "./styles";
//Puxando imagem, nome e tipo
const PokemonThumb = ({ image, name, type, price }) => {
    const style = type + " thumb-container";
    return (
        <S.list>   
        <S.Pokemon>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3 className="NomePokemon">{name}</h3>
                <small className="TipoPokemon">Pokemon tipo {type}</small>
                
                <S.Detalhes> + detalhes </S.Detalhes>
                <S.Price> {price} </S.Price>
            </div>
            <S.Button> Adicionar ao carrinho </S.Button>
        </S.Pokemon>
        </S.list>   
    )
}

export default PokemonThumb