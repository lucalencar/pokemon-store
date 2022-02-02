import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const AdvancedSearchContainer = styled(Container)`
  margin-top: 0;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const AdvancedSearchBox = styled.div`
  padding: 20px 10px;
  min-width: 212px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const AdvancedSearchByType = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const AdvancedSearchLabel = styled.div`
  color: rgb(var(--primary));
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AdvancedSearchTypes = styled.div`
  max-width: 810px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AdvancedSearchType = styled(Link)`
  background-color: ${(props) => props.bgcolor};
  color: white;
  font-family: "Exo", serif;
  font-weight: 300;
  text-decoration: none;
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

export const AdvancedSearchByAbilityAndName = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const AdvancedSearchByAbility = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const AdvancedSearchByName = styled.div`
  margin: 0 50px 20px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 400px) {
    margin: 0 0 20px 0;
  }
`;


export const AdvancedSearchInput = styled.input`
     background: #e5e5e5;
  width: 120px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  border-right: none;
  border-top-left-radius: 75px;
  border-bottom-left-radius: 75px;
  outline: none;
  padding: 10px 10px 10px 20px;
`;

export const AdvancedSearchButton = styled.button`
  color: #fff;
  font-weight: bold;
  background: rgb(var(--primary));
  width: 80px;
  border-top: 2px solid rgb(var(--primary));
  border-bottom: 2px solid rgb(var(--primary));
  border-right: 2px solid rgb(var(--primary));
  border-left: none;
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  outline: none;
  padding: 10px;
  cursor: pointer;
  transition: all ease 0.1s;
  &:hover {
    background: rgba(var(--primary), 0.8);
    border-top: 2px solid rgba(var(--primary), 0.8);
    border-bottom: 2px solid rgba(var(--primary), 0.8);
    border-right: 2px solid rgba(var(--primary), 0.8);
  }
`;
