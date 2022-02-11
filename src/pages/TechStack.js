import React from "react";
import firelogo from "../assets/firebaselogo.png";
import reactlogo from "../assets/reactjslogo.png";
import vslogo from "../assets/vslogo.png";
function TechStack() {
  return (
    <div className="tech">
      <h1>Technology used</h1>
      <br></br>
      <img src={firelogo} style={{ height: "75px" }} />
      <br></br>
      <h2>React.js</h2>
      <img src={reactlogo} style={{ height: "75px" }} />
      <br></br>
      <h2>Visual Studio Code</h2>
      <img src={vslogo} style={{ height: "75px" }} />
    </div>
  );
}

export default TechStack;
