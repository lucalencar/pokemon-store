import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import * as S from "./Login.style"
import Background from '../../img/background.jpg'
import { logDOM } from "@testing-library/react";



export default function Login() {

    const navigate = useNavigate();

    return (
        
        <div>
            <S.Navbar>Pokemon Store</S.Navbar>
            <S.Login>
                <h3>Login</h3>
        <div>
            <label for="Login">E-mail</label>
            <input type="text" placeholder="Digite um email"/>
           
            <label for="Password">Senha</label>
            <input type="text" placeholder="Digite um email"/>
            <div>
             <S.Button>Clique</S.Button>
        </div>
         </div>
            </S.Login>

        
            <S.Imagem src={Background}/>
           <div>
            <S.Footer>@by Pokemon</S.Footer>
        </div>
        </div>
    );
    }