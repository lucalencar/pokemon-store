import * as S from './Carrinho.style';

export default function Titulos() {

    return (
        <S.TopDiv>
            <S.Container>
                <S.TituloLeft>Product</S.TituloLeft>
                <S.TituloCenter>Quantity</S.TituloCenter>
                <S.TituloRight>Preço</S.TituloRight>
                <S.TituloRight>Subtotal</S.TituloRight>
                <S.TituloRight></S.TituloRight>
            </S.Container>
        </S.TopDiv>
    );

}