import styled from "styled-components";

export const searchInputs = styled.div`
    display: flex;
    position: absolute;
    left: 60.75%;
    right: 18.75%;
    top: 10.25%;
    color: #717171;
    bottom: 6.25%;
`;

export const Input = styled.input`
    background-color: white;
    border: 0;
    border-radius: 2px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 18px;
    padding: 15px;
    height: 15px;
    margin-top: 10px;
    width: 200px;
    background: #d4d4d4;
    color: #303030;

    &:focus {
    outline: none;
  }
`;

export const IconSearch = styled.div`
    height: 63px;
    width: 50px;
    background-color: white;
    display: grid;
    place-items: center;
`;

export const resultado = styled.div`
    position: absolute;
    left: 60.75%;
    right: 18.75%;
    top: 100%;
    margin-top: 5px;
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    z-index: 1;


    &:-webkit-scrollbar {
    display: none;

  }
`;

export const name = styled.div`
    margin: 15px;
`;

export const Button = styled.button`
    background: ${props => props.theme.buttonBg};
    border-color: ${props => props.theme.buttonBg};
    border: 0;
    position: absolute;
    color: ${props => props.theme.buttonFg};
    height: 35px;
    width: 70px;
    right: 5%;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;

    &:hover{
    background: ${props => props.theme.buttonBgHover};
    border-color: ${props => props.theme.buttonBgHover};
    color: ${props => props.theme.buttonFgHover};
    }
`;


export const Img = styled.img`
    max-height: 40px;
    max-width: 40px;
    opacity: 0.9;
    border-color: #717171;
    border-style: solid;
    border-radius: 10px;
`;

export const PokemonName = styled.div`
    text-align: left;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 125.2%;
    color: #303030;
`;
