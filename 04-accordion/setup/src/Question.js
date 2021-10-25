import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [toggle, setToggle] = useState(false);
  const [innerToggle, setInnerToggle] = useState(false);
  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button
            onClick={() => setToggle((prevToggle) => !prevToggle)}
            className="btn"
          >
            {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {toggle && <p>{info}</p>}

        {toggle && (
          <>
            <article className="question">
              <header>
                <h4>{title}</h4>
                <button
                  onClick={() => setInnerToggle((prevToggle) => !prevToggle)}
                  className="btn"
                >
                  {innerToggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </header>
              {innerToggle && <p>{info}</p>}
            </article>
          </>
        )}
      </article>
    </>
  );
};

export default Question;
