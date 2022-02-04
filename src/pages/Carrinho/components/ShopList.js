import * as S from './Carrinho.style';
import useCounter from '../../../hooks/useCounter';
import TrashIcon from '../../../img/trash.svg';
import useCart from '../../../hooks/useCart';
import { useState } from 'react';
export default function ShopItem() {

    const { counter, increase, decrease, subTotal } = useCounter();

    const { cartList, removeCart } = useCart();

    const pokemonPreco = 10000;

    return (
        <div>
                <S.ItemDiv>
                {cartList.items.map((cart, id) => (
                    <S.PokeItem>
                        <S.Img key={id} src={`https://raw.githubusercontent.com/PokeAPI/sprites/32c1010100b5eef988264517e96209d70e0b1d48/sprites/pokemon/other/dream-world/${cart.image}.svg`} />
                        <S.ItemLeft>
                            <S.PokemonName key={id}>{cart.name}</S.PokemonName>
                        </S.ItemLeft>
                        <S.ItemLeft>
                            <S.AddRemove>-</S.AddRemove>
                            <S.Input type={"text"} size="2" onChange={(e) => e.preventDefault} value={counter} />
                            <S.AddRemove>+</S.AddRemove>
                        </S.ItemLeft>
                        <S.ItemRight><S.TextoPreco>{cart.price}</S.TextoPreco></S.ItemRight>
                        <S.ItemRight><S.TextoPreco>{subTotal(pokemonPreco)}</S.TextoPreco></S.ItemRight>
                        <S.IconItem>
                            <S.Icon onClick={() => removeCart(cart)} src={TrashIcon}></S.Icon>
                        </S.IconItem>
                    </S.PokeItem>
                                ))}
                </S.ItemDiv>
            <S.TotalDiv>
                <S.ItemRight><S.TextoTotal>Total: R$300,000,000</S.TextoTotal></S.ItemRight>
            </S.TotalDiv>
        </div>
    );
}