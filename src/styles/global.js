import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
    }

    body{
        background: #E5E5E5;
    }

    .list-wrapper {
    width: 97%;
    margin: auto;
  }
  
  .list-wrapper .pokemon-item {
    margin: 22px 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: inline-grid;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px;
    background: white;
    border: none;
    box-shadow: 5px 6px 10px rgb(0 0 0 / 10%);
    border-radius: 15px;
    width: 207px;
    height: 315px;
    margin-left: 73px;
    
  }
  
  
  .list-wrapper a {
    color: black;
    text-decoration: none;
  }
  
  .poke {
    width: 90%;
    margin: auto;
  }
  
  .pokemon-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  .pokemon-wrapper .item {
    width: 30%;
  }
  
  .search-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  
  .pagination {
    width: 500px;
    display: flex;
    margin: auto;
    list-style: none;
    justify-content: space-between;
    padding: 0;
    cursor: pointer;
  }

`;