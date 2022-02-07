import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as S from "./login.styles";
import Fundo from "../../img/backgroundLogin.jpg"
import logo from "../../img/Logo.svg"
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

export default function Login() {

  // SENHA VISIVEL
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eyeOff);      
      setType('text');
    }
    else{
      setIcon(eye);     
      setType('password');
    }
  }
  // SENHA VISIVEL
   
  const navigate = useNavigate();

  //LOGIN PADRÃO
  const loginDefault = { email: "test@test.com", password: "123" };
  const [dados, setDados] = useState({ email: "", password: "" });
  
  const handleSubmit = (e) => {
    if (
      loginDefault.email === dados.email &&
      loginDefault.password === dados.password
    ) {
      navigate("../home");
    } else {
      alert("E-mail ou senha inválios.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };
  //LOGIN PADRÃO

  return (
    <div title="Login">
      <S.FormDiv>
        <img src={logo}  className="Logo"/>
        <S.Titulo> Faça seu login </S.Titulo>
        <img src={Fundo} className="ImgFundo" />

        <S.Form onSubmit={handleSubmit}>
          <S.Label>E-mail</S.Label>
          <S.Input type="email" 
          name="email" 
          onChange={handleChange} 
          placeholder="Digite seu e-mail"
          />

          <S.Label>Senha</S.Label>
         
          <S.Input 
          type={type}
            name="password"
            onChange={handleChange} 
            placeholder="Digite sua senha" >
          </S.Input>
          <S.IconeSenha onClick={handleToggle}><Icon icon={icon} size={25}/></S.IconeSenha>
          <S.Senha onClick={() => navigate('../password', { replace: true })}> Esqueceu sua senha?</S.Senha>
         
          <S.Button>Go !</S.Button>
          <S.CadastroTitulo> Ainda não é um treinador Pokémon? </S.CadastroTitulo>
          <S.Cadastro onClick={() => navigate('../cadastro', { replace: true })}> Cadastre-se agora </S.Cadastro>
        </S.Form>
      </S.FormDiv>
    </div>
  );

}