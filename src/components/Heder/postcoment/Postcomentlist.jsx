import React from "react";
import "./Postcoment.css";
import { useSelector } from "react-redux";

const Postcomentlist = ({ coment }) => {
  const comentaracuser = useSelector((state) => state.users).find(
    (user) => user.id === coment.userID
  );
 
  return (
    <div className="comentdiv">
      <div className="ddd">
        <img className="comentimg" src={comentaracuser.imguser} alt="" />
        <b>{comentaracuser.name}</b>
        <br />
      </div>
      <i>{coment.comment}</i>
    </div>
  );
};

export default Postcomentlist;
