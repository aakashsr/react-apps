import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [allQuestions,setAllQuestions] = useState(data);
  const questions = allQuestions.map((question) => {
    return <SingleQuestion key={question.id} {...question} />;
  });
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <div className="info">{questions}</div>
      </div>
    </main>
  );
}

export default App;
