import React, { useState, useEffect } from "react";

import Question from "./question";
import data from "./data";
const Placard = () => {
  return (
    <>
      <div
        className="w-[84%] h-auto bg-white flex flex-col  rounded-md p-2        
             lg:w-[60%] lg:flex-row lg:py-6 lg:mx-1 "
      >
        <h1
          className="
              text-lg font-bold font-mono p-3 m-2 shadow-lg lg:h-min rounded-lg lg:flex-initial
              lg:p-6 lg:text-2xl lg:font-extrabold
              lg:w-[35%]"
        >
          Questions And Answers About Login
        </h1>

        <div
          className=" lg:flex lg:flex-col lg:items-center lg:m-0 lg:p-0
        lg:w-[130%]"
        >
          {data.map((x) => {
            return <Question {...x} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Placard;
