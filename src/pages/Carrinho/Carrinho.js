import { useNavigate } from "react-router-dom";
import * as S from "./Carrinho.style";
import PokeImg from '../../img/025.png';


export default function Carrinho() {

    const navigate = useNavigate();

    return (
        <S.MainBox>
            <S.Div>
                <S.TopDiv>
                <S.Container>
                    <S.TituloLeft>Product</S.TituloLeft>
                    <S.TituloCenter>Quantity</S.TituloCenter>
                    <S.TituloRight>Preço</S.TituloRight>
                    <S.TituloRight>Subtotal</S.TituloRight>
                </S.Container>
                </S.TopDiv>
                <S.Container></S.Container>
                <S.ItemDiv>
                    <S.PokeItem>
                        <S.Img src={PokeImg}></S.Img>
                        <S.ItemLeft><S.Texto>Pikachu</S.Texto></S.ItemLeft>
                        <S.ItemLeft>
                            <button>+</button>
                            <S.Input type="text" size="2" />
                            <button>-</button>
                        </S.ItemLeft>
                        <S.ItemRight>R$50,000</S.ItemRight>
                        <S.ItemRight>R$100.000</S.ItemRight>
                    </S.PokeItem>
                    <S.PokeItem>
                        <S.Img src={PokeImg}></S.Img>
                        <S.ItemLeft><S.Texto>Pikachu</S.Texto></S.ItemLeft>
                        <S.ItemLeft>
                            <button>+</button>
                            <S.Input type="text" size="2" />
                            <button>-</button>
                        </S.ItemLeft>
                        <S.ItemRight>R$50,000</S.ItemRight>
                        <S.ItemRight>R$100.000</S.ItemRight>
                    </S.PokeItem>
                    <S.PokeItem>
                        <S.Img src={PokeImg}></S.Img>
                        <S.ItemLeft><S.Texto>Pikachu</S.Texto></S.ItemLeft>
                        <S.ItemLeft>
                            <button>+</button>
                            <S.Input type="text" size="2" />
                            <button>-</button>
                        </S.ItemLeft>
                        <S.ItemRight>R$50,000</S.ItemRight>
                        <S.ItemRight>R$100.000.000</S.ItemRight>
                    </S.PokeItem>
                </S.ItemDiv>
                <S.SubTotalDiv>
                    <S.ItemRight>Total: $300.000</S.ItemRight>
                </S.SubTotalDiv>
                <S.BottomDiv>
                    <S.Container>
                        <S.Continuar>Continuar</S.Continuar>
                        <S.TituloCenter></S.TituloCenter>
                        <S.TituloRight></S.TituloRight>
                        <S.Finalizar>Finalizar</S.Finalizar>
                    </S.Container>
                </S.BottomDiv>
            </S.Div>
        </S.MainBox>
    );

}