import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
//import UsestateObject from "./componets/usestateObject";
const Body = () => {
  let [email, setemail] = useState();
  let [password, setpassword] = useState();
  const Login = () => {
    let newarryemail = [];
    let newarrypassword = [];
    newarryemail.push(email);
    newarrypassword.push(password);
    setemail("");
    setpassword("");
  };
  return (
    <div className="contaner">
      <div className="form">
        <div>
          <label>email:</label>
          <input
            className="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              email = e.target.value;
              setemail(email);
            }}
          />
        </div>
        <div>
          <label>password:</label>
          <input
            className="email"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              password = e.target.value;
              setpassword(password);
            }}
          />
        </div>
        <div className="submit">
          <button className="btn" onClick={Login}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
