import * as S from './Carrinho.style';
import useCounter from '../../../hooks/useCounter';
import TrashIcon from '../../../img/trash.svg';
import { useDispatch } from 'react-redux';
import useCart from '../../../hooks/useCart';
import { useState } from 'react';

export default function ShopItem() {

    const dispatch = useDispatch();

    const { counter, increase, decrease, subTotal } = useCounter();

    const { addCart, removeCart, cartList } = useCart();

    const pokemonPreco = 10000;

    const [lista, setLista] = useState([]);

    function listaCart(listaCart) {
        setLista([...lista, listaCart]);
    }

    const item = {
        id: 6,
        name: 'pika',
        price: 5000,
    }

    return (
        <div>
            <S.ItemDiv>
                <S.PokeItem>
                    <S.Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/32c1010100b5eef988264517e96209d70e0b1d48/sprites/pokemon/other/dream-world/25.svg`} />
                    <S.ItemLeft><S.PokemonName>Pikachu</S.PokemonName></S.ItemLeft>
                    <S.ItemLeft>
                        <S.AddRemove>-</S.AddRemove>
                        <S.Input type={"text"} size="2" onChange={(e) => e.preventDefault} value={counter} />
                        <S.AddRemove onClick={() => console.log(cartList) }>+</S.AddRemove>
                    </S.ItemLeft>
                    <S.ItemRight><S.TextoPreco>{pokemonPreco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.TextoPreco></S.ItemRight>
                    <S.ItemRight><S.TextoPreco>{subTotal(pokemonPreco)}</S.TextoPreco></S.ItemRight>
                    <S.IconItem>
                        <S.Icon src={TrashIcon}></S.Icon>
                    </S.IconItem>
                </S.PokeItem>
            </S.ItemDiv>
            <S.TotalDiv>
                <S.ItemRight><S.TextoTotal>Total: R$300,000,000</S.TextoTotal></S.ItemRight>
            </S.TotalDiv>
        </div>
    );
}