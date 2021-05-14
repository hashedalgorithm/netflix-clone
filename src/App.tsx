import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./Signin";
import Home from "./Home";
import Content from './Content'
import { StateProvider } from "./UseStateAndDispatch";
function App() {
  return (
    <StateProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signin" exact>
            <Signin />
          </Route>
          <Route path="/home" exact>
            <Content />
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
