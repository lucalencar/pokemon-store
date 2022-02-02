import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import * as S from "./Login.style"
import Background from '../../img/background.jpg'
import { logDOM } from "@testing-library/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import React, { useState } from "react";


export default function Login() {

    const navigate = useNavigate();
  
  const loginDefault = { email: "test@test.com", password: "123" };
  const [dados, setDados] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    if (
      loginDefault.email === dados.email &&
      loginDefault.password === dados.password
    ) {
      navigate("Home");
    } else {
      alert("E-mail ou senha inválios.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };


    return (
        
        <div>
            
            <S.Navbar>
            
            <img src={require('../../img/nome.png')}/>
            
            </S.Navbar>
             
            <S.Login>
                <h3>Login</h3>
        <div>
            <label for="Login">E-mail</label>
            <input type="text" placeholder="Digite um email" onChange={handleChange}/>
           
            <label for="Password">Senha</label>
            <input type="password" placeholder="Digite sua senha" onChange={handleChange} />
            <div>
             <S.Button>Entrar</S.Button>
         </div>
         </div>
            </S.Login>

        
            <S.Imagem src={Background}/>
        <div>
            <S.Footer> &#169;  Pokemon
           <ul>
               <li><FaFacebook/> Facebook</li>
               <li><FaInstagram/> Instagram</li>
           </ul>
            </S.Footer>
           
        </div>
        </div>
    );
    }