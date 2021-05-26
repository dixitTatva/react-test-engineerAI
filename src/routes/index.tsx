import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/home";
import Layout from "../components/layout";

class Routes extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
          </Layout>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
