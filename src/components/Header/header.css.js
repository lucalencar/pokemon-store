import styled from "styled-components";

export const Titulo = styled.h1`
    font-size: 65px;
`;

export const Nav = styled.div`
    position: absolute;
    width: 1366px;
    height: 70px;
    left: 0px;
    top: 0px;
    background: white;
`;

export const Image = styled.div`
   .LogoPokemon{
    position: absolute;
    width: 96px;
    height: 39px;
    left: 53px;
    top: 17px;
    cursor: pointer;
   } 
`;


export const Button = styled.div`
   
    cursor: pointer;
    .IconeShop{
        position: absolute;
        left: 82.75%;
        right: 18.75%;
        top: 39.25%;
        color: #717171;
        bottom: 6.25%;

        &:hover{
            color: #FDE400;
        }
    }

    
    .IconeUser{
        position: absolute;
        left: 86.75%;
        right: 18.75%;
        top: 39.25%;
        color: #717171;
        bottom: 6.25%;

        &:hover{
            color: #FDE400;
        }
    }

    .IconeLogOut{
        position: absolute;
        left: 90.5%;
        right: 12.5%;
        top: 39.25%;
        bottom: 6.25%;
        color: #717171;

        &:hover{
            color: #FDE400;
        }
    }
`;


export const Contador = styled.div`
   
   position: absolute;
    left: 83.75%;
    right: 18.75%;
    top: 34.15%;
    background-color: #404040;
    width: 12px;
    height: 15px;
    border-radius: 50px;
    bottom: 6.25%;
    z-index: 1;
    color: white;
    padding-left: 5px;
    font-size: 11px;
    
`;


