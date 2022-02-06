import * as S from '../../components//Cart/CarrinhoModal.style';
import CarrinhoIcon from '../../img/Carrinho.svg';

export default function CarrinhoModal({closeModal}) {

    return (
            <S.Div>
                <S.TopDiv>
                    <S.Container>
                        <S.CloseButton onClick={() => closeModal(false)}>X</S.CloseButton>
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
                        <S.Voltar onClick={() => closeModal(false)}>Voltar</S.Voltar>
                    </S.Container>
                </S.VoltarDiv>
            </S.Div>
    );
}