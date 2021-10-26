import React from "react";

const Menu = ({id,img,title,price,desc}) => {
  
  return (
    <article id={id} className="menu-item">
      <img src={img} alt="image" className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">{price}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;
