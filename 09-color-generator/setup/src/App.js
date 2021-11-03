import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f14053').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const color = new Values(input);
      const list = color.all(10);
      setList(list);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="btn"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color,index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index} hex={color.hex}/>;
        })}
      </section>
    </>
  );
}

export default App;
