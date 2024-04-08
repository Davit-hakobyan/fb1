import React from "react";
import Slid from "./slid/Slid";
import Posts from "./posts/Posts";
import UserPostAdd from "./userpostadd/UserPostAdd";

const Hder = () => {
  return (
    <div>
      <hr />
      <UserPostAdd />
      <hr />
      <Slid />
      <Posts />
    </div>
  );
};

export default Hder;
