import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [itemValue, setItemValue] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), title: itemValue };
    setItems([...items, newItem]);
    setItemValue("");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const itemsList = items.map((item) => {
    return <List key={item.id} item={item} remove={removeItem} />;
  });

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
        <div className="grocery-container">
          <div className="grocery-list">{itemsList}</div>
          <button onClick={() => setItems([])} className="clear-btn">
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
