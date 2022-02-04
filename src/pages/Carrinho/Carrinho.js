import { useNavigate } from "react-router-dom";
import * as S from "./components/Carrinho.style";
import { useState } from "react";
import CarrinhoModal from "./CarrinhoModal";
import Titulos from "./components/Titulos";
import ShopList from "./components/ShopList";
import Navbar from '../../components/Header/Navbar';

export default function Carrinho() {

    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);

    return (
        <S.MainBox>
            <Navbar />
            <S.CardBox>
                <Titulos />
                <S.Container />
                    <ShopList />
                <S.BottomDiv>
                    <S.Container>
                        <S.Continuar onClick={() => navigate('../home', { replace: true })}>Continuar</S.Continuar>
                        <S.TituloCenter></S.TituloCenter>
                        <S.Finalizar onClick={() => setOpenModal(true)}>Finalizar</S.Finalizar>
                    </S.Container>
                </S.BottomDiv>
            </S.CardBox>
            {openModal && <CarrinhoModal closeModal={setOpenModal} />}

        </S.MainBox>
    );

}