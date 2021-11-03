import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({item,remove}) => {
  return (
    <div className="grocery-list">
      <article className="grocery-item">
        <p className="title">{item}</p>
        <div className="btn-container">
          <button className="edit-btn">
            <FaEdit />
          </button>
          <button onClick={() => remove(item)} className="delete-btn">
            <FaTrash />
          </button>
        </div>
      </article>
    </div>
  );
};

export default List;
