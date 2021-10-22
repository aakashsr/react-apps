import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [personsData, setPersonsData] = useState([...data]);

  const persons = personsData.map((item) => {
    return (
      <List item={item}/>
    );
  });

  const clearAll = () => {
    setPersonsData([]);
  };
  
  return (
    <>
      <main>
        <div className="container">
          <h3>{personsData.length} birthdays today</h3>
          {persons}
          <button onClick={clearAll}>Clear All</button>
        </div>
      </main>
    </>
  );
}

export default App;
