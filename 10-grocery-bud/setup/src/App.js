import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [itemValue, setItemValue] = useState("");
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemValue === "") {
      return setAlert({
        show: true,
        msg: "Please enter some value",
        type: "danger",
      });
    }

    const newItem = { id: new Date().getTime().toString(), title: itemValue };
    setItems([...items, newItem]);
    setItemValue("");
    setAlert({ show: true, msg: "Items added to the list", type: "success" });
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    if(newItems.length === 0){
      setAlert({ show: true, msg: "Empty list", type: "danger" });
    } else {
      setAlert({ show: true, msg: "Item removed", type: "danger" });
    }
  };

  const clearList = () => {
    setItems([]);
    setAlert({ show: true, msg: "Empty list", type: "danger" });
  };

  const itemsList = items.map((item) => {
    return <List key={item.id} item={item} remove={removeItem} />;
  });

  return (
    <section className="section-center">
      <form action="" className="grocery-form">
        {alert.show && (
          <Alert type={alert.type} msg={alert.msg} setAlert={setAlert} items={items} />
        )}
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
          <button onClick={clearList} className="clear-btn">
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
