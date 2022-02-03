import React from 'react'
import * as S from "./styles";
import { useState } from 'react';
import useCart from '../../hooks/useCart';
//Puxando imagem, nome e tipo
const PokemonThumb = ({ image, name, type, price, id }) => {

    const { addCart } = useCart();

    const style = type + " thumb-container";

    function addToCartList(index, nome, preco, img) {
        const item = {id: index, name: nome, price: preco, image: img };
        addCart(item);
    }

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
            <S.Button onClick={() => addToCartList(`${id}`, `${name}`, `${price}`, `${id}`,)}> Adicionar ao carrinho </S.Button>
        </S.Pokemon>
        </S.list>   
    )
}

export default PokemonThumb