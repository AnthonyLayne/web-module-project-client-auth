import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>MY FRIENDS</h2>
          <ul>
            <li>
              <Link className="link" to="login">
                Login
              </Link>
            </li>
            <li>
              <Link className="link" to="friends">
                Friends List
              </Link>
            </li>
            <li>
              <Link className="link" to="friends/add">
                Add Friends
              </Link>
            </li>
            <li>
              <Link className="link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </header>

        <Route exact path="/">
          <Login />
        </Route>
      </div>
    </Router>
  );
}

export default App;
