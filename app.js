import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
//import { useEffect } from "react";
//import UsestateObject from "./componets/usestateObject";
let cout = 0;
const Body = () => {
  const [change, setChange] = useState(cout);
  useEffect(() => {
    if (change === 0) {
      document.title = `chats`;
    } else {
      document.title = `chats(${change})`;
    }
  });
  const onclick = () => {
    setChange((cout = cout + 1));
  };
  return (
    <>
      <div className="sk">
        <h1>{change}</h1>
        <button className="btn" onClick={onclick}>
          click
        </button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
