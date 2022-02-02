import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";
import GlobalStyle from "./globalStyles";
import {
  
  ScrollArrow,
  AdvancedSearch,
  PokemonList,
  PokemonListByType,
} from "./Components";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router history={history}>
        {/* <Navbar history={history} /> */}
        <ScrollArrow />
        <AdvancedSearch history={history} />
        <Switch>
          <Route path="/home" exact component={PokemonList} />
          <Route path="/type/:type" exact component={PokemonListByType} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
