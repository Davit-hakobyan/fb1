import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { activ, sarqelrtu } from "../../app/activuser";
import { activator } from "../../app/usersSlice";

const Login = ({ setLogtrue }) => {
  const dispatch = useDispatch();
  const [loginuser, setLoginuser] = useState({
    login: "bret",
    password: "Gwenborough",
  });
  const [falslogin, setFalslogin] = useState("");
  const activUser = useSelector((state) => state.activUser);

  const users = useSelector((state) => state.users);
  function f(e) {
    e.preventDefault();
    for (let m of users) {
      if (
        m.username.toLowerCase() === loginuser.login.toLowerCase() &&
        m.address.city.toLowerCase() === loginuser.password.toLowerCase()
      ) {
        dispatch(activ(m));
        dispatch(activator(m.id));
        dispatch(sarqelrtu());

        setLogtrue(true);
        setLoginuser({
          login: "",
          password: "",
        });
        setFalslogin("");

        return;
      }
    }
    setFalslogin("incorrect login or password");
  }

  return (
    <div>
      <div className="glx">
        <div className="div1">
          <h1>facebook</h1>
          <label className="label1">Facebook always helps you </label>
          <br></br>
          <label className="label1">stay in touch and chat with</label>
          <br></br>
          <label className="label1">your friends.</label>
        </div>
        <div className="div2">
          <div className="div2-1">
            <form>
              <input
                className="input"
                value={loginuser.login}
                onChange={(e) =>
                  setLoginuser({
                    ...loginuser,
                    login: e.target.value,
                  })
                }
                type="text"
                placeholder="namme"
              />

              <br></br>
              <br></br>
              <input
                className="input"
                type="text"
                value={loginuser.password}
                onChange={(e) => {
                  setLoginuser({
                    ...loginuser,
                    password: e.target.value,
                  });
                }}
                placeholder="password"
              />
              <br></br>
              <b style={{ color: "red" }}> {falslogin}</b>
              <br></br>
              <br></br>
              <input type="submit" onClick={f} value="Вход" />
            </form>
            <hr></hr>
            <p>Forgot your password?</p>
            <button>Create a new account</button>
          </div>
          <br></br>
          <div className="div2-2">
            <label>
              <b>Create a Page</b>celebrity, musical group or{" "}
            </label>
            <label>companies.</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
