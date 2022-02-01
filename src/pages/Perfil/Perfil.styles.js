import styled from "styled-components";

export const container =styled.div`
display:flex;
height: 657px;
justify-content: center;
background: #E5E5E5;

`;

export const caixadetexto =styled.div`
height:500px;
width: 500px;
box-shadow: 5px 5px 5px darkgray;
display: flex;
align-itens:center;
justify-content: center;
background:white;
border-radius:20px;


`;



export const FormDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;
export const Form = styled.form`
display: flex;
flex-direction: column;
width: 250px;

`;

export const Label = styled.label`
  padding: 10px 0;
  font-family: Lato;
`;

export const Input = styled.input`

`;

export const Button = styled.button`

  display: inline-block;
  padding: 10px 15px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #717171;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;