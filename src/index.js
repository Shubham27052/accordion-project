import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Placard from "./placard";

const Accordion = () => {
  return (
    <>
      <div className="main min-h-screen min-w-screen flex items-center justify-center bg-purple-900">
        <Placard />
      </div>
    </>
  );
};

ReactDOM.render(<Accordion />, document.getElementById("root"));
