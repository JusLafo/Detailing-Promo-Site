import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

import LandingPage from "./LandingPage";
import PricingPage from "./PricingPage";
import ContactPage from "./ContactPage";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <div className="home-page">
      <Router>
        {/* <TopBar user={currentUser} /> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/pricing" component={PricingPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/users/new" component={RegistrationForm} />
          <Route exact path="/user-sessions/new" component={SignInForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default hot(App);
