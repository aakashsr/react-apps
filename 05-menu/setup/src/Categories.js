import React, { useState } from "react";

const Categories = ({ categories, filterRecipes }) => {
  const buttons = categories.map((category,i) => (
    <button key={i} onClick={()=>filterRecipes(category)} type="button" className="filter-btn">
      {category}
    </button>
  ));

  return (
    <>
      <div className="btn-container">{buttons}</div>
    </>
  );
};

export default Categories;
