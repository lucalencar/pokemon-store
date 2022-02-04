import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/header";
import React, { useState, useEffect} from "react";
import * as S from "./style.home";
import Carregar from "../../../src/img/pokedexloading.gif";

export default function Carrinho() {

    const navigate = useNavigate();
//tela de carregamento
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },5000)
    },[])

    return (
        <> 
        <S.Container>
            {
                loading ?
                <img src={Carregar} 
                alt="" 
                className="Loading"
                loading={loading}
                /> 
                
                :

                <Header/>
               
            }
            
        </S.Container>
        </>
    );

}