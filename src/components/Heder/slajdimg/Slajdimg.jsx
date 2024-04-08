import React from "react";
import'./Slajdimg.css'

const Slajdimg = ({ user }) => {


  return (
    <div
      className="img"
      style={{
        backgroundImage:`url(${user.imgpost})` ,
      }}
    >
    <img   className="imguser" src={user.imguser} alt="" />
    <div  className="namediv" >
    <b>{user.name}</b>
    </div>
     
    </div>
  );
};

export default Slajdimg;
