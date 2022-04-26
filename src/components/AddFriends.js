import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddFriend = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div>
      <h2>Add a Friend</h2>
      <form>
        <div>
          <label>Name</label>
          <input onChange={handleChange} name="name" id="name" />
        </div>
        <div>
          <label>Age</label>
          <input onChange={handleChange} name="age" id="age" />
        </div>
        <div>
          <label>Email</label>
          <input onChange={handleChange} name="email" id="email" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
