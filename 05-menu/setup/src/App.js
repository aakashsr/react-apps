import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Title from "./Title";
// const allCategories = ['all', ...new Set(items.map((item) => item.category))]; // Short and alternate approach to get unique categories.


function App() {
  const [filteredItems, setFilteredItems] = useState(items);
  const [categories, setCategories] = useState(["all"]);

  items.forEach((item) => {
    if (!categories.includes(item.category)) {
      setCategories([...categories, item.category]);
    }
  });

  const filterRecipes = (category) => {
    if (category === "all") {
      setFilteredItems(items);
    } else {
      const newRecipes = items.filter(
        (item) => item.category === category
      );
      setFilteredItems(newRecipes);
    }
  };

  const allRecipes = filteredItems.map((item) => {
    return (
      <>
        <Menu {...item} />
      </>
    );
  });

  return (
    <main>
      <div className="menu section">
        <Title />

        <Categories categories={categories} filterRecipes={filterRecipes} />

        <div className="section-center">{allRecipes}</div>
      </div>
    </main>
  );
}

export default App;
