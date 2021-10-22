import React, { useState } from "react";

const Tour = ({ tour, id, tourData, setTourData }) => {
  console.log(tourData);

  const deleteTour = (id) => {
    setTourData(tourData.filter((tour) => tour.id !== id));
  };
  return (
    <div className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <div className="tour-price">{tour.price}</div>
        </div>
        <p>{tour.info}</p>
        <button onClick={() => deleteTour(id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
