import styled from "styled-components";

export const Div = styled.div`
  /* position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center; */
  display: flex;
  justify-content: center;
    /* position: fixed;
    width: 365px;
    height: 310px;
    left: 150px;
    top: 250px;
    display: flex;
    flex-wrap: wrap;
    background-color: antiquewhite;
    flex-direction: row;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    border-color: #d4d4d4;
    border-style: solid;
    justify-content: safe;
    align-items: stretch; */

  .b-back {
    background-color: rgb(230, 149, 56);
    cursor: pointer;
    margin-top: auto;
    margin-left: 10%;
    z-index: 1300;
  }

  .detailContent {
    background-color: red;
    width: 250px;
    height: 360px;
    left: 250px;
    top: 250px;
    border-radius: 20px;
    border: 2px solid beige;
    align-items: center;
    order: 1;
    align-self: flex-start;
  }

  .div-info {
    background-color: red;
    width: 100px;
    height: 300px;
    left: 50px;
    top: 100px;
    border-radius: 20px;
    border: 2px solid beige;
    align-items: center;
    order: 2;
  }

  img {
    transition: all 0.5s;
    position: absolute;
    z-index: 1300;
  }

  img:hover {
    transform: translateY(-5px);
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .detailContent h6 {
    background-color: #071e2e;
    font-size: 25px;
    color: white;
    font-weight: bold;
    padding: 5px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Button = styled.div`
  background: #717171;
  position: flex;
  color: white;
  height: 31px;
  width: 60px;
  text-align: center;
  padding-top: 5px;
  border-radius: 7px;
  margin-top: auto;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background: #cac20c;
  }
`;

export const ButtonBack = styled.div`
  background: #717171;
  position: flex;
  color: white;
  height: 31px;
  width: 60px;
  text-align: center;
  padding-top: auto;
  border-radius: 7px;
  margin-top: -10px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background: red;
  }
`;

export const CloseButton = styled.button`
	flex: 1;
	margin: 5px;
	text-align: right;
	font-size: 1.5em;
    font-family: Lato;
    font-style: normal;
    line-height: 125.2%;
    font-size: 18px;
    background-color: transparent;
    color: #292929;
    border: none;
    cursor: pointer;
    
`;

export const Voltar = styled.button`
    width: 210px;
    height: 46px;
    left: 307px;
    top: 610px;
    background-color: ${props => props.theme.buttonBg};
    color: ${props => props.theme.buttonFg};
    color: white;
    border: 2px solid;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
`;
