import styled from 'styled-components'


export const Formulario = styled.form `
    color: red;
    border-radius: 50%;
    position: absolute;
    top: -50%;
    left: 112px;  
    width: 100%;
    height: auto;  
    
`;

export const Button = styled.button `
   color: black;
   border-radius: 8px;
   height: 30px;
   width: 100px;
   border-color: #FFff00;
   background: #1C1C1C;
   color: white;
   border-style: outset;
`

export const Container = styled.body `
  background-size: cover;
  opacity: 85%;
`
export const Login = styled.h1 `
  border: 10px solid #000;
  font-size: 180%;
   width: 320px;
  height: 415px;
  border-radius:80px 0px 80px 0px;
  background-color: rgba(10,8,5,9,8);
  top:  40%;
  left: 25%;
  position: absolute;
  transform: translate(-555, -50%);
  box-sizing: border-box;
  padding: 35px 25px;
  color: #FFff00;
  background-color: black;
  opacity:83%;

h3{
   font-size: 95%;
   display: flex;
   align-items: center;
   justify-content: center;
}
input{
   border-color: #FFff00;
   background: #fff;
   color: white;
  border-style: outset;
}
`

export const Navbar = styled.header `
 background-color: #1C1C1C; 
 padding: 0.5%;
 color: black;
 display: flex;
 align-items: center;
 justify-content: center;

`
export const Imagem = styled.img `
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;  
  
`

export const Footer = styled.footer `
 background-color: #1C1C1C; 
 padding: 1rem;
 color: #fff;
 display: flex;
align-items: center;
justify-content: center;
`