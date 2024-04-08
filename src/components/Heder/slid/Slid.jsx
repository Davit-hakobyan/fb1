import React, { useState } from "react";
import "./slide.css";
import img1 from "../../../img/img.jpg";
import img2 from "../../../img/img2.webp";
import img3 from "../../../img/img3.jpg";
import img4 from "../../../img/img4.avif";
import img5 from "../../../img/img5.webp";
import img6 from "../../../img/img6.jpg";
import img7 from "../../../img/img7.jpg";
import img8 from "../../../img/img8.png";
import img9 from "../../../img/img9.jpg";
import { useSelector } from "react-redux";
import Slajdimg from "../slajdimg/Slajdimg";

const Slid = () => {
  const users = useSelector((state) => state.users);
  const activUser = useSelector((state) => state.activUser);
  const frenduser = users.filter((user) => user.id != activUser.id);



  const [left, setLeft] = useState(0);
  function leftbut() {
    if (left <= -300) {
      setLeft(left + 300);
    }
  }
  function rittbut() {
    if (left >= -1200) {
      setLeft(left - 300);
    }
  }
  const width = {
    width: "1400px",
  };
  return (
    <div className="slide">
      {left <= -300 &&
        <svg
        onClick={leftbut}
        id="slidebutton"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-caret-left-fill"
        viewBox="0 0 16 16"
      >
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
      </svg>
      }

      <div style={width} className="contejner">
        <div
          className="slaid"
          style={{
            left: `${left}px`,
          }}
        >
          {frenduser.map(user=><Slajdimg   user={user} key={user.id} />)}
         
        </div>
      </div>

     {left >= -1200 &&
      <svg
      onClick={rittbut}
      id="slidebutton"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-caret-right-fill"
      viewBox="0 0 16 16"
    >
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    </svg>}
    </div>
  );
};

export default Slid;
