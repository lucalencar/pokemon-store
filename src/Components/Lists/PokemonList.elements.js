import styled from "styled-components";
import { Container } from "../../globalStyles";

export const ListContainer = styled(Container)`
     background: #e5e5e5;
  ${Container}
`;

export const ListGrid = styled.div`
  background: #E5E5E5;
  margin: 50px 0;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-auto-rows: auto;
  grid-gap: 50px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 250px);
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 250px);
  }
`;

export const SearchCount = styled.h2`
  color: rgb(var(--secondary));
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  /* align-self: start;
  margin-left: 10%; */
`;

export const LoadMoreBtn = styled.button`
  background-color: yellow;
  color: rgb(var(--secondary));
  border: 1px solid rgb(var(--secondary));
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  height: 50px;
  width: 200px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease-in 0.1s;
`;

export const NoMore = styled.button`
  background-color: white;
  color: lightgray;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 50px;
  width: 200px;
  margin-top: 50px;
`;

export const AbilityTag = styled.span`
  color: rgb(var(--primary));
  margin: 0 5px 0 5px;
`;

export const TypeTag = styled.span`
  background-color: ${(props) => props.bgcolor};
  color: white;
  font-family: "Exo", sans-serif;
  font-weight: 300;
  font-size: 16px;
  height: 25px;
  width: 80px;
  margin: 5px 5px;
  padding: 2px;
  border: 1px solid #0000001a;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #0000001a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
