import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const Aplayout = () => {
  const [change, setChage] = useState("hello shubham ");
  return (
    <>
      <div className="div-1">
        <h1 className="sk">{change}</h1>
        <button
          className="btn"
          onClick={() => {
            if (change == "hello shubham ") {
              setChage("Subscribe Shubham ");
            } else {
              setChage("hello shubham ");
            }
          }}
        >
          click
        </button>
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading2);
root.render(<Aplayout />);
