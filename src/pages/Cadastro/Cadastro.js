import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as S from "../Cadastro/cadastro.styles";
import Fundo from "../../img/backgroundLogin.jpg"
import logo from "../../img/Logo.svg"
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
 
} from "../../components/firebase/firebase";


export default function Cadastro() {
  const navigate = useNavigate();
//DADOS DE CADASTRO
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const register = () => {
    if (!name) alert("Por favor, insira seu nome");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
//DADOS DE CADASTRO

  return (
    <div title="Login">
      <S.FormDiv>
        <img src={logo}  className="Logo"/>
          <img src={Fundo} className="ImgFundo" />

        <S.Form>
          <S.Label> Nome completo</S.Label>
          <S.Input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome completo"
          />

            <S.Label> Cadastre seu e-mail</S.Label>
            <S.Input type="text" name="email"  placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
          

            <S.Label>Cadastre sua senha</S.Label>
            <S.Input type="password" name="senha"  placeholder="Digite sua senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          
          <S.Button className="register__btn" onClick={register}>
            Cadastrar
          </S.Button>

          <S.Button type="submit" onClick={() => navigate('../login', { replace: true })}> Já tem uma conta?</S.Button>

        
        </S.Form>
      </S.FormDiv>
    </div>
  );

}

