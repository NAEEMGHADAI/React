import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Services from "./Services";
import User from "./User";

const App = () => {
  const Name = () => {
    return <h1> My name is Naeem</h1>;
  };
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/services"
          render={() => <Services name="Service" />}
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/name" component={Name} />
        <Route exact path="/user" component={User} />

        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
