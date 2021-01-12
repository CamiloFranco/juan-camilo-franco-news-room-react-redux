import React from "react";
import Navbar from "../containers/Navbar";
import News from "../containers/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <Navbar categoryDflt="Apps" />

      <div className="container-fluid">
        <Switch>
          <Route exact path="/">
            <News category={0} />
          </Route>
          <Route path="/politic">
            <News category={1} />
          </Route>
          <Route path="/international">
            <News category={2} />
          </Route>
          <Route path="/technology">
            <News category={3} />
          </Route>
          <Route path="/entertaiment">
            <News category={4} />
          </Route>
          <Route path="/sports">
            <News category={5} />
          </Route>
          <Route path="/design">
            <News category={6} />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
