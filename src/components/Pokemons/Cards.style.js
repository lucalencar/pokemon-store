import styled from "styled-components";
import ModalUnstyled from '@mui/base/ModalUnstyled';
export const Card = styled.div`
    margin: 55px 20px;
    display: inline-grid;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 10px;
    background: white;
    border: none;
    box-shadow: 5px 6px 10px rgb(0 0 0 / 10%);
    border-radius: 15px;
    width: 207px;
    height: 343px;
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
    color: #717171;
    text-transform: uppercase;
    font-family: Lato;
    font-style: normal;
    margin-left: 15px;
    font-weight: bold;
    font-size: 18px;
    line-height: 55.2%;
  }


  .Detalhes{
    font-family: Lato;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 125.2%;
/* or 18px */


color: #717171;
  }
`;


export const TipoPokemon = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 129.2%;
    margin-left: 15px;
    color: #717171;
`;

export const Button = styled.div`
background: #717171;
    /* position: absolute; */
    color: white;
    height: 31px;
    width: 190px;
    text-align: center;
    padding-top: 5px;
    border-radius: 7px;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;

    &:hover{
      background: #CAC20C;
    }
`;

export const Price = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 338.2%;
    margin-left: 15px;
    color: #717171;
`;

//MODAL
export const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const Box= styled.div`
  width: 400;
  background: white;
  border: 2px dotted #dbde1b;
  width: 510px;
    height: 357px;
    color: #717171;
    box-shadow: 3px 4px 9px #000000a3;
    
`;

export const ButtonDetalhes= styled.button`
 border: none;
 background: transparent;
 cursor: pointer;
 margin-left: 10px;
 font-family: Lato;
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 129.2%;
 color: #717171;

`;


export const StyledModal = styled(ModalUnstyled)`
   position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

