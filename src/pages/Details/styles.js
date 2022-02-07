import styled from "styled-components";
import './styles.css';


export const Div=styled.div`
width: 583px;
align-items: center;
margin-left: 27.5%;

.detailContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.b-back{
    background-color: transparent;
    cursor: pointer;
    margin-top: auto;
}
.detailContent{
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    border: 5px solid beige;
    align-items: center;
    flex-flow: column nowrap;
    align-content: flex-start;
}
.div-ability{
    display: flex;
    justify-content: row;
    align-content: flex-start;
}
.detailContent h6{
    background-color: #cf0808;
    font-size: 25px;
    color: white;
    font-weight: bold;
    padding: 5px 0;
    margin-top: 1%;
    text-transform: uppercase;
    font-family: 'Press Start 2P', cursive;
    
}
.detailContent h4{
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    text-transform:uppercase;
    color: #071e2e;
    font-weight: bold;
    padding: 3px 21px;
    text-align: row;
    &:hover {   
    transform: translateY(-5px);
  }
}
.detailContent h1{
    font-family: 'Press Start 2P',cursive;
    font-size: 10px;
    text-transform: uppercase;
    color: #071e2e;
    font-weight: bold;
    padding: 3px 21px;
    &:hover {   
    transform: translateY(-5px);
  }
}
.moves {
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: row;
    -webkit-justify-content: row;
    -ms-flex-pack: row;
    justify-content: row;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
}
.detailContent i{
  font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    text-transform:uppercase;
    color: #071e2e;
    font-weight: bold;
    padding: 5px 0;
    text-align: center;
    &:hover {   
    transform: translateY(-5px);
  }
}
.img-details {
        width: 75%;
        height: 139px;
        transition: all 0.5s;
        &:hover{
            -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
            filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
           
        }
    }
    .sprites-details {
        transition: all 0.5s;
        &:hover{
            -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
            filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
    }
p{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}`

export const Button = styled.div`
    background: transparent;
    position: absolute;
    height: 50px;
    width: 50px;
    margin-bottom: 10%;
    border-radius: 15px;
    margin-left: 10%;
    cursor: pointer;
    &:hover{
      background: #CAC20C;
    }
`;


export const ButtonBack = styled.div`
   color: red;
    width: 89px;
    padding-left: 53px;
    border: 2px solid red;
    text-decoration: none;
    border-radius: 16px;
    background: #ffffff00;
    text-decoration: none;
    &:hover{
      color: #7c0d0d;
      border: 2px solid #7c0d0d;
    }
   
`;
