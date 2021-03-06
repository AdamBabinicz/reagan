import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./styles/main.scss";
import "./styles/animation.scss";
import "./styles/responsive.scss";
import HomeMain from "./home/HomeMain";
import Portfolio from "./portfolio/Portfolio";
import Setup from "./setup/Setup";
import About from "./about-me/About";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMain} />
        <Route path="/republikanin" component={Portfolio} />
        <Route path="/prezydentura" component={Setup} />
        <Route path="/rwr" component={About} />
      </Switch>
    </Router>
  );
}

export default Routing;
