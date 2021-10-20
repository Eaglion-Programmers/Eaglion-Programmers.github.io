import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Members from "./Components/Members";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            <Navbar />
            <Footer />
          </Route>
          <Route exact path="/about">
            <Navbar />
            <AboutUs />
            <Footer />
          </Route>
          <Route exact path="/members">
            <Navbar />
            <Members />

            <Footer />
          </Route>
          <Route exact path="/contact">
            <Navbar />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
