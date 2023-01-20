import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import arry from "./componets/constant";
const Aplayout = () => {
  const [myarry, setmyarry] = useState(arry);
  return (
    <>
      <div className="div-1">
        {myarry.map((java) => (
          <h1 className="sk" key={java.id}>
            Name:{java.name} Age:{java.age}
          </h1>
        ))}
        <button
          className="btn"
          onClick={() => {
            setmyarry([]);
          }}
        >
          clear
        </button>
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading2);
root.render(<Aplayout />);
