import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import Logout from "./components/LogOut";
import AddFriend from "./components/AddFriends";
import PrivateRoute from "./helper/PrivateRoute";

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
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>

        <PrivateRoute exact path="/friends" component={FriendsList} />

        <PrivateRoute exact path="/friends/add" component={AddFriend} />

        <PrivateRoute exact path="/logout" component={Logout} />
      </div>
    </Router>
  );
}

export default App;
