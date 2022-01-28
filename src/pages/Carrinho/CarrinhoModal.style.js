import styled from "styled-components";

export const MainBox = styled.div`
    height: 100vh;
    background-color: #f8f5ec;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Div = styled.div`
    width: 365px;
    height: 310px;
    left: 501px;
    top: 229px;
    display: block;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
`;

export const Container = styled.div`
	margin: 20px;
	display: flex;
    flex-direction: row;
`;

export const TopDiv = styled.div`
    width: 365px;
    height: 10px;
    left: 239px;
    top: 115px;
    display: block;
`;

export const IconDiv = styled.div`
    width: 365px;
    height: 30px;
    left: 239px;
    top: 115px;
    display: block;
`;

export const Icon = styled.img`
    height: 30px;
`;

export const CompraDiv = styled.div`
    width: 365px;
    height: 28px;
    display: block;
`;

export const DetalhesDiv = styled.div`
    width: 365px;
    height: 70px;
    display: block;
`;

export const DetalhesTexto = styled.div`
	flex: 1;
    text-align: center;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
`;

export const VoltarDiv = styled.div`
    width: 365px;
    height: 46px;
    left: 239px;
    top: 115px;
    display: flex;
    justify-content: center;


`;

export const CloseButton = styled.div`
	flex: 1;
	margin: 5px;
	text-align: right;
	font-size: 1.5em;
    font-family: Lato;
    font-style: normal;
    line-height: 125.2%;
    font-size: 18px;
`;

export const Voltar = styled.button`
    width: 210px;
    height: 46px;
    left: 307px;
    top: 610px;
    background: #404040;
    color: white;
    border-radius: 5px;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
`;

export const IconItem = styled.div`
	flex: 1;
    text-align: center;
`;

export const CompraMsg = styled.div`
	flex: 1;
    text-align: center;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #292929;
`;