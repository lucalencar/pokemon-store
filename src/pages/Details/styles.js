import styled from "styled-components";

export const Div=styled.div`
width: 10%;
flex-wrap: row;
background-color: transparent;
display: flex;
flex-direction: row;
padding: 5px 0;
padding-left: 40%;

.b-back{
    background-color:rgb(230, 149, 56);
    cursor: pointer;
    margin-top: auto;
    margin-left: 10%;
}


.detailContent{
    
    background-color: antiquewhite;

    border: 5px solid beige;
    align-items: center;
}
.div-ability{
  

}



img:hover{
    transform: translateY(-5px);
}

.detailContent h6{
    background-color: #071e2e;
    font-size: 25px;
    color: white;
    font-weight: bold;
    padding: 5px 0;
    text-transform:uppercase;
}

p{
    font-size: 14px;
    font-weight: bold;
}`


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

    &:hover{
      background: #CAC20C;
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

    &:hover{
      background: red;
    }

`;