import React from "react";

const List = ({ data }) => {
  const allPersons = data.map((person) => {
    const { image, name, age } = person;
    return (
      <article className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    );
  });
  return allPersons;
};

export default List;
