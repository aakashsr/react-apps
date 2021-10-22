import React from "react";

const List = ({item}) => {
  console.log(item);
  return (
    <>
      <div key={item.id} className="person">
        <img src={item.image} alt="thumbnail" />
        <div>
          <h4>{item.name}</h4>
          <p>{item.age} years</p>
        </div>
      </div>
    </>
  );
};

export default List;
