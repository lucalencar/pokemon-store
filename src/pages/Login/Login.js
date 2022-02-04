import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import * as S from "./login.styles";
import Fundo from "../../img/backgroundLogin.jpg"
import logo from "../../img/Logo.svg"


export default function Login() {

    const navigate = useNavigate();

  const loginDefault = { email: "test@test.com", password: "123" };
  const [dados, setDados] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    if (
      loginDefault.email === dados.email &&
      loginDefault.password === dados.password
    ) {
      navigate("home");
    } else {
      alert("E-mail ou senha inválios.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };


  

  return (
    <div title="Login">
      <S.FormDiv>
        <img src={logo}  className="Logo"/>
      <S.Titulo> Faça seu login </S.Titulo>
          <img src={Fundo} className="ImgFundo" />
        <S.Form onSubmit={handleSubmit}>
          <S.Label>E-mail</S.Label>
          <S.Input type="email" name="email" onChange={handleChange} placeholder="Digite seu e-mail"
          
          />

          <S.Label>Senha</S.Label>
          <S.Input type="password" name="password" onChange={handleChange} placeholder="Digite sua senha" />
          <S.Senha onClick={() => navigate('../password', { replace: true })}> Esqueceu sua senha?</S.Senha>

          <S.Button>Go !</S.Button>
          <S.CadastroTitulo> Ainda não é um treinador Pokémon? </S.CadastroTitulo>
          <S.Cadastro onClick={() => navigate('../cadastro', { replace: true })}> Cadastre-se agora </S.Cadastro>
        </S.Form>
      </S.FormDiv>
    </div>
  );

}