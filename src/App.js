import React, { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Nav from "./components/nav/Nav";
import { aute } from "./app/usersSlice";
import { Route, Routes } from "react-router";
import Video from "./components/vide/Video";
import Hder from "./components/Heder/Hder";
import Messenger from "./components/messenger/Messenger";
import { useDispatch } from "react-redux";
import Aut from "./components/aut/Aut";

function App() {
  //  localStorage.clear()
  const dispatch = useDispatch();
  const [logtrue, setLogtrue] = useState(false);
  function aut() {
    setLogtrue(false);
    dispatch(aute());
  }

  return (
    <div className="App">
      {logtrue ? (
        <>
          <Nav />

          <Routes>
          <Route path="*" element={<Hder />} />
            <Route path="" element={<Hder />} />
            <Route path="video" element={<Video />} />
            <Route path="messenger" element={<Messenger />} />
            <Route
              path="aut"
              element={<Aut setLogtrue={setLogtrue} logtrue={logtrue} />}
            />
          </Routes>
        </>
      ) : (
        <Login setLogtrue={setLogtrue} />
      )}
    </div>
  );
}

export default App;
