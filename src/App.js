import "./App.scss";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Admin from "./components/Admin/Admin";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
