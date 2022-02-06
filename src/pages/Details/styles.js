import styled from "styled-components";
import './styles.css';


export const Div=styled.div`
width: 365px;
align-items: center;
margin-left: 32.5%;
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
    background-color: #071e2e;
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
    padding: 5px 0;
    text-align: row;
    &:hover {   
    transform: translateY(-5px);
  }
}
.detailContent h1{
    font-family: 'Press Start 2P', cursive;
    font-size: 8px;
    text-transform:uppercase;
    color: #071e2e;
    font-weight: bold;
    padding: 5px 0;
    text-align: center;
    &:hover {   
    transform: translateY(-5px);
  }
}
.moves {
  justify-content: flex-start;
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
    font-size: 14px;
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