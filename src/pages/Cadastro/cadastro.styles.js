import styled from "styled-components";



export const FormDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: white;

  .ImgFundo{
    position: relative;
    opacity: 0.8;
    margin-left: -511px;
    height: 604px;
  }

  .Logo {
    position: absolute;
    right: 279px;
    top: 52px;
  }

 

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 154px;
  position: relative;

`;

export const Label = styled.label`
  padding: 10px 0;
`;

export const Input = styled.input`
  padding: 10px 15px;
    background: #f9f9fa;
    margin-bottom: 20px;
    border-radius: 4px;
    -webkit-transition: all 0.3s ease-out;
    border: 1px solid #5e5e5e;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 3px rgb(0 0 0 / 37%), 0 1px 1px rgb(0 0 0 / 10%);
  :focus,
  :hover {
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }

`;

export const Button = styled.button`
      padding: 10px 15px;
    color: rgb(255 255 255);
    font-weight: 600;
    text-transform: uppercase;
    background: red;
    border: none;
    border-radius: 3px;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background: #881414;
    }
`;


export const Senha = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #717171;
    cursor: pointer;
    &:hover{
      color: #881414;
    }
`;


export const TituloCadastro = styled.h4`
    margin-top: 8px;
    top: 97px;
    right: 183px;
    position: absolute;
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    font-size: 35px;
    line-height: 42px;
    color: #292929;


`;

export const ErrorTip = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -4px;
`;