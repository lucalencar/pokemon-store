import styled from "styled-components";

export const Card = styled.div`
    margin: 100px 20px;
    display: inline-grid;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 10px;
    background: white;
    border: none;
    box-shadow: 5px 6px 10px rgb(0 0 0 / 10%);
    border-radius: 15px;
    width: 207px;
    height: 315px;
    margin-left: 73px;

    .ImgPokemon {
        width: 75%;
        height: 139px;
        margin-left: 30px;
        transition: all 0.5s;
        cursor: pointer;

        &:hover{
            -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
            filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
    }

    a {
    color: black;
    text-decoration: none;
    margin-top: -164px;
    margin-left: 7px;
  }

  
  .NomePokemon{
    color: #4a4a4a;
    text-transform: uppercase;
    text-align: center;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 125.2%;
  }
`;


export const TipoPokemon = styled.div`
font-family: Lato;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 125.2%;
color: #717171;
`;