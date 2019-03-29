import "./App.scss";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Photos from "./components/Photos/Photos";
import Samples from "./components/Samples/Samples";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/photos" component={Photos} />
            <Route path="/contact" component={Contact} />
            <Route path="/samples" component={Samples} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
