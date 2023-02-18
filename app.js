import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./componets/navigation";

const App = () => {
  return (
    <>
      <Nav />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
