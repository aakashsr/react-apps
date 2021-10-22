import React from "react";
import Tour from "./Tour";
const Tours = ({ tourData , setTourData }) => {
  const allTours = tourData.map((tour) => {
    return <Tour key={tour.id} id={tour.id} tour={tour} tourData={tourData} setTourData={setTourData} />;
  });

  return allTours;
};

export default Tours;


