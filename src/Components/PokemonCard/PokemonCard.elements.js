import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const CardBox = styled.div`
  background: #FFFFFF;
  box-shadow: 5px 6px 10px rgb(0 0 0 / 10%);
  border-radius: 15px;
  height: 420px;
  width: 250px;
  padding: 20px;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  position: relative;
  top: 0px;
  transition: all 0.3s ease;
  &:hover {
    top: -5px;
    box-shadow: 2px 2px 10px #0000001a;
  }
`;

export const CardImg = styled.img`
  max-width: 150px;
  max-height: 150px;
  transition: all 0.5s;

&:hover{
  
  -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
  -webkit-transform: scale(1.2);
transform: scale(1.2);
}
`;

export const PokemonTitle = styled.div`
  max-width: 150px;
  margin: 10px auto;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonId = styled.div`
  color: darkgray;
`;

export const PokemonName = styled.div`
    margin-left: -91px;
    font-family: Lato;
    font-style: normal;
    text-transform: capitalize;
    font-weight: bold;
    color: #717171;
`;

export const PokemonTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Detalhes = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    margin-left: -104px;
    line-height: 125.2%;
    color: #717171;
    cursor: pointer;
`;
export const Preco = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 125.2%;
    margin-left: -98px;
    margin-top: 15px;
    color: #717171;
`;

export const Button = styled.div`

   background: #717171;
    position: absolute;
    color: white;
    height: 36px;
    width: 190px;
    text-align: center;
    padding-top: 9px;
    border-radius: 7px;
    margin-top: 350px;
    margin-left: 10px;
    cursor: pointer;

    &:hover{
      background: #CAC20C;
    }

`;

export const PokemonType = styled.div`
  background-color: ${(props) => props.bgcolor};
  color: white;
  font-family: "Exo", sans-serif;
  font-weight: 300;
  text-decoration: none;
  height: 25px;
  width: 80px;
  margin: 5px 5px;
  padding: 2px;
  border: 1px solid #0000001a;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #0000001a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
