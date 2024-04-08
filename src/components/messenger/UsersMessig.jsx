import React from "react";
import "./Messenger.css";
import { useDispatch } from "react-redux";
import { activator } from "../../app/usersSlice";

const UsersMessig = ({ user, setUseractiv2, activUser,setRecipient }) => {
  const dispatch = useDispatch();
  function f() {
    setRecipient(user.name)
    let k = [activUser,user.id ].sort((a, b) => a - b);
   setUseractiv2(k.join(''))
  }
  return (
    <div className="messigcank" onClick={f}>
      <img src={user.imguser} className="imgusermessij" alt="" />
      <b>{user.name}</b>
    </div>
  );
};

export default UsersMessig;
