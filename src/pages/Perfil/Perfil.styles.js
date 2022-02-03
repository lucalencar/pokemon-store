import styled from "styled-components";



export const container =styled.div`
display:flex;
align-itens:center;
height: 657px;
justify-content: center;
background:darkred;

;

.background {
  display:flex;
  
}

`;


export const caixadetexto =styled.div`
height:500px;
width: 500px;
box-shadow: 5px 5px 5px darkgray;
display: flex;
align-itens:center;
justify-content: center;
background:white;
border-radius:20px;


`;



export const FormDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  
`;
export const Form = styled.form`
display: flex;
flex-direction: column;
width: 200px;


.photo {
  display:flex;
  align-itens:center;
  width: 110px;
  border-radius:60px;
        
}

.perfil {
  display:flex
  font-family:;
  font-size: 15px;
  margin: 
  

}

`;

export const Label = styled.label`
padding: 10px 40px;

  
`;

export const Input = styled.input`
padding: 5px 5px;
background: #f9f9fa;
margin-bottom: 10px;
border-radius: 60px;
border: 1px solid #5e5e5e;
box-sizing: border-box;
transition: all 0.3s ease-out;
box-shadow: 0 0 3px rgb(0 0 0 / 37%), 1px 1px rgb(0 0 0 / 10%);
:focus,
:hover {
  border: 1px solid blue;
  
}

`;

export const Button = styled.button`

padding: 5px 5px;
 margin: 10px;
 align-itens:center;
 color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #717171;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;