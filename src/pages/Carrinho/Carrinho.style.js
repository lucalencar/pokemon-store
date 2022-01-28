import styled from "styled-components";
import PokeImg from '../../img/025.png';

export const MainBox = styled.div`
    height: 100vh;
    background-color: #f8f5ec;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.section`
	margin: 20px;
	display: flex;
    flex-direction: row;
`;

export const Div = styled.div`
    width: 920px;
    height: 595px;
    left: 239px;
    top: 115px;
    display: block;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
`;

export const TopDiv = styled.div`
    width: 910px;
    height: 20px;
    left: 239px;
    top: 115px;
    display: block;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 20px;
`;

export const ItemDiv = styled.div`
    width: 920px;
    height: 400px;
    left: 239px;
    top: 115px;
    flex-direction: column;
    background: #ffffff;
    margin: auto;
    overflow: auto;
    `;

export const SubTotalDiv = styled.div`
    width: 850px;
    height: 20px;
    left: 239px;
    top: 115px;
    flex-direction: column;
    margin: auto;
`;

export const BottomDiv = styled.div`
    width: 910px;
    height: 50px;
    left: 239px;
    top: 115px;
    flex-direction: column;
    background-color: #ffffff;
    margin: auto;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

`;

export const PokeItem = styled(Container)`
overflow: scroll;
`;

export const Item = styled.div`
	flex: 1;
	margin: 5px;
	text-align: center;
	font-size: 1.5em;
    font-family: Lato;
    font-style: normal;
    line-height: 125.2%;
    font-size: 18px;
`;

export const TituloCol = styled(Item)`

color: #717171;
`;

export const TituloLeft = styled(TituloCol)`
text-align: left;
`;

export const TituloRight = styled(TituloCol)`
text-align: right;
`;

export const TituloCenter = styled(TituloCol)`
text-align: center;
`;


export const ItemLeft = styled(Item)`
    text-align: left;
`;

export const ItemRight = styled(Item)`
    text-align: right;
`;


export const ItemCenter = styled(Item)`
    text-align: center;
`;

export const Img = styled.img`
width: 87px;
height: 87px;
left: 297px;
top: 245px;
`;

export const Texto = styled.div`
text-align: left;
`;

export const TextoRight = styled.div`
text-align: right;
`;

export const Input = styled.input`
text-align: center;
border-radius: 10px;
height: 30px;
`;

export const Continuar = styled.button`
width: 210px;
height: 46px;
left: 307px;
top: 610px;

border: 2px solid #717171;
box-sizing: border-box;
border-radius: 5px;
`;

export const Finalizar = styled.button`
width: 210px;
height: 46px;
left: 307px;
top: 610px;
border: 2px solid #717171;
box-sizing: border-box;
border-radius: 5px;
`;