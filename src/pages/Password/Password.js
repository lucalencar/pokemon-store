import { useNavigate } from "react-router-dom";
import React from "react";
import * as S from "../Password/password.styles";
import Fundo from "../../img/backgroundLogin.jpg"
import logo from "../../img/Logo.svg"



export default function Passowrd() {

    const navigate = useNavigate();


  return (
    <div title="Login">
      <S.FormDiv>
        <img src={logo}  className="Logo"/>
      <S.TituloSenha> Redefina sua senha </S.TituloSenha>
          <img src={Fundo} className="ImgFundo" />
        <S.Form>
          <p> Enviaremos uma solicitação por e-mail para redefinição de senha</p>
          <S.Input type="email" name="senha"  placeholder="Digite seu email" 
          />
          <S.Button type="submit" onClick={() => navigate('../login', { replace: true })}> Enviar </S.Button>
        
        </S.Form>
      </S.FormDiv>
    </div>
  );

}