import * as S from './CarrinhoModal.style';
import CarrinhoIcon from '../../img/Carrinho.svg'

export default function CarrinhoModal() {

    return (
        <S.MainBox>
            <S.Div>
                <S.TopDiv>
                    <S.Container>
                        <S.CloseButton>X</S.CloseButton>
                    </S.Container>
                </S.TopDiv>
                <S.IconDiv>
                    <S.Container>
                        <S.IconItem>
                                <S.Icon src={CarrinhoIcon} />
                        </S.IconItem>
                    </S.Container>
                </S.IconDiv>
                <S.CompraDiv>
                    <S.Container>
                        <S.CompraMsg>Compra Realizada Com Sucesso!</S.CompraMsg>
                    </S.Container>
                </S.CompraDiv>
                <S.DetalhesDiv>
                    <S.Container>
                        <S.DetalhesTexto>Em breve você receberá um e-mail com todos os detalhes :)</S.DetalhesTexto>
                    </S.Container>
                </S.DetalhesDiv>
                <S.VoltarDiv>
                    <S.Container>
                        <S.Voltar>Voltar</S.Voltar>
                    </S.Container>
                </S.VoltarDiv>
            </S.Div>
        </S.MainBox>
    );
}