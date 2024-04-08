import React, { useState } from "react";
import "./Postcoment.css";
import { addcomment } from "../../../app/comentsPosts";
import { useDispatch, useSelector } from "react-redux";
import Postcomentlist from "./Postcomentlist";

const Postcoment = ({ postID }) => {
  const [postcoment, setPostcoment] = useState("");

  const dispatch = useDispatch();
  const postcoments = useSelector((state) => state.commentsPost).filter(
    (post) => post.postID === postID
  );

  const activUser = useSelector((state) => state.activUser);

  function add() {
    if (!postcoment) {
      return;
    }
    dispatch(
      addcomment({
        postID: postID,
        userID: activUser.id,
        comment: postcoment,
      })
    );
    setPostcoment("");
  }
  
  return (
    <div>
      <div className="comentsdiv">
        {postcoments.map((coment) => (
          <Postcomentlist key={Math.random()} coment={coment} />
        ))}
      </div>
      <div>
        <input
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              add();
            }
          }}
          className="comentinput"
          type="text"
          value={postcoment}
          placeholder={` leave a comment as ${activUser.name}`}
          onChange={(e) => {
            setPostcoment(e.target.value);
          }}
        />
        <button className="comentAdd" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Postcoment;
