import React, { useEffect, useState } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>My Friends</h2>
    </div>
  );
};
