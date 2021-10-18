import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateExercise from './components/CreateExercise'
import CreateWorkout from './components/CreateWorkout'
import CreateSplit from './components/CreateSplit'
import ListSplits from './components/ListSplits'

import CheckingSignedIn from "./pages/CheckingSignedIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Private from "./pages/Private";
import PageNotFound from "./pages/PageNotFound";
import WorkoutPage from "./pages/WorkoutPage";



export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/platform.js";
  script.onload = () => initGoogleSignIn();
  document.body.appendChild(script);

  function initGoogleSignIn() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
        })
        .then(() => {
          const authInstance = window.gapi.auth2.getAuthInstance();
          const isSignedIn = authInstance.isSignedIn.get();
          setIsSignedIn(isSignedIn);

          authInstance.isSignedIn.listen((isSignedIn) => {
            setIsSignedIn(isSignedIn);
          });
        });
    });
    window.gapi.load("signin2", () => {
      window.gapi.signin2.render("login-button", {
        theme: "dark",
      });
    });
  }

  function PrivateRoute(props) {
    const { component, ...rest } = props;
    return <Route {...rest} component={isSignedIn ? component : Private} />;
  }

  if (isSignedIn !== null) {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/workout" component={WorkoutPage} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <div className="App">
        <h1>Welcome to Fitness Guru!</h1>
        </div>
      </>
    );
  }

  return <CheckingSignedIn />;
}
