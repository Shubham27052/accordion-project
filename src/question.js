import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ qn, ans }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="border-[0.5px] border-gray-200 rounded-md p-3 px-3 mx-5 my-4 font-mono shadow-md
        lg:py-2 lg:[flex: 2 1 auto] lg:mx-0   lg:w-[95%]"
      >
        <section className=" flex flex-row justify-between py-1 p-2">
          <h3
            className="
          text-black font-bold
          lg:text-lg [flex: 2 1 auto]
          lg:mr-auto"
          >
            {qn}
          </h3>

          <button className="h-8 w-8 btn " onClick={() => setShow(!show)}>
            {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </section>

        {show && (
          <p
            className="text-xs py-2 text-gray-800
        lg:text-sm"
          >
            {ans}
          </p>
        )}
      </div>
    </>
  );
};

export default Question;
