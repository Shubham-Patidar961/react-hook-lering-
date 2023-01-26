import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
//import UsestateObject from "./componets/usestateObject";
const Body = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [allarry, setallarry] = useState([]);
  console.log(allarry);
  const Login = () => {
    newarry = { email, password };
    setallarry([...allarry, newarry]);
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
              setemail(e.target.value);
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
              setpassword(e.target.value);
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
