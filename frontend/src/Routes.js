import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "views/home/Home";
import UseTellor from "views/usetellor/UseTellor";
import TRB from "views/trb/TRB";
import BecomeReporter from "views/becomereporter/BecomeReporter";
import RequestNew from "views/requestnew/RequestNew";
import AboutTellor from "views/abouttellor/AboutTellor";
import GetInvolved from "views/getinvolved/GetInvolved";
import HowItWorks from "views/howitworks/HowItWorks";
import Blog from "views/blog/Blog";
import BlogPostView from "views/blogPost/BlogPostView";
import Live from "views/live/Live";

const Routes = ({ events }) => (
  <Switch>
    <Route path="/" exact render={() => <Home />} />
    <Route path="/usetellor" exact render={() => <UseTellor />} />
    <Route path="/trb" exact render={() => <TRB />} />
    <Route path="/becomereporter" exact render={() => <BecomeReporter />} />
    <Route path="/requestnew" exact render={() => <RequestNew />} />
    <Route path="/abouttellor" exact render={() => <AboutTellor />} />
    <Route path="/getinvolved" exact render={() => <GetInvolved />} />
    <Route path="/howitworks" exact render={() => <HowItWorks />} />
    <Route path="/blog" exact render={() => <Blog />} />
    <Route path="/blog/:path" exact render={() => <BlogPostView />} />
    <Route path="/live" exact render={() => <Live />} />
  </Switch>
);

export default Routes;
