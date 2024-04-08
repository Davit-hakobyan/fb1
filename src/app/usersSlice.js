import { createSlice } from "@reduxjs/toolkit";
import img1 from "../img/img.jpg";
import img2 from "../img/img2.webp";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.avif";
import img5 from "../img/img5.webp";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.png";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.png";
import foto1 from "../img/foto1.jpg";
import foto2 from "../img/foto2.jpg";
import foto3 from "../img/fofo3.jpg";
import foto4 from "../img/foto4.jpg";
import foto5 from "../img/foto5.jpg";
import foto6 from "../img/foto6.jpg";
import foto7 from "../img/foto7.jpg";
import foto8 from "../img/foto8.jpg";
import foto9 from "../img/foto9.jpg";
import foto10 from "../img/foto10.jpg";
const imgUsers = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
];
const imgHistori = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];
const postimg = "postimg";
async function info() {
  const k = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let user = await k.json();
  return user;
}
const users = await info();
const usercop = [].concat(users);

for (let i = 0; i <= 9; i++) {
  users[i].imgpost = imgHistori[i];
  users[i].imguser = imgUsers[i];
  users[i].messenger = false;
}

export const userSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    activator: (state, { payload }) => {
      state.map((user) => {
        if (user.id === payload) {
          user.activ = true;
          return state;
        }
      });
      return state;
    },
    aute:(state)=>{
      state.map((user) => {
      
          user.activ =false;
         
        }
      );

    }
  },
});

export const { activator,aute } = userSlice.actions;

export default userSlice.reducer;
