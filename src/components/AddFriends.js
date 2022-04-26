import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddFriend = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div>
      <h2>Add a Friend</h2>
      <form>
        <div>
          <label>Name</label>
          <input />
        </div>
        <div>
          <label>Age</label>
          <input />
        </div>
        <div>
          <label>Email</label>
          <input />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
