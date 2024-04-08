import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./UserPostAdd.css";

const UserPostAdd = () => {
  const activUser = useSelector((state) => state.activUser);
  const [posttext,setposttext] = useState('')
  return (
    <div className="UserPostAdd">
      <div className="UserPostAdd_div">
        <img className="imguser" src={activUser.imguser} alt="" />
        <div>
          <input
          value={posttext}
          onChange={(e)=>{setposttext(e.target.value)}}
            className="postInput"
            placeholder="what's new about you"
            type="text"
          />
          <button onClick={()=>setposttext('')}  >+</button>
        </div>
      </div>
    </div>
  );
};

export default UserPostAdd;
