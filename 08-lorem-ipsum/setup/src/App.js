import React, { useState } from "react";
import data from "./data";
function App() {
  const [amount, setAmount] = useState(0);
  const [paragraphs, setParagraphs] = useState(data);
  const [generatedPara, setGeneratedPara] = useState([]);

  const generateParagraphs = (e) => {
    e.preventDefault();
    if (amount === 0 || amount < 0) {
      setGeneratedPara(paragraphs.slice(0, 1));
    } else if (amount > paragraphs.length) {
      setGeneratedPara(paragraphs.slice(0, paragraphs.length - 1));
    } else {
      setGeneratedPara(paragraphs.slice(0, amount));
    }
  };
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum</h3>
      <form
        onSubmit={(e) => generateParagraphs(e)}
        action=""
        className="lorem-form"
      >
        <label htmlFor="amount">paragraphs:</label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          name="amount"
          id="amount"
          value={amount}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {generatedPara && generatedPara.map((para) => <p>{para}</p>)}
      </article>
    </section>
  );
}

export default App;
