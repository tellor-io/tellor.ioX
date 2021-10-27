import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "views/home/Home";
import UseTellor from "views/usetellor/UseTellor";
import Blog from "views/blog/Blog";

const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => <Home />} />
    <Route path="/usetellor" exact render={() => <UseTellor />} />
    <Route path="/blog" exact render={() => <Blog />} />
  </Switch>
);

export default Routes;
