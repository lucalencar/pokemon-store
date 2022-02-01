import styled from "styled-components";

export const list = styled.div`
    width: 97%;
    margin: auto;
    display: contents;


  a {
    color: black;
    text-decoration: none;
    margin-top: -164px;
    margin-left: 7px;
  }

  img{
    width: 48% !important;
    height: 620px !important;
    margin-left: 54px;
    margin-top: -226px;
  }
  

  .NomePokemon{
    margin-top: -220px;
    color: #4a4a4a;
    text-transform: uppercase;
    font-size: 17px;
    text-align: center;
  }

  .TipoPokemon{
    font-size: 14px;
    font-size: 14px;
    margin-top: -188px;
    margin-left: 10px;
  }
`;


export const Pokemon = styled.div`
    margin: 100px 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: inline-grid;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px;
    background: white;
    border: none;
    box-shadow: 5px 6px 10px rgb(0 0 0 / 10%);
    border-radius: 15px;
    width: 207px;
    height: 315px;
    margin-left: 73px;

`;

export const Button = styled.div`

background: #717171;
    position: absolute;
    color: white;
    height: 31px;
    width: 190px;
    text-align: center;
    padding-top: 5px;
    border-radius: 7px;
    margin-top: 273px;
    margin-left: 10px;
    cursor: pointer;

    &:hover{
      background: #CAC20C;
    }

`;


export const Detalhes = styled.div`

    color:#4a4a4a;
    margin-left: 10px;
    cursor: pointer;

`;
export const Load = styled.div`

    color:#4a4a4a;
    cursor: pointer;
    text-align: center;

    &:hover{
      color: #CAC20C;
    }

`;