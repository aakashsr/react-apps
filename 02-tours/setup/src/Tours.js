import React from "react";
import Tour from "./Tour";
const Tours = ({ tourData , deleteTour }) => {
  const allTours = tourData.map((tour) => {
    return <Tour key={tour.id} id={tour.id} tour={tour} deleteTour={deleteTour} />;
  });

  return allTours;
};

export default Tours;


