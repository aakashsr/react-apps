import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({item,remove}) => {
  return (
      <article className="grocery-item">
        <p className="title">{item.title}</p>
        <div className="btn-container">
          <button className="edit-btn">
            <FaEdit />
          </button>
          <button onClick={() => remove(item.id)} className="delete-btn">
            <FaTrash />
          </button>
        </div>
      </article>
  );
};

export default List;
