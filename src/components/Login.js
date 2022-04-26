import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { push } = useHistory();
  //need state, handlechange and handlesubmit
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = () => {
    setCredentials({
      ...credentials,
      username: "Bloom",
      password: "Tech",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>UserName</label>
        <input onChange={handleChange} name="username" id="username" />
        <label>Password</label>
        <input onChange={handleChange} name="password" id="password" />
      </form>
    </div>
  );
};
