import { useNavigate } from "react-router-dom";
import * as S from "./Carrinho.style";
import { useState } from "react";
import useCounter from "../../hooks/useCounter";
import CarrinhoModal from "./CarrinhoModal";
import TrashIcon from '../../img/trash.svg';
import Navbar from "../../components/Header/Navbar";

export default function Carrinho() {

    const navigate = useNavigate();

    const { counter, increase, decrease, subTotal } = useCounter();

    const [openModal, setOpenModal] = useState(false);

    const pokemonPreco = getPokePreco(1000, 5000);

    function getPokePreco(min, max) {
        return Math.random() * (max - min) + min;
    }
    

    return (
        <S.MainBox>
            <Navbar />
            <S.Div>
                <S.TopDiv>
                    <S.Container>
                        <S.TituloLeft>Product</S.TituloLeft>
                        <S.TituloCenter>Quantity</S.TituloCenter>
                        <S.TituloRight>Preço</S.TituloRight>
                        <S.TituloRight>Subtotal</S.TituloRight>
                        <S.TituloRight></S.TituloRight>
                    </S.Container>
                </S.TopDiv>
                <S.Container></S.Container>
                <S.ItemDiv>
                    <S.PokeItem>
                    <S.Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/32c1010100b5eef988264517e96209d70e0b1d48/sprites/pokemon/other/dream-world/25.svg`} />
                        <S.ItemLeft><S.PokemonName>Pikachu</S.PokemonName></S.ItemLeft>
                        <S.ItemLeft>
                            <S.AddRemove>-</S.AddRemove>
                            <S.Input type="text" size="2" />
                            <S.AddRemove>+</S.AddRemove>
                        </S.ItemLeft>
                        <S.ItemRight><S.TextoPreco>R$50,000</S.TextoPreco></S.ItemRight>
                        <S.ItemRight><S.TextoPreco>R$100.000.000</S.TextoPreco></S.ItemRight>
                        <S.IconItem>
                            <S.Icon src={TrashIcon}></S.Icon>
                        </S.IconItem>

                    </S.PokeItem>
                    <S.PokeItem>
                    <S.Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/32c1010100b5eef988264517e96209d70e0b1d48/sprites/pokemon/other/dream-world/25.svg`} />
                        <S.ItemLeft><S.PokemonName>Pikachu</S.PokemonName></S.ItemLeft>
                        <S.ItemLeft>
                            <S.AddRemove onClick={decrease}>-</S.AddRemove>
                            <S.Input type={"text"} size="2" onChange={(e) => e.preventDefault} value={counter} />
                            <S.AddRemove onClick={increase}>+</S.AddRemove>
                        </S.ItemLeft>
                        <S.ItemRight><S.TextoPreco>{pokemonPreco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</S.TextoPreco></S.ItemRight>
                        <S.ItemRight><S.TextoPreco>{subTotal(pokemonPreco)}</S.TextoPreco></S.ItemRight>
                        <S.IconItem>
                            <S.Icon src={TrashIcon}></S.Icon>
                        </S.IconItem>
                    </S.PokeItem>
                    <S.PokeItem>
                        <S.Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/32c1010100b5eef988264517e96209d70e0b1d48/sprites/pokemon/other/dream-world/25.svg`} />
                            <S.ItemLeft><S.PokemonName>Pikachu</S.PokemonName></S.ItemLeft>
                        <S.ItemLeft>
                            <S.AddRemove>-</S.AddRemove>
                            <S.Input type="text" size="2" />
                            <S.AddRemove>+</S.AddRemove>
                        </S.ItemLeft>
                        <S.ItemRight><S.TextoPreco>R$50,000</S.TextoPreco></S.ItemRight>
                        <S.ItemRight><S.TextoPreco>R$100.000.000</S.TextoPreco></S.ItemRight>
                                                <S.IconItem>
                            <S.Icon src={TrashIcon}></S.Icon>
                        </S.IconItem>
                    </S.PokeItem>
                </S.ItemDiv>
                <S.SubTotalDiv>
                    <S.ItemRight><S.TextoTotal>Total: R$300,000,000</S.TextoTotal></S.ItemRight>
                </S.SubTotalDiv>
                <S.BottomDiv>
                    <S.Container>
                        <S.Continuar onClick={() => navigate('../home', { replace: true })}>Continuar</S.Continuar>
                        <S.TituloCenter></S.TituloCenter>
                        <S.Finalizar onClick={() => setOpenModal(true)}>Finalizar</S.Finalizar>
                    </S.Container>
                </S.BottomDiv>
            </S.Div>
            {openModal && <CarrinhoModal closeModal={setOpenModal} />}

        </S.MainBox>
    );

}