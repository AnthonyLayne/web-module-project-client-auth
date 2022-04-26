import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  //need state, handlechange and handlesubmit
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      username: "Bloom",
      password: "Tech",
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
