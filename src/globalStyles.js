import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;

  --primary: 37, 66, 196;
 

  --bug: #EFD534; /* suffix 1A = 10% opacity */
  --bug-bg: #bbcc511a;
  --dark: #FD7D24;
  --dark-bg: #7070701A;
  --dragon: #FD7D24;
  --dragon-bg: #4181a01A;
  --electric: #FD7D24;
  --electric-bg: #EFD5341A;
  --fairy: #FD7D24;
  --fairy-bg: #FDB9E91A;
  --fighting: #ce382d;
  --fighting-bg: #ce382d1A;
  --fire: #FD7D24;
  --fire-bg: #FD7D241A; 
  --flying: #FD7D24;
  --flying-bg: #8ac2d81A;
  --ghost: #EFD534;
  --ghost-bg: #7C62A31A;
  --grass: #ce382d;
  --grass-bg: #71bc4b1A;
  --ground: #ce382d;
  --ground-bg: #AB98421A;
  --ice: #EFD534;
  --ice-bg: #51C4E71A;
  --normal: #ce382d;
  --normal-bg: #a4acaf1A;
  --poison: #ce382d;
  --poison-bg: #B97FC91A;
  --psychic: #EFD534;
  --psychic-bg: #F366B91A;
  --rock: #EFD534;
  --rock-bg: #e09b471A;
  --steel: #EFD534;
  --steel-bg: #9EB7B81A;
  --water: #ce382d;
  --water-bg: #4592C41A;
  /* --unknown: ;
  --unknown-bg: ;
  --shadow: ;
  --shadow-bg: ; */
}

`;

export const Container = styled.div`
  width: 100%;
  margin: 50px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GlobalStyle;
