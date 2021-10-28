import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [personsData, setPersonsData] = useState([...data]);

  return (
    <>
      <main>
        <div className="container">
          <h3>{personsData.length} birthdays today</h3>
          <List data={personsData} />
          <button onClick={() => setPersonsData([])}>Clear All</button>
        </div>
      </main>
    </>
  );
}

export default App;
