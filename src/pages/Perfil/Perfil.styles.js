import styled from "styled-components";



export const container =styled.div`
display:flex;
height: 657px;
justify-content: center;
background: #E5E5E5;

.Genero{
  border: 3px outset #d50e0e69;
}
.Paises{
  border: 3px outset #d50e0e69;
}

`;


export const Img =styled.img`
    opacity: 0.1;
    position: absolute;
    width: 100%;
    height: 123%;
    margin-top: 71px;

`;


export const caixadetexto =styled.div`

height: 581px;
width: 500px;
box-shadow: 5px 5px 5px darkgray;
display: flex;
justify-content: center;
background:white;
border-radius:20px;
position: absolute;
margin-top: 151px;
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
width: 200px;


.photo {
    margin-top: 67px;
    margin-left: 42px;
    border: 2px dotted  #d50e0e;
    display: flex;
    width: 110px;
    border-radius: 84px;
        
}

.perfil {
  font-size: 19px;
    background:  #d50e0e;
    text-align: center;
    height: 33px;
    position: absolute;
    margin-top: 0px;
    padding-top: 8px;
    color: white;
    font-style: normal;
    font-weight: bold;
    border-radius: 7px;
    margin-left: -152px;
    width: 502px;
  

}

`;

export const Label = styled.label`
    padding: 4px 4px;

  
`;

export const Input = styled.input`
padding: 5px 5px;
background: #f9f9fa;
margin-bottom: 10px;
border-radius: 60px;
border: 3px outset #d50e0e69;
box-sizing: border-box;
transition: all 0.3s ease-out;
box-shadow: 0 0 3px rgb(0 0 0 / 37%), 1px 1px rgb(0 0 0 / 10%);
:focus,
:hover {
  border: 1px solid red;
  
}

`;


export const ButtonSalvar = styled.button`

    padding: 5px 5px;
    color: rgb(253,249,243);
    font-weight: 600;
    text-transform: uppercase;
    width: 121px;
    height: 34px;
    background: #d50e0e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    left: -32px;
    position: relative;
    margin-top: 28px;
    &:hover{
      background: #9b1111;
    }
  
`;
export const ButtonCancelar = styled.button`

    padding: 5px 5px;
    color: rgb(253,249,243);
    font-weight: 600;
    text-transform: uppercase;
    width: 121px;
    height: 34px;
    background: #d50e0e;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    margin-left: 116px;
    margin-top: -34px;
    &:hover{
      background: #9b1111;
    }
    
`;

export const ErrorTip = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -4px;
`;

