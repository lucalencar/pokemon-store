import styled from "styled-components";

export const Div=styled.div`

.flex-container{
    display: flex;
}

.b-back{
    background-color:rgb(230, 149, 56);
    cursor: pointer;
    margin-top: auto;
    margin-left: 10%;
}


.detailContent{

    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    border: 5px solid beige;
    align-items: center;
}
.div-ability{
    display: flexbox;

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
    position: absolute;
    color: white;
    height: 31px;
    width: 190px;
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