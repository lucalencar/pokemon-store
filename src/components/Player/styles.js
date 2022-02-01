import styled from "styled-components";

export const Player = styled.div`
 position: absolute;
    right: 236px;
    top: 18px;

`;

export const Controles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

`;

export const ButtonPlay = styled.div`
   display: flex;
    margin: 0 30px;
    padding: 20px;
    height: 0px;
    width: 0px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: #FFCE00;
    color: #FFF;
    font-size: 24px;
    cursor: pointer;

    &:hover{
        background-color: #d7a21b;
    }

    .icone{
    position: absolute;
    margin-left: -6px;
    margin-top: -12px;
    width: 15px;
    }


`;
