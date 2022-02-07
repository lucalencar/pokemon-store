import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordReset } from "../../components/firebase/firebase";
import * as S from "./password.styles";
import Fundo from "../../img/backgroundLogin.jpg";
import logo from "../../img/Logo.svg";

function Password() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();


  return (
    <S.FormDiv>
   
      <img src={logo}  className="Logo"/>
      <S.TituloSenha> Redefina sua senha </S.TituloSenha>
      <img src={Fundo} className="ImgFundo" />
      <S.Form>  
      <p> Enviaremos uma solicitação por e-mail para redefinição de senha</p>
    
        <S.Input
          type="text"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Endereço de e-mail"
        />
        <S.Button className="" onClick={() => sendPasswordReset(email)}>
          Envie e-mail para recuperar senha
        </S.Button>

        <S.ButtonVoltar type="submit" onClick={() => navigate('../login', { replace: true })}> Voltar</S.ButtonVoltar>
        
      
    
      </S.Form>
     

    </S.FormDiv>
  );
}

export default Password;
