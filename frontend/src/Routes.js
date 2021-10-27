import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "views/home/Home";
import UseTellor from "views/usetellor/UseTellor";
import TRB from "views/trb/TRB";
import BecomeReporter from "views/becomereporter/BecomeReporter";
import RequestNew from "views/requestnew/RequestNew";

const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => <Home />} />
    <Route path="/usetellor" exact render={() => <UseTellor />} />
    <Route path="/trb" exact render={() => <TRB />} />
    <Route path="/becomereporter" exact render={() => <BecomeReporter />} />
    <Route path="/requestnew" exact render={() => <RequestNew />} />
  </Switch>
);

export default Routes;
