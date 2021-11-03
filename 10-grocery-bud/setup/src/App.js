import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [itemValue, setItemValue] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, itemValue]);
    setItemValue("");
  };

  const removeItem = (item) => {
    const newItems = items.filter((value) => value !== item);
    setItems(newItems);
  };

  const itemsList = items.map((item) => {
    return <List item={item} remove={removeItem} />;
  });


  console.log(items);
  return (
    <section className="section-center">
      <form action="" className="grocery-form">
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            value={itemValue}
            onChange={(e) => setItemValue(e.target.value)}
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
          />
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      {itemsList.length !== 0 && (
        <div className="grocery-container">{itemsList}</div>
      )}
    </section>
  );
}

export default App;
