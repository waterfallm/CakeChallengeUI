import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from "../screens/HomeScreen";
import CakeScreen from "../screens/CakeScreen";
import AddnewScreen from "../screens/AddnewScreen";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <HomeScreen />
      </Route>

      <Route exact path="/cake/:id">
        <CakeScreen />
      </Route>

      <Route exact path="/addnew/">
        <AddnewScreen />
      </Route>

    </Switch>
  </BrowserRouter>
);

export default Routes;
