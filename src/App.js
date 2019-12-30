import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about?detail=true">About</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path={"/profile/:username"} component={Profile} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
